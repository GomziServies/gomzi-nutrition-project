import React from "react";
import "../../assets/css/whey-landing.css";
import "../../assets/css/free-consultation.css";
import WheyLandingHeader from "../../components/partials/Header/whey-landing-header";
import BuiltForFirstLaunches from "../../components/whey-landing/built-for-first-launches";
import WhoSection from "../../components/whey-landing/who-section";
import FoundersLanding from "../../components/whey-landing/founders";
import HowItWorks from "../../components/whey-landing/how-it-works";
import Certifications from "../../components/whey-landing/certifications";
import Faqwheylanding from "../../components/whey-landing/faq-whey-landing";
import WheyLandingFooter from "../../components/partials/Footer/whey-landing-footer";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { publicAxiosInstance } from "../../assets/js/config/api";

const FreeConsultation = () => {
  const navigate = useNavigate();
  const canonicalUrl = window.location.href;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    userType: "",
    productType: "",
    budget: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(true);

  // OTP Verification States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [verificationId, setVerificationId] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [devOtp, setDevOtp] = useState("");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editablePhone, setEditablePhone] = useState("");

  // OTP Countdown Timer effect
  useEffect(() => {
    let timer;
    if (showOtpModal && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showOtpModal, countdown]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async (phoneToUse) => {
    setIsSendingOtp(true);
    try {
      const cleanPhone = phoneToUse.replace(/\s/g, "");
      const res = await publicAxiosInstance.post("/inquiry-otp/send", {
        mobile: cleanPhone,
        country_code: "+91",
      });

      if (res.data?.status === 200) {
        setVerificationId(res.data.data.verification_id);
        if (res.data.data.otp) {
          setDevOtp(res.data.data.otp);
        } else {
          setDevOtp("");
        }
        toast.success("OTP sent to your WhatsApp number!");
        setCountdown(60); // Reset timer
      } else {
        toast.error(res.data?.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      toast.error(err.response?.data?.message || "Error sending OTP.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyAndSubmit = async (e) => {
    if (e) e.preventDefault();
    const enteredOtp = otpValues.join("");
    if (enteredOtp.length < 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const verifyRes = await publicAxiosInstance.post("/inquiry-otp/verify", {
        verification_id: verificationId,
        otp: enteredOtp,
      });

      if (verifyRes.data?.status === 200) {
        toast.success("Mobile verified successfully!");

        // Mobile successfully verified, now perform final submission
        setIsSubmitting(true);
        const trimmedName = formData.name.trim();
        const trimmedPhone = formData.phone.replace(/\s/g, "");

        await publicAxiosInstance.post("/contact-inquiry", {
          subject: "Free Consultation Inquiry",
          name: trimmedName,
          email:
            formData.email.trim() || `consultation+${trimmedPhone}@gomzi.in`,
          mobile: trimmedPhone,
          message: [
            `User Type: ${formData.userType}`,
            `Product Type: ${formData.productType || "N/A"}`,
            `Budget: ${formData.budget || "N/A"}`,
            `Requirement: ${formData.requirement.trim() || "N/A"}`,
          ].join("\n"),
          source: window.location.href,
        });

        // Reset all states
        setFormData({
          name: "",
          phone: "",
          email: "",
          userType: "",
          productType: "",
          budget: "",
          requirement: "",
        });
        setShowOtpModal(false);
        setOtpValues(["", "", "", "", "", ""]);
        setDevOtp("");

        setTimeout(() => {
          navigate("/free-consultation/thank-you");
        }, 900);
      } else {
        toast.error(
          verifyRes.data?.message || "Incorrect OTP. Please try again.",
        );
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      toast.error(
        err.response?.data?.message || "Invalid OTP. Please try again.",
      );
    } finally {
      setIsVerifyingOtp(false);
      setIsSubmitting(false);
    }
  };

  const handleSavePhone = () => {
    if (!/^[6-9]\d{9}$/.test(editablePhone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    setFormData((prev) => ({ ...prev, phone: editablePhone }));
    setIsEditingPhone(false);
    handleSendOtp(editablePhone);
  };

  const handleOtpInputChange = (index, val) => {
    const newVal = val.replace(/[^0-9]/g, "");
    if (newVal === "") {
      const newOtp = [...otpValues];
      newOtp[index] = "";
      setOtpValues(newOtp);
      return;
    }

    const singleDigit = newVal.slice(-1);
    const newOtp = [...otpValues];
    newOtp[index] = singleDigit;
    setOtpValues(newOtp);

    // Auto-focus next input field
    if (index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otpValues[index] === "" && index > 0) {
        const newOtp = [...otpValues];
        newOtp[index - 1] = "";
        setOtpValues(newOtp);
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) prevInput.focus();
      } else {
        const newOtp = [...otpValues];
        newOtp[index] = "";
        setOtpValues(newOtp);
      }
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .trim()
      .replace(/[^0-9]/g, "");
    if (pasteData.length >= 6) {
      const newOtp = pasteData.slice(0, 6).split("");
      setOtpValues(newOtp);
      const lastInput = document.getElementById("otp-input-5");
      if (lastInput) lastInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.replace(/\s/g, "");

    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.userType) {
      toast.error("Please select who you are.");
      return;
    }

    // Instead of immediate submit, trigger WhatsApp OTP verification modal
    setShowOtpModal(true);
    setCountdown(60);
    setOtpValues(["", "", "", "", "", ""]);
    setDevOtp("");
    setIsEditingPhone(false);
    setEditablePhone(trimmedPhone);

    await handleSendOtp(trimmedPhone);
  };

  useEffect(() => {
    const footer = document.querySelector(".wh-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Launch Your Own Supplement Brand | Gomzi Life Sciences</title>
        <meta
          name="description"
          content="Premium Private Label Supplement Manufacturing. Manufacturing, Branding, and Packaging all in one place."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="sl-page">
        <WheyLandingHeader />

        <main className="sl-main-container">
          {/* Left Section */}
          <section className="sl-left">
            <span className="sl-tag">
              Private Label Supplement Manufacturing
            </span>
            <h1 className="sl-title">
              Build Your Own <br />
              <span>Supplement</span> Brand.
            </h1>
            <p className="sl-subtitle">
              You built the audience. Now build the product. Get clear answers
              on formulation, pricing, quality, and timelines before you place
              your first order.
            </p>

            <div className="sl-product-grid">
              <div className="sl-product-btn">Whey Protein</div>
              <div className="sl-product-btn">Mass Gainer</div>
              <div className="sl-product-btn">Pre Workout</div>
              <div className="sl-product-btn">Multivitamins</div>
              <div className="sl-product-btn">Peanut Butter</div>
              <div className="sl-product-btn">Custom Products</div>
            </div>
          </section>

          {/* Right Section - Form */}
          <section className="sl-right" id="contact">
            <h2 className="sl-form-title">Get Free Consultation</h2>
            <form className="sl-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="sl-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp Number"
                className="sl-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="sl-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                className="sl-select"
                name="userType"
                required
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  You are?
                </option>
                <option value="gym_owner">Gym Owner</option>
                <option value="supplement_business_owner">
                  Supplement Business Owner
                </option>
                <option value="fitness_trainer">Fitness Trainer</option>
                <option value="influencer">Influencer</option>
                <option value="new_startup">New Startup</option>
                <option value="other">Other</option>
              </select>

              <select
                className="sl-select"
                name="productType"
                required
                value={formData.productType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Product Type
                </option>
                <option value="whey_protein">Whey Protein</option>
                <option value="mass_gainer">Mass Gainer</option>
                <option value="pre_workout">Pre-workout</option>
                <option value="multivitamin_tablets">
                  Multivitamin Tablets
                </option>
                <option value="peanut_butter">Peanut Butter</option>
                <option value="all_of_the_above">All of the Above</option>
              </select>

              <select
                className="sl-select"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Your Budget
                </option>
                <option value="1.5-2.5_lakh">₹1.5 Lakh - ₹2.5 Lakh</option>
                <option value="2.5-5_lakh">₹2.5 Lakh - ₹5 Lakh</option>
                <option value="5-10_lakh">₹5 Lakh - ₹10 Lakh</option>
                <option value="10_lakh+">₹10 Lakh +</option>
              </select>

              <textarea
                name="requirement"
                placeholder="Tell us about your requirement"
                className="sl-textarea"
                rows="3"
                value={formData.requirement}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                className="sl-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Start My Brand"}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <div className="sl-form-footer">
                100+ Brands Launched | Fast Delivery | Premium Quality
              </div>
            </form>
          </section>
        </main>

        <WhoSection />
        <FoundersLanding />
        <BuiltForFirstLaunches />
        <HowItWorks />
        <Certifications />
        <Faqwheylanding />
        <WheyLandingFooter />

        {showOtpModal && (
          <div className="otp-modal-overlay">
            <div className="otp-modal">
              <button
                type="button"
                className="otp-modal-close"
                onClick={() => setShowOtpModal(false)}
              >
                &times;
              </button>

              <div className="otp-icon-wrap">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>

              <h3 className="otp-modal-title">Verify WhatsApp Number</h3>
              <p className="otp-modal-desc">
                We have sent a 6-digit OTP verification code to your WhatsApp
                number to process your consultation request.
              </p>

              {isEditingPhone ? (
                <div className="otp-edit-input-wrapper">
                  <input
                    type="tel"
                    className="otp-edit-input"
                    value={editablePhone}
                    onChange={(e) =>
                      setEditablePhone(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="Enter WhatsApp Number"
                    maxLength="10"
                    autoFocus
                  />
                  <div className="otp-edit-actions">
                    <button
                      type="button"
                      className="otp-action-btn save"
                      onClick={handleSavePhone}
                    >
                      Send OTP
                    </button>
                    <button
                      type="button"
                      className="otp-action-btn cancel"
                      onClick={() => setIsEditingPhone(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="otp-phone-wrapper">
                  <span>+91 {formData.phone}</span>
                  <button
                    type="button"
                    className="otp-phone-edit"
                    title="Edit Number"
                    onClick={() => {
                      setEditablePhone(formData.phone);
                      setIsEditingPhone(true);
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                    </svg>
                  </button>
                </div>
              )}

              <form onSubmit={handleVerifyAndSubmit}>
                <div className="otp-input-container">
                  {otpValues.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength="1"
                      className="otp-digit-input"
                      value={digit}
                      onChange={(e) =>
                        handleOtpInputChange(index, e.target.value)
                      }
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      required
                      autoComplete="off"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                <div className="otp-timer-text">
                  {countdown > 0 ? (
                    <>
                      Resend OTP in <span>{countdown}s</span>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="otp-resend-btn"
                      onClick={() => handleSendOtp(formData.phone)}
                      disabled={isSendingOtp}
                    >
                      {isSendingOtp
                        ? "Resending..."
                        : "Resend OTP via WhatsApp"}
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="otp-verify-submit"
                  disabled={isVerifyingOtp || otpValues.join("").length < 6}
                >
                  {isVerifyingOtp ? "Verifying..." : "Verify & Start My Brand"}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FreeConsultation;
