import { useEffect, useRef, useState } from "react";

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
  const [showStickyCta, setShowStickyCta] = useState(true);

  const handleContactClick = () => {
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = CSS;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => tag.remove();
  }, []);

  useEffect(() => {
    const footer = document.querySelector(".footer");

    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      {/* Desktop: Background Images */}
      <div className="hero-bg-row row g-0 d-none d-lg-flex">
        <div className="hero-bg-col col-12">
          <img
            className="hero-bg-desktop"
            src="/assets/images/whey-landing/herobgimage.webp"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="hero-bg-row row g-0 d-none d-lg-flex">
        <div className="hero-bg-col col-12">
          <div className="hero-overlay" />
        </div>
      </div>

      {/* Desktop: Content with overlay */}
      <div className="hero-container container d-none d-lg-block">
        <div className="row">
          <div className="hero-content col-lg-6">
            {/* Headline */}
            <h1 className="hero-title">
              Launch Your Own
              <span className="green"> Protein</span> Brand.
            </h1>

            {/* Green divider */}
            <div className="hero-divider" />

            {/* Subtitle */}
            <p>
              Start your whey protein brand with expert formulation, private
              label manufacturing, sample support, and clear pricing, all from
              one trusted partner.
            </p>

            <p className="hero-subtitle">
              For founders, gym owners, supplement sellers, and D2C brands
              looking to launch private label whey products with formulation,
              manufacturing, and sample support.
            </p>

            {/* CTA Buttons */}
            <div className="hero-btns">
              <button
                className="btn-primary-green"
                onClick={handleContactClick}
              >
                Request Sample & Start Your Whey Brand
              </button>
            </div>

            <div class="whey-landing-hero-badge-wrapper">
              <div class="whey-landing-hero-badge">
                <div class="whey-landing-hero-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div class="whey-landing-hero-badge-text">
                  Whey Sample Support
                </div>
              </div>

              <div class="whey-landing-hero-badge">
                <div class="whey-landing-hero-badge-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h2v4H4z"
                    />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 10h2v4h-2z"
                    />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 9h2v6H6z"
                    />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 9h2v6h-2z"
                    />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 12h8"
                    />
                  </svg>
                </div>

                <div class="whey-landing-hero-badge-text">Start From 50 KG</div>
              </div>

              <div class="whey-landing-hero-badge">
                <div class="whey-landing-hero-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 3v5l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"
                    />
                  </svg>
                </div>

                <div class="whey-landing-hero-badge-text">
                  Formulation Guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Content Only */}
      <div className="hero-container-mobile d-lg-none pt-0">
        <img
          className="hero-mobile-image"
          src="/assets/images/whey-landing/heromobilebgimage.webp"
          alt="Whey Protein Product"
        />
        <div className="hero-content">
          {/* Headline */}
          <h1 className="hero-title">
            Launch Your Own
            <span className="green"> Protein</span> Brand.
          </h1>

          {/* Green divider */}
          <div className="hero-divider" />

          {/* Subtitle */}
          <p>
            Start your whey protein brand with expert formulation, private label
            manufacturing, sample support, and clear pricing, all from one
            trusted partner.
          </p>

          <p className="hero-subtitle">
            For founders, gym owners, supplement sellers, and D2C brands looking
            to launch private label whey products with formulation,
            manufacturing, and sample support.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <button className="btn-primary-green" onClick={handleContactClick}>
              Request Sample & Start Your Whey Brand
            </button>
          </div>
          <div class="whey-landing-hero-badge-wrapper">
            <div class="whey-landing-hero-badge">
              <div class="whey-landing-hero-badge-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="whey-landing-hero-badge-text">
                Whey Sample Support
              </div>
            </div>

            <div class="whey-landing-hero-badge">
              <div class="whey-landing-hero-badge-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 10h2v4H4z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 10h2v4h-2z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 9h2v6H6z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 9h2v6h-2z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h8"
                  />
                </svg>
              </div>

              <div class="whey-landing-hero-badge-text">Start From 50 KG</div>
            </div>

            <div class="whey-landing-hero-badge">
              <div class="whey-landing-hero-badge-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 3v5l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"
                  />
                </svg>
              </div>

              <div class="whey-landing-hero-badge-text">
                Formulation Guidance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {showStickyCta && (
        <div className="hero-sticky-cta-wrap">
          <a
            href="#contact"
            className="hero-sticky-cta"
            onClick={(event) => {
              event.preventDefault()
              handleContactClick()
            }}
          >
            <span className="hero-sticky-cta-label">Talk to Our Manufacturing Expert</span>
          </a>
        </div>
      )} */}
    </section>
  );
}
