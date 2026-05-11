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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

    setIsSubmitting(true);

    try {
      await publicAxiosInstance.post("/contact-inquiry", {
        subject: "Free Consultation Inquiry",
        name: trimmedName,
        email: formData.email.trim() || `consultation+${trimmedPhone}@gomzi.in`,
        mobile: trimmedPhone,
        message: [
          `User Type: ${formData.userType}`,
          `Product Type: ${formData.productType || "N/A"}`,
          `Budget: ${formData.budget || "N/A"}`,
          `Requirement: ${formData.requirement.trim() || "N/A"}`,
        ].join("\n"),
        source: window.location.href,
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        userType: "",
        productType: "",
        budget: "",
        requirement: "",
      });

      setTimeout(() => {
        navigate("/free-consultation/thank-you");
      }, 900);
    } catch (error) {
      console.error("Free Consultation form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const footer = document.querySelector(".wh-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting);
      },
      { threshold: 0.1 }
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
            <span className="sl-tag">Private Label Supplement Manufacturing</span>
            <h1 className="sl-title">
              Build Your Own <br />
              <span>Supplement</span> Brand.
            </h1>
            <p className="sl-subtitle">
              You built the audience. Now build the product. Get clear answers on formulation, pricing, quality, and timelines before you place your first order.
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
                <option value="" disabled>You are?</option>
                <option value="gym_owner">Gym Owner</option>
                <option value="supplement_business_owner">Supplement Business Owner</option>
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
                <option value="" disabled>Select Product Type</option>
                <option value="whey_protein">Whey Protein</option>
                <option value="mass_gainer">Mass Gainer</option>
                <option value="pre_workout">Pre-workout</option>
                <option value="multivitamin_tablets">Multivitamin Tablets</option>
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
                <option value="" disabled>Your Budget</option>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
      </div>
    </>
  );
};

export default FreeConsultation;
