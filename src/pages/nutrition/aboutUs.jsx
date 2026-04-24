import React from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import WhatsappHeaderApp from "../../components/NutritionWhatsappHeaderBtn";
import "../../assets/css/about.css";
import "../../assets/css/nutrition.css";

function aboutUs() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>
          About Us | Gomzi Lifescience Family - Your Trusted Wellness Partner
        </title>
        <meta
          name="description"
          content="Learn about Gomzi Lifescience LLP, one of India's fastest-growing nutraceuticals manufacturers. Discover our mission, facilities, and commitment to providing international-quality health and wellness products."
        />
        <meta
          name="keyword"
          content="Gomzi Lifescience, nutraceuticals manufacturer, supplement manufacturer, third party manufacturing, white label nutrition, sports nutrition, protein powders, dietary supplements, ISO certified, FSSAI certified, WHO-GMP certified, HACCP certified, HALAL certified"
        />
        <meta
          property="og:title"
          content="About Us | Gomzi Lifescience Family - Your Trusted Wellness Partner"
        />
        <meta
          property="og:description"
          content="Learn about Gomzi Lifescience LLP, one of India's fastest-growing nutraceuticals manufacturers. Discover our mission, facilities, and commitment to providing international-quality health and wellness products."
        />
        <meta
          property="og:image"
          content="https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp"
        />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1144699046738070');
          fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1"
        />`}
        </noscript>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-J50WNKGW38`}
        ></script>
        <noscript>{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J50WNKGW38');`}</noscript>
        <script>
          {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wbdpmwgoji");
          `}
        </script>
      </Helmet>
      <NutritionHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Gomzi Lifescience LLP and your products."
        }
        options={{ pageRef: true }}
      />

      <section>
        {" "}
        <div className="about-hero-section ">
          <div className="about-hero-banner">
            <div className="about-hero-overlay"></div>
            <div className="about-hero-content">
              <h1 className="about-title barlow-condensed-semi">
                We help supplement founders build{" "}
                <span>brands people trust.</span>
              </h1>
              <p className="about-para inter-regular">
                Gomzi Life Sciences LLP is a Surat-based B2B nutraceutical
                manufacturing partner for sports nutrition supplements,
                multivitamin tablets, and whey protein. We support founders from
                idea to formulation, manufacturing, packaging, and launch.
              </p>

              <div class="about-hero-buttons">
                <a
                  href="https://wa.me/918320077993"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="about-primary-btn barlow-condensed-semi"
                >
                  Request a Quote
                </a>

                <button
                  className="about-secondary-btn barlow-condensed-semi"
                  onClick={() => {
                    document
                      .getElementById("journey-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-hero-features">
        <div className="inter-regular">50–100 KG MOQ</div>
        <div className="inter-regular">15–20 Day Delivery</div>
        <div className="inter-regular">Certified Facility</div>
        <div className="inter-regular">End-to-End Support</div>
        <div className="inter-regular">Indian Flavour Innovation</div>
        <div className="inter-regular">Export Ready</div>
      </div>

      <section className="why-gls-section">
        <div className="why-gls-container">
          <h2 className="why-gls-title barlow-condensed-semi">
            Why Gomzi Lifesciences Exists
          </h2>

          <p className="why-gls-desc inter-regular">
            We were built to solve a simple problem: many new supplement
            founders have strong ideas, but they need a manufacturer willing to
            support smaller launches with speed, quality, and guidance.
          </p>

          <div className="why-gls-grid">
            <div className="why-gls-card">
              <div className="why-gls-icon">
                <i className="fa-solid fa-box-open"></i>
              </div>
              <h3 className="barlow-condensed-semi">Low MOQ</h3>
              <p className="inter-regular">
                Start with 50–100 KG per SKU and grow without large upfront
                pressure.
              </p>
            </div>

            <div className="why-gls-card">
              <div className="why-gls-icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="barlow-condensed-semi">Fast Turnaround</h3>
              <p className="inter-regular">
                Standard orders move from confirmation to dispatch in 15–20
                days.
              </p>
            </div>

            <div className="why-gls-card">
              <div className="why-gls-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3 className="barlow-condensed-semi">Brand Launch Support</h3>
              <p className="inter-regular">
                We help with formulation, packaging, website, and marketing
                setup.
              </p>
            </div>

            <div className="why-gls-card">
              <div className="why-gls-icon">
                <i class="fa-solid fa-certificate"></i>
              </div>
              <h3 className="barlow-condensed-semi">Certified Quality</h3>
              <p className="inter-regular">
                We operate with FSSAI, GMP, HACCP, Kosher, and Halal
                certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-launch-journey-section" id="journey-section">
        <div className="brand-launch-journey-container">
          <h2 className="brand-launch-journey-title barlow-condensed-semi">
            The Gomzi Lifesciences Brand Launch Journey
          </h2>

          <p className="brand-launch-journey-desc inter-regular">
            A simple five-step path that turns your supplement idea into a
            ready-to-sell product and brand.
          </p>

          <div className="brand-launch-journey-grid">
            <div className="brand-launch-journey-card">
              <img src="/assets/images/nutrition/idea-new-2.webp" alt="idea" />
              <h3 className="barlow-condensed-semi">Idea & Strategy</h3>
              <p className="inter-regular">
                We help define the product category, audience, and positioning.
              </p>
            </div>

            <div className="brand-launch-journey-card">
              <img
                src="/assets/images/nutrition/formulation-new-3.webp"
                alt="formulation"
              />
              <h3 className="barlow-condensed-semi">Formulation Development</h3>
              <p className="inter-regular">
                We build the right formulation and share samples for approval.
              </p>
            </div>

            <div className="brand-launch-journey-card">
              <img
                src="/assets/images/nutrition/manufacturer-new.webp"
                alt="manufacturing"
              />
              <h3 className="barlow-condensed-semi">Manufacturing & QC</h3>
              <p className="inter-regular">
                We produce the approved batch with quality checks and
                documentation.
              </p>
            </div>

            <div className="brand-launch-journey-card">
              <img
                src="/assets/images/nutrition/whey-protein-combo.webp"
                alt="packaging"
              />
              <h3 className="barlow-condensed-semi">Packaging Design</h3>
              <p className="inter-regular">
                We create compliant, premium packaging for retail and online.
              </p>
            </div>

            <div className="brand-launch-journey-card">
              <img
                src="/assets/images/nutrition/website-new.webp"
                alt="website"
              />
              <h3 className="barlow-condensed-semi">
                Website & Marketing Setup
              </h3>
              <p className="inter-regular">
                We help you prepare for launch with a digital brand foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-section">
        <div className="core-container">
          <div className="core-left">
            <h2 className="barlow-condensed-semi">
              “Most manufacturers stop at production. Gomzi Lifesciences goes
              further and helps you build a brand.”
            </h2>

            <p className="inter-regular">
              That is why we work like a partner, not only a supplier.
            </p>
          </div>

          <div className="core-right">
            <h3 className="barlow-condensed-semi">Our Core Values</h3>

            <ul className="inter-regular">
              <li>
                <strong>Certified Integrity:</strong> quality is non-negotiable.
              </li>
              <li>
                <strong>Brand-Builder Mindset:</strong> we think like founders.
              </li>
              <li>
                <strong>Speed as a Standard:</strong> fast delivery is part of
                our system.
              </li>
              <li>
                <strong>Accessible Craftsmanship:</strong> great quality should
                be available at small MOQs.
              </li>
              <li>
                <strong>Transparency:</strong> clear pricing and clear
                formulation communication.
              </li>
              <li>
                <strong>Innovation:</strong> we keep creating differentiated
                products and flavours.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="brand-start-section">
        <div className="brand-start-container">
          <h2 className="brand-start-title barlow-condensed-semi">
            Start Your Brand With GLS
          </h2>

          <p className="brand-start-desc inter-regular">
            Tell us about your product idea, and we’ll help you move from
            concept to manufacturing to launch.
          </p>

          <div className="brand-start-core">
            <h3 className="barlow-condensed-semi">Best for</h3>

            <p className="inter-regular mb-2">
              Protein powders, sports supplements, and multivitamin brands
              looking for a reliable manufacturing partner.
            </p>

            <ul className="inter-regular">
              <li>
                <strong>Location: </strong> Surat, Gujarat, India.
              </li>
              <li>
                <strong>Business model: </strong> B2B Third-Party & Private
                Label Manufacturing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <NutritionFooter />
    </>
  );
}

export default aboutUs;
