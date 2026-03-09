import React, { useState } from "react";

const servingCards = [
  {
    icon: "fas fa-seedling",
    title: "Startups",
    subtitle: "We help new brands launch their nutraceutical products with low MOQ and full support.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-dumbbell",
    title: "Fitness Brands",
    subtitle: "From protein powders to pre-workouts, we manufacture for performance-focused brands.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Healthcare Companies",
    subtitle: "Clinically-backed formulations for pharma and healthcare product lines.",
    color: "#86c33a",
  },
  {
    icon: "fas fa-industry",
    title: "Nutraceutical Businesses",
    subtitle: "Scalable manufacturing for established businesses seeking reliable third-party partners.",
    color: "#86c33a",
  },
];

const ServingAcrossIndia = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .sai-section {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          padding: 70px 0 80px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle BG decoration */
        .sai-section::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(134,195,58,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .sai-section::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(134,195,58,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* ---- HEADING ---- */
        .sai-heading {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 800;
          color: #232323;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          line-height: 1.2;
        }

        .sai-heading span {
          color: #86c33a;
        }

        .sai-underline {
          width: 60px;
          height: 4px;
          background: #86c33a;
          border-radius: 2px;
          margin: 14px auto 0;
        }

        .sai-subtitle {
          font-size: clamp(13px, 1.8vw, 15px);
          color: #555;
          max-width: 680px;
          margin: 18px auto 0;
          line-height: 1.8;
          font-weight: 400;
        }

        /* ---- BADGE ---- */
        .sai-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fff;
          border: 1.5px solid #86c33a;
          color: #4a7a1a;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(134,195,58,0.15);
          letter-spacing: 0.3px;
        }

        .sai-badge i {
          color: #86c33a;
          font-size: 13px;
        }

        /* ---- MAP BLOCK ---- */
        .sai-map-block {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.07);
          border: 1px solid rgba(134,195,58,0.2);
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sai-map-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          min-height: 280px;
          max-height: 420px;
        }

        /* Map overlay pill */
        .sai-map-pill {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(134,195,58,0.92);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 20px;
          border-radius: 50px;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(134,195,58,0.4);
          backdrop-filter: blur(4px);
          letter-spacing: 0.4px;
        }

        .sai-map-pill i {
          margin-right: 6px;
        }

        /* ---- CARDS ---- */
        .sai-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px 22px;
          height: 100%;
          border: 1.5px solid #eaf5d6;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .sai-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #86c33a, #a8e063);
          border-radius: 18px 18px 0 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .sai-card:hover {
          transform: translateY(-6px);
          border-color: #86c33a;
          box-shadow: 0 16px 40px rgba(134,195,58,0.18);
        }

        .sai-card:hover::before {
          transform: scaleX(1);
        }

        .sai-card-icon {
          width: 56px;
          height: 56px;
          background: #f0fadf;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #86c33a;
          margin-bottom: 16px;
          transition: 0.3s ease;
        }

        .sai-card:hover .sai-card-icon {
          background: #86c33a;
          color: #fff;
          transform: rotate(-5deg) scale(1.05);
        }

        .sai-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #232323;
          margin-bottom: 8px;
        }

        .sai-card-text {
          font-size: 12.5px;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        /* ---- STATS ROW ---- */
        .sai-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .sai-stat-box {
          text-align: center;
          padding: 24px 10px;
          background: #fff;
          border-radius: 14px;
          border: 1.5px solid #eaf5d6;
          box-shadow: 0 3px 15px rgba(0,0,0,0.04);
          transition: 0.3s;
        }

        .sai-stat-box:hover {
          border-color: #86c33a;
          box-shadow: 0 8px 25px rgba(134,195,58,0.15);
        }

        .sai-stat-num {
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 800;
          color: #86c33a;
          line-height: 1;
          margin-bottom: 6px;
        }

        .sai-stat-label {
          font-size: 11.5px;
          color: #666;
          font-weight: 500;
          margin: 0;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 575.98px) {
          .sai-section {
            padding: 50px 0 60px;
          }
          .sai-map-block img {
            min-height: 220px;
            max-height: 240px;
          }
          .sai-card {
            padding: 22px 18px;
          }
          .sai-stats-grid {
            gap: 16px;
          }
        }

        @media (min-width: 576px) and (max-width: 991.98px) {
          .sai-map-block img {
            min-height: 260px;
            max-height: 320px;
          }
        }
      `}</style>

      <section className="sai-section">
        <div className="container">

          {/* ---- HEADING ---- */}
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
              Located in Surat, Gujarat, Gomzi Lifescience LLP provides nutraceutical third-party
              manufacturing services across India, supporting startups, fitness brands, healthcare
              companies, and established nutraceutical businesses.
            </p>
          </div>

          {/* ---- MAP + STATS ---- */}
          <div className="row align-items-center gx-4 gy-4 mb-4">

            {/* Map */}
            <div className="col-12 col-lg-7">
              <div className="sai-map-block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.123!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59c4dba edd%3A0xcb75f4d62d7aaaab!2sSurat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="380"
                  style={{border:0, borderRadius:"16px"}}
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="sai-map-pill">
                  <i className="fas fa-location-dot"></i>
                  Headquartered in Surat, Gujarat
                </div>
              </div>
            </div>

            {/* Stats */}
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

          {/* ---- CARDS ---- */}
          <div className="row g-3 g-md-4">
            {servingCards.map((card, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={index}
              >
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