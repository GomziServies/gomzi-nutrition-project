import React from "react";
// import "./assets/css/about.css";
import "../../assets/css/whey-landing.css";
import WheyLandingHeader from "../../components/partials/Header/whey-landing-header";
import Herosection from "../../components/whey-landing/hero-section";
import WhoSection from "../../components/whey-landing/who-section";
import FoundersLanding from "../../components/whey-landing/founders";
import BuiltForFirstLaunches from "../../components/whey-landing/built-for-first-launches";
import HowItWorks from "../../components/whey-landing/how-it-works";
import Certifications from "../../components/whey-landing/certifications";
import Faqwheylanding from "../../components/whey-landing/faq-whey-landing";
import ContactFormWheyLanding from "../../components/whey-landing/contactform-whey-landing";
import WheyLandingFooter from "../../components/partials/Footer/whey-landing-footer";
import { Helmet } from "react-helmet";
const wheylanding = () => {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>
          Premium Suppliment Contract Manufacturing in India | Gomzi Life
          Sciences
        </title>
        <meta
          name="description"
          content="Gomzi Life Sciences is a trusted suppliment manufacturer supplying brands, retailers & distributors across India. Consistent quality. Scalable supply. Connect with us."
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
      <div>
        <WheyLandingHeader />
        <Herosection />
        <WhoSection />

        <FoundersLanding />
        <ContactFormWheyLanding />
        <BuiltForFirstLaunches />

        <HowItWorks />
        <Certifications />

        <Faqwheylanding />
        <WheyLandingFooter />
      </div>
    </>
  );
};

export default wheylanding;
