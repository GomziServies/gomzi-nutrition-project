import React from 'react'
// import "./assets/css/about.css";
import "../../assets/css/whey-landing.css";
import WheyLandingHeader from '../../components/partials/Header/whey-landing-header';
import Herosection from '../../components/whey-landing/hero-section';
import WhoSection from '../../components/whey-landing/who-section';
import FoundersLanding from '../../components/whey-landing/founders';
import BuiltForFirstLaunches from '../../components/whey-landing/built-for-first-launches';
import HowItWorks from '../../components/whey-landing/how-it-works';
import Certifications from '../../components/whey-landing/certifications';
import Faqwheylanding from '../../components/whey-landing/faq-whey-landing';
import ContactFormWheyLanding from '../../components/whey-landing/contactform-whey-landing';
import WheyLandingFooter from '../../components/partials/Footer/whey-landing-footer';
const wheylanding = () => {
  return (
    <div>
      <WheyLandingHeader />
      <Herosection />
      <WhoSection/>
      <FoundersLanding/>
      <BuiltForFirstLaunches/>
      <HowItWorks/>
      <Certifications/>
      <Faqwheylanding/>
      <ContactFormWheyLanding/>
      <WheyLandingFooter/>
      
    </div>
  )
}

export default wheylanding
