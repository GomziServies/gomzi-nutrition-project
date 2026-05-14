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
  after_1_2_months: "After 1–2 months",
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

    setIsSubmitting(true);

    try {
      await publicAxiosInstance.post("/contact-inquiry", {
        subject: "Whey Landing Contact Form",
        name: trimmedName,
        email: `wheylanding+${trimmedPhone}@gomzi.in`,
        mobile: trimmedPhone,
        // message: [
        //   `Instagram Handle / Brand Name: ${formData.instagram.trim() || "N/A"}`,
        //   `Stage: ${stageLabels[formData.stage] || formData.stage}`,
        // ].join("\n"),
        message: [
          `City: ${formData.city}`,
          `Business Stage: ${businessStageLabels[formData.businessStage]}`,
          `Requirement: ${requirementLabels[formData.requirement]}`,
          `Start Timeline: ${startTimelineLabels[formData.startTimeline]}`,
        ].join("\n"),
        source: window.location.href,
      });

      // setFormData({
      //   name: "",
      //   phone: "",
      //   instagram: "",
      //   stage: "",
      // });
      setFormData({
        name: "",
        phone: "",
        city: "",
        businessStage: "",
        requirement: "",
        startTimeline: "",
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

                  <option value="after_1_2_months">After 1–2 months</option>

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
    </div>
  );
};

export default ContactFormWheyLanding;
