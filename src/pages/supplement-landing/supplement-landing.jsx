import React from "react";
import "../../assets/css/whey-landing.css";
import "../../assets/css/supplement-landing.css";
import WheyLandingHeader from "../../components/partials/Header/whey-landing-header";
import BuiltForFirstLaunches from "../../components/whey-landing/built-for-first-launches";
import WhoSection from "../../components/whey-landing/who-section";
import FoundersLanding from "../../components/whey-landing/founders";
import HowItWorks from "../../components/whey-landing/how-it-works";
import Certifications from "../../components/whey-landing/certifications";
import Faqwheylanding from "../../components/whey-landing/faq-whey-landing";
import WheyLandingFooter from "../../components/partials/Footer/whey-landing-footer";
import { Helmet } from "react-helmet";

const SupplementLanding = () => {
  const canonicalUrl = window.location.href;

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
            <form className="sl-form">
              <input type="text" placeholder="Full Name" className="sl-input" required />
              <input type="tel" placeholder="WhatsApp Number" className="sl-input" required />
              <input type="email" placeholder="Email ID" className="sl-input" required />
              
              <select className="sl-select" required defaultValue="">
                <option value="" disabled>You are?</option>
                <option value="gym_owner">Gym Owner</option>
                <option value="supplement_business_owner">Supplement Business Owner</option>
                <option value="fitness_trainer">Fitness Trainer</option>
                <option value="influencer">Influencer</option>
                <option value="new_startup">New Startup</option>
                <option value="other">Other</option>
              </select>

              <select className="sl-select" required defaultValue="">
                <option value="" disabled>Select Product Type</option>
                <option value="whey_protein">Whey Protein</option>
                <option value="mass_gainer">Mass Gainer</option>
                <option value="pre_workout">Pre-workout</option>
                <option value="multivitamin_tablets">Multivitamin Tablets</option>
                <option value="peanut_butter">Peanut Butter</option>
                <option value="all_of_the_above">All of the Above</option>
              </select>

              <select className="sl-select" required defaultValue="">
                <option value="" disabled>Your Budget</option>
                <option value="1.5-2.5_lakh">₹1.5 Lakh - ₹2.5 Lakh</option>
                <option value="2.5-5_lakh">₹2.5 Lakh - ₹5 Lakh</option>
                <option value="5-10_lakh">₹5 Lakh - ₹10 Lakh</option>
                <option value="10_lakh+">₹10 Lakh +</option>
              </select>

              <textarea
                placeholder="Tell us about your requirement"
                className="sl-textarea"
                rows="3"
              ></textarea>
              
              <button type="submit" className="sl-submit-btn">
                Start My Brand
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

export default SupplementLanding;
