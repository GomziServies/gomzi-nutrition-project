import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicAxiosInstance } from "../../assets/js/config/api";
import { toast } from "react-toastify";
// import './ContactFormWheyLanding.css'

const businessStageLabels = {
  launching_new_brand: "Launching a new brand",
  scaling_existing_brand: "Scaling an existing brand",
  switching_manufacturer: "Switching manufacturer",
  exploring_future: "Exploring for future",
};

const requirementLabels = {
  sample: "Sample",
  pricing: "Pricing",
  formulation_guidance: "Formulation guidance",
  packaging_support: "Packaging support",
  full_launch_support: "Full launch support",
};

const startTimelineLabels = {
  immediately: "Immediately",
  within_15_days: "Within 15 days",
  within_30_days: "Within 30 days",
  after_1_2_months: "After 1-2 months",
  just_researching: "Just researching",
};

const ContactFormWheyLanding = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   instagram: "",
  //   stage: "",
  // });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    businessStage: "",
    requirement: "",
    startTimeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [verificationId, setVerificationId] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [editablePhone, setEditablePhone] = useState("");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [otpError, setOtpError] = useState("");
  const navigate = useNavigate();

  const clearAuthSession = () => {
    localStorage.removeItem("fg_group_user_authorization");
    localStorage.removeItem("user_info");
  };

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
    setOtpError("");

    try {
      const cleanPhone = phoneToUse.replace(/\s/g, "");
      const res = await publicAxiosInstance.post("/inquiry-otp/send", {
        mobile: cleanPhone,
        country_code: "+91",
      });

      if (res.data?.status === 200) {
        setVerificationId(res.data.data.verification_id);
        toast.success("OTP sent to your WhatsApp number!");
        setCountdown(60);
      } else {
        setOtpError(res.data?.message || "Failed to send OTP.");
        toast.error(res.data?.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      setOtpError(err.response?.data?.message || "Error sending OTP.");
      toast.error(err.response?.data?.message || "Error sending OTP.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleOtpInputChange = (index, val) => {
    const newVal = val.replace(/[^0-9]/g, "");
    if (otpError) setOtpError("");

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

    if (index < 5) {
      const nextInput = document.getElementById(`whey-otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otpValues[index] === "" && index > 0) {
        const newOtp = [...otpValues];
        newOtp[index - 1] = "";
        setOtpValues(newOtp);
        const prevInput = document.getElementById(
          `whey-otp-input-${index - 1}`,
        );
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
    if (otpError) setOtpError("");
    const pasteData = e.clipboardData
      .getData("text")
      .trim()
      .replace(/[^0-9]/g, "");

    if (pasteData.length >= 6) {
      const newOtp = pasteData.slice(0, 6).split("");
      setOtpValues(newOtp);
      const lastInput = document.getElementById("whey-otp-input-5");
      if (lastInput) lastInput.focus();
    }
  };

  const handleVerifyAndSubmit = async (e) => {
    if (e) e.preventDefault();
    setOtpError("");

    const enteredOtp = otpValues.join("");
    const incorrectOtpMessage = "Incorrect OTP. Please try again.";
    const isWrongOtpError = (message = "") =>
      message.includes("verification_id") ||
      message.toLowerCase().includes("otp");

    if (!verificationId) {
      setOtpError(incorrectOtpMessage);
      return;
    }

    if (enteredOtp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
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
        setIsSubmitting(true);

        const trimmedName = formData.name.trim();
        const trimmedPhone = formData.phone.replace(/\s/g, "");

        await publicAxiosInstance.post("/contact-inquiry", {
          subject: "Whey Landing Contact Form",
          name: trimmedName,
          email: `wheylanding+${trimmedPhone}@gomzi.in`,
          mobile: trimmedPhone,
          message: [
            `City: ${formData.city}`,
            `Business Stage: ${businessStageLabels[formData.businessStage]}`,
            `Requirement: ${requirementLabels[formData.requirement]}`,
            `Start Timeline: ${startTimelineLabels[formData.startTimeline]}`,
          ].join("\n"),
          source: window.location.href,
        });

        setFormData({
          name: "",
          phone: "",
          city: "",
          businessStage: "",
          requirement: "",
          startTimeline: "",
        });
        clearAuthSession();
        setShowOtpModal(false);
        setOtpValues(["", "", "", "", "", ""]);
        setVerificationId("");

        setTimeout(() => {
          navigate("/thank-you");
        }, 900);
      } else {
        setOtpError(incorrectOtpMessage);
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      const backendMessage = err.response?.data?.message || "";

      if (backendMessage && isWrongOtpError(backendMessage)) {
        setOtpError(incorrectOtpMessage);
        return;
      }

      const message = backendMessage || incorrectOtpMessage;
      setOtpError(message);
      toast.error(message);
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
    setOtpError("");
    handleSendOtp(editablePhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.replace(/\s/g, "");

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // if (!formData.stage) {
    //   alert("Please select your current stage.");
    //   return;
    // }

    if (!formData.city.trim()) {
      alert("Please enter your city.");
      return;
    }

    if (!formData.businessStage) {
      alert("Please select your business stage.");
      return;
    }

    if (!formData.requirement) {
      alert("Please select your requirement.");
      return;
    }

    if (!formData.startTimeline) {
      alert("Please select your start timeline.");
      return;
    }

    setShowOtpModal(true);
    setCountdown(60);
    setOtpValues(["", "", "", "", "", ""]);
    setVerificationId("");
    setOtpError("");
    setEditablePhone(trimmedPhone);
    setIsEditingPhone(false);

    await handleSendOtp(trimmedPhone);
  };

  return (
    <div className="whey-wrap" id="contact">
      <div className="whey-section">
        {/* LEFT PANEL */}
        <div className="whey-left">
          <h1 className="hero-headline">
            Launch Your Protein Brand{" "}
            <span>With Clear Manufacturing Guidance</span>
          </h1>

          <p className="hero-sub">
            Get sample support, formulation guidance, MOQ clarity, pricing
            direction, and production timelines before you place your first
            batch.
          </p>

          <div className="trust-grid">
            <div className="trust-chip">Sample Before Ord</div>
            <div className="trust-chip">MOQ From 50 KG</div>
            <div className="trust-chip">Private Label Support</div>
            <div className="trust-chip">Expert Formulation Help</div>
          </div>

          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-num">500+</div>
              <div className="stat-label">Brands Launched</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Free</div>
              <div className="stat-label">Expert Consultation</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">15-20</div>
              <div className="stat-label">Days to Launch</div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="whey-right">
          <div className="form-card">
            <h2 className="form-title">
              Request Sample & Start Your Whey Brand
            </h2>
            <p className="form-subtitle">
              Fill the details below. Our team will share sample, MOQ, pricing,
              and manufacturing guidance on WhatsApp.
            </p>
            <div className="form-divider" />

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label className="field-label">Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label className="field-label">City</label>

                <input
                  className="form-input"
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  Are you launching a new brand or scaling an existing one?
                </label>

                <select
                  className={`form-select ${
                    formData.businessStage
                      ? "value-selected"
                      : "placeholder-active"
                  }`}
                  name="businessStage"
                  value={formData.businessStage}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select option
                  </option>

                  <option value="launching_new_brand">
                    Launching a new brand
                  </option>

                  <option value="scaling_existing_brand">
                    Scaling an existing brand
                  </option>

                  <option value="switching_manufacturer">
                    Switching manufacturer
                  </option>

                  <option value="exploring_future">Exploring for future</option>
                </select>
              </div>

              <div className="field-group">
                <label className="field-label">What do you need first?</label>

                <select
                  className={`form-select ${
                    formData.requirement
                      ? "value-selected"
                      : "placeholder-active"
                  }`}
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select requirement
                  </option>

                  <option value="sample">Sample</option>

                  <option value="pricing">Pricing</option>

                  <option value="formulation_guidance">
                    Formulation guidance
                  </option>

                  <option value="packaging_support">Packaging support</option>

                  <option value="full_launch_support">
                    Full launch support
                  </option>
                </select>
              </div>

              <div className="field-group">
                <label className="field-label">
                  When do you want to start?
                </label>

                <select
                  className={`form-select ${
                    formData.startTimeline
                      ? "value-selected"
                      : "placeholder-active"
                  }`}
                  name="startTimeline"
                  value={formData.startTimeline}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select timeline
                  </option>

                  <option value="immediately">Immediately</option>

                  <option value="within_15_days">Within 15 days</option>

                  <option value="within_30_days">Within 30 days</option>

                  <option value="after_1_2_months">After 1-2 months</option>

                  <option value="just_researching">Just researching</option>
                </select>
              </div>

              <button
                type="submit"
                className="cta-btn"
                disabled={
                  !formData.name.trim() ||
                  !formData.phone.trim() ||
                  !formData.city.trim() ||
                  !formData.businessStage ||
                  !formData.requirement ||
                  !formData.startTimeline ||
                  isSubmitting
                }
              >
                Request Sample & Start Your Whey Brand
              </button>
            </form>
          </div>
        </div>
      </div>

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

            {otpError && <div className="otp-warning-banner">{otpError}</div>}

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
                    id={`whey-otp-input-${index}`}
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
                    {isSendingOtp ? "Resending..." : "Resend OTP via WhatsApp"}
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
  );
};

export default ContactFormWheyLanding;
