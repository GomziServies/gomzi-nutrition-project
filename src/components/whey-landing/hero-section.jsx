import { useEffect, useRef } from "react";

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const ChartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const FlaskIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <path d="M9 3h6v11l3.5 6H5.5L9 14V3z" />
    <line x1="9" y1="3" x2="15" y2="3" />
  </svg>
);
const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="16"
    height="16"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function HeroSection() {
  const styleRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = CSS;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => tag.remove();
  }, []);

  return (
    <section className="hero-section">
      {/* Desktop BG image */}
      <div className="hero-bg-desktop" />

      {/* 
        Mobile / Tablet BG image
        KEY: On mobile this is now position:relative (in-flow), 
        NOT absolute. So content flows naturally BELOW the image.
      */}
      <div className="hero-bg-mobile" />

      {/* Gradient overlay — fades image bottom into content bg */}
      <div className="hero-overlay" />

      {/* Main container — flows after image on mobile */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Headline */}
          <h1 className="hero-title">
            Launch Your Own
            <span className="green"> Protein</span> Brand.
          </h1>

          {/* Green divider */}
          <div className="hero-divider" />

          {/* Subtitle */}
          <p className="hero-subtitle">
            You built the audience. Now build the product. Get clear answers on
            formulation, pricing, quality, and timelines before you place your
            first order, your next order, or your switch order.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <button
              className="btn-primary-green"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Talk to Our Manufacturing Expert <ArrowRight />
            </button>
          </div>
          {/* Trust Badges */}
          <div className="hero-badges">
            <div className="badge-item">
              <span className="badge-icon">
                <ShieldIcon />
              </span>
              <span>
                Quality
                <br />
                Assured
              </span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <ChartIcon />
              </span>
              <span>
                Scalable
                <br />
                Solutions
              </span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <ClockIcon />
              </span>
              <span>
                On-Time
                <br />
                Delivery
              </span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <FlaskIcon />
              </span>
              <span>
                Science
                <br />
                Backed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
