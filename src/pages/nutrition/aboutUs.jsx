import React from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "../../assets/css/nutrition.css";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import WhatsappHeaderApp from "../../components/NutritionWhatsappHeaderBtn";
import { Helmet } from "react-helmet";

function AboutUs() {
  const canonicalUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>
          About Us | Gomzi Nutrition Family - Your Trusted Wellness Partner
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
          content="About Us | Gomzi Nutrition Family - Your Trusted Wellness Partner"
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
      </Helmet>
      <NutritionHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Gomzi Lifescience LLP and your products."
        }
        options={{ pageRef: true }}
      />
      <div className="main-content margintop-nutrition">
        <section className="blog-main pb-5">
          <div>
            <div className="container-fluid w-80">
              <div className="row">
                <div className="col-12 pt-4 text-left">
                  <h1 className="f-rob-bol f-30 mb-2 text-black text-uppercase">
                    <b>About Us</b>
                  </h1>
                </div>
                <div className="col-12 text-center mb-4 px-4">
                  <div className="ql-editor text-left mt-3">
                    <h2 className="mb-3">Who We Are</h2>
                    <p className="mb-4">
                      Established in 2024 by Dr. Gautam Jani, Gomzi Lifescience LLP is one of the fastest-growing nutraceuticals manufacturers in India. Headquartered in Surat, Gujarat, we are proud to be an ISO 22000:2018, WHO-GMP, HACCP, HALAL, and FSSAI certified company. Our core vision is to provide international-quality health and wellness products at competitive prices through innovation, integration, and research.
                    </p>
                    <p className="mb-4">
                      At Gomzilifesciences, we are more than just a manufacturing company—we are a trusted partner for businesses looking to grow in the nutraceutical, dietary supplement, and sports nutrition industries.
                    </p>

                    <h2 className="mb-3">What We Do</h2>
                    <p className="mb-4">
                      We specialize in third party manufacturing in India, offering end-to-end solutions for nutraceutical finished products. From protein powders, energy drinks, and sports supplements to peanut butter and wellness products, our range is tailored to meet the evolving needs of consumers.
                    </p>
                    <p className="mb-4">
                      As expert supplement manufacturers in India, we focus on product innovation, purity, and efficacy. Every formulation is backed by science and manufactured using modern infrastructure, advanced techniques, and in-house R&D.
                    </p>

                    <h2 className="mb-3">White Label Nutrition Solutions</h2>
                    <p className="mb-4">
                      Gomzilifesciences also offers white label nutrition manufacturing to empower start-ups and established businesses. With in-house product designing, packaging, and development facilities, we provide a one-stop solution for launching your own health and wellness brand. Whether you want to start small or scale big, we make the journey smooth, cost-effective, and time-efficient.
                    </p>

                    <h2 className="mb-3">Our Facilities & Standards</h2>
                    <ul className="mb-4">
                      <li>WHO-GMP, ISO, and FSSAI-approved manufacturing plant.</li>
                      <li>Dedicated in-house laboratory for testing and quality checks.</li>
                      <li>Modern infrastructure supported by advanced scientific techniques.</li>
                      <li>R&D team focused on creating unique and effective formulations.</li>
                      <li>Packaging and labeling as per the latest FSSAI guidelines.</li>
                    </ul>

                    <h2 className="mb-3">Why Choose Gomzilifesciences?</h2>
                    <ol className="mb-4">
                      <li>Trusted third party manufacturer in India with global standards.</li>
                      <li>Certified white label products manufacturer with wide product categories.</li>
                      <li>Guaranteed quality, purity, safety, and efficacy.</li>
                      <li>Time-bound delivery schedules.</li>
                      <li>A dynamic team of skilled professionals and marketing experts.</li>
                    </ol>

                    <h2 className="mb-3">Our Mission</h2>
                    <p className="mb-4">
                      Our mission is to make world-class nutraceuticals and supplements accessible to every brand and consumer. We aim to build long-term partnerships by delivering products that reflect trust, quality, and innovation.
                    </p>
                    <p className="mb-4">
                      At Gomzilifesciences, we believe in creating healthier lifestyles and stronger brands through reliable manufacturing, certified excellence, and customer-focused solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p className="d-none">
        Gomzi Lifescience, nutraceuticals manufacturer, supplement manufacturer, third party manufacturing, white label nutrition, sports nutrition, protein powders, dietary supplements, ISO certified, FSSAI certified, WHO-GMP certified, HACCP certified, HALAL certified, Dr. Gautam Jani, Surat Gujarat, health and wellness products, innovation integration research, nutraceutical finished products, energy drinks, sports supplements, peanut butter, wellness products, product innovation purity efficacy, modern infrastructure, advanced techniques, in-house R&D, white label nutrition manufacturing, start-ups, established businesses, product designing, packaging development, one-stop solution, launching health wellness brand, WHO-GMP ISO FSSAI-approved manufacturing plant, in-house laboratory, testing quality checks, scientific techniques, unique effective formulations, time-bound delivery schedules, skilled professionals, marketing experts, world-class nutraceuticals, supplements accessible, long-term partnerships, trust quality innovation, healthier lifestyles, stronger brands, reliable manufacturing, certified excellence, customer-focused solutions
      </p>
      <NutritionFooter />
    </>
  );
}

export default AboutUs;