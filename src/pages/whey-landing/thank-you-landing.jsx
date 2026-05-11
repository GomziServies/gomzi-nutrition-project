import React from "react";
// import "./assets/css/about.css";
import "../../assets/css/whey-landing.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const wheylanding = () => {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Order Confirmed | Gomzi Lifescience - Thank You</title>
        <meta
          name="description"
          content="Thank you for your order! Your order has been confirmed. Check your email for the invoice and track your order status with Gomzi Lifescience."
        />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="preconnect" href="https://connect.facebook.net" />
        <script>
          {`
            !function(f,b,e,v,n,t,s)
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

            <h1>Form submitted! Our expert will reach out shortly.</h1>

            <p className="thankyou-copy">
              We have received your details. Our team will review your request
              and get back to you soon with the next steps.
            </p>

            <div className="thankyou-actions">
              <Link className="go-home thankyou-back-btn" to="/whey-landing">
                Back
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default wheylanding;
