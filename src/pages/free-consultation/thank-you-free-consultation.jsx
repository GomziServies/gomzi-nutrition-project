import React from "react";
import "../../assets/css/whey-landing.css";
import "../../assets/css/free-consultation.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYouFreeConsultation = () => {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Consultation Confirmed | Gomzi Lifescience - Thank You</title>
        <meta
          name="description"
          content="Thank you for your interest! Your consultation request has been received. Our expert will get back to you soon."
        />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <main className="thankyou-page">
        <div className="thankyou-bg thankyou-bg-one" aria-hidden="true" />
        <div className="thankyou-bg thankyou-bg-two" aria-hidden="true" />

        <section className="thankyou-shell">
          <div className="thankyou-card">
            <div className="thankyou-badge">Submission Successful</div>

            <div className="thankyou-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 96 96" className="thankyou-icon" fill="none">
                <circle cx="48" cy="48" r="42" className="thankyou-ring" />
                <path d="M30 49.5L42.2 61.5L66 36" className="thankyou-check" />
              </svg>
            </div>

            <h1>Consultation request received! Our expert will reach out shortly.</h1>

            <p className="thankyou-copy">
              We have received your details. Our team will review your request and get back to you soon with the next steps.
            </p>

            <div className="thankyou-actions">
              <Link className="go-home thankyou-back-btn" to="/free-consultation">
                Back to Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYouFreeConsultation;
