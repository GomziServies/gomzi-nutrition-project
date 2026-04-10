import React, { useState } from "react";
import "../../assets/css/nutrition.css";

const servingCards = [
  {
    icon: "fas fa-seedling",
    title: "Startups",
    subtitle:
      "We help new brands launch their nutraceutical products with low MOQ and full support.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-dumbbell",
    title: "Fitness Brands",
    subtitle:
      "From protein powders to pre-workouts, we manufacture for performance-focused brands.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Healthcare Companies",
    subtitle:
      "Clinically-backed formulations for pharma and healthcare product lines.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-industry",
    title: "Nutraceutical Businesses",
    subtitle:
      "Scalable manufacturing for established businesses seeking reliable third-party partners.",
    color: "#86c33a",
  },
];

const ServingAcrossIndia = () => {
  const [, setHoveredCard] = useState(null);

  return (
    <>
      <section className="sai-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="sai-badge">
              <i className="fas fa-map-marker-alt"></i>
              Surat, Gujarat — Pan India Reach
            </div>
            <h2 className="sai-heading">
              Serving Across <span>India</span>
            </h2>
            <div className="sai-underline mx-auto"></div>
            <p className="sai-subtitle">
              Located in Surat, Gujarat, Gomzi Lifescience LLP provides
              nutraceutical third-party manufacturing services across India,
              supporting startups, fitness brands, healthcare companies, and
              established nutraceutical businesses.
            </p>
          </div>

          <div className="row align-items-center gx-4 gy-4 mb-4">
            <div className="col-12 col-lg-7">
              <div className="sai-map-block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.123!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59c4dba edd%3A0xcb75f4d62d7aaaab!2sSurat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="380"
                  className="border-0-br-16"
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="sai-map-pill">
                  <i className="fas fa-location-dot"></i>
                  Headquartered in Surat, Gujarat
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="sai-stats-grid">
                {[
                  { num: "28+", label: "States Served" },
                  { num: "500+", label: "Products Manufactured" },
                  { num: "200+", label: "Brand Partners" },
                  { num: "10+", label: "Years of Experience" },
                ].map((stat, i) => (
                  <div className="sai-stat-box" key={i}>
                    <div className="sai-stat-num">{stat.num}</div>
                    <p className="sai-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {servingCards.map((card, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <div
                  className="sai-card"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="sai-card-icon">
                    <i className={card.icon}></i>
                  </div>
                  <div className="sai-card-title">{card.title}</div>
                  <p className="sai-card-text">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServingAcrossIndia;
