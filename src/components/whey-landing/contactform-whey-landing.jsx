import React, { useState } from "react";
import { publicAxiosInstance } from "../../assets/js/config/api";
// import './ContactFormWheyLanding.css'

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#3d7a18" strokeWidth="2.5">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#3d7a18" strokeWidth="2.5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const CupIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#3d7a18" strokeWidth="2.5">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#3d7a18" strokeWidth="2.5">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const stageLabels = {
  Starting_my_first_brand: "Starting my first brand",
  already_selling: "Already selling, looking to scale",
  switching_manufacturer: "Switching from another manufacturer",
};

const ContactFormWheyLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
    stage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

    if (!formData.stage) {
      alert("Please select your current stage.");
      return;
    }

    setIsSubmitting(true);

    try {
      await publicAxiosInstance.post("/contact-inquiry", {
        subject: "Whey Landing Contact Form",
        name: trimmedName,
        email: `wheylanding+${trimmedPhone}@gomzi.in`,
        mobile: trimmedPhone,
        message: [
          `Instagram Handle / Brand Name: ${formData.instagram.trim() || "N/A"}`,
          `Stage: ${stageLabels[formData.stage] || formData.stage}`,
        ].join("\n"),
        source: window.location.href,
      });

      setFormData({
        name: "",
        phone: "",
        instagram: "",
        stage: "",
      });
      alert("Form submitted! Our expert will reach out shortly.");
    } catch (error) {
      console.error("Whey landing contact form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="whey-wrap" id="contact">
      <div className="whey-section">
        {/* LEFT PANEL */}
        <div className="whey-left">
          <h1 className="hero-headline">
            Launch Your Own
            <br />
            <span>Protein Brand.</span>
          </h1>

          <p className="hero-sub">
            Start with clarity on formulation, pricing, quality, and timelines.
            Then decide the next move with confidence.
          </p>

          <div className="trust-grid">
            <div className="trust-chip">
              <CheckCircleIcon /> GMP Certified
            </div>
            <div className="trust-chip">
              <BriefcaseIcon /> Clear MOQ Guidance
            </div>
            <div className="trust-chip">
              <CupIcon /> No Hard Sell
            </div>
            <div className="trust-chip">
              <LockIcon /> Confidential
            </div>
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
              Talk To Our Manufacturing Expert Free.
            </h2>
            <p className="form-subtitle">
              Get clarity before you build, scale, or switch.
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
                <label className="field-label">
                  Instagram Handle / Brand Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="instagram"
                  placeholder="@yourhandle or brand name"
                  value={formData.instagram}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label className="field-label">Where Are You Right Now?</label>
                <select
                  className={`form-select ${formData.stage ? "value-selected" : "placeholder-active"}`}
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select your stage
                  </option>
                  <option value="Starting_my_first_brand">
                    Starting my first brand
                  </option>
                  <option value="already_selling">
                    Already selling, looking to scale
                  </option>
                  <option value="switching_manufacturer">
                    Switching from another manufacturer
                  </option>
                </select>
              </div>

              <button type="submit" className="cta-btn">
                Talk to Our Expert - It's Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWheyLanding;
