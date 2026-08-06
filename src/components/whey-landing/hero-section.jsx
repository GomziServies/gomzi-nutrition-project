import { useEffect, useRef, useState } from "react";


export default function HeroSection() {
  const styleRef = useRef(null);
  const [, setShowStickyCta] = useState(true);

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

            <div className="whey-landing-hero-badge-wrapper">
              <div className="whey-landing-hero-badge">
                <div className="whey-landing-hero-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="whey-landing-hero-badge-text">
                  Whey Sample Support
                </div>
              </div>

              <div className="whey-landing-hero-badge">
                <div className="whey-landing-hero-badge-icon">
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

                <div className="whey-landing-hero-badge-text">Start From 50 KG</div>
              </div>

              <div className="whey-landing-hero-badge">
                <div className="whey-landing-hero-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 3v5l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"
                    />
                  </svg>
                </div>

                <div className="whey-landing-hero-badge-text">
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
          <div className="whey-landing-hero-badge-wrapper">
            <div className="whey-landing-hero-badge">
              <div className="whey-landing-hero-badge-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="whey-landing-hero-badge-text">
                Whey Sample Support
              </div>
            </div>

            <div className="whey-landing-hero-badge">
              <div className="whey-landing-hero-badge-icon">
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

              <div className="whey-landing-hero-badge-text">Start From 50 KG</div>
            </div>

            <div className="whey-landing-hero-badge">
              <div className="whey-landing-hero-badge-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 3v5l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"
                  />
                </svg>
              </div>

              <div className="whey-landing-hero-badge-text">
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
