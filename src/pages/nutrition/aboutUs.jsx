import React, { useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "../../assets/css/nutrition.css";
import "../../assets/css/about.css";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import WhatsappHeaderApp from "../../components/NutritionWhatsappHeaderBtn";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReviewsSlider from "../../components/nutrition/reviewsslider";

function AboutUs() {
  const canonicalUrl = window.location.href;
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoId: "" });

  const openVideoModal = (videoId) => {
    setVideoModal({ isOpen: true, videoId });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoId: "" });
  };

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
      </Helmet>
      <NutritionHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Gomzi Lifescience LLP and your products."
        }
        options={{ pageRef: true }}
      />
      <div className="main-content margintop-nutrition aboutus-page">
        <section className="blog-main pb-5">
          <div>
            <div className="container-fluid w-80">
              <div className="row ">
                <div className="about-hero">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/our-team/about-header.webp"
                    }
                    alt="About Us Background"
                  />
                  <div className="overlay"></div>

                  <div className="hero-content">
                    <h1 className="">About Us</h1>
                  </div>
                </div>

                <div className="col-12 text-center mb-4 px-4">
                  <div className="aboutus-container">
                    <div className="blog p-0 br-10">
                      <div className="ply position-sticky top-0">
                        <LazyLoadImage
                          src="https://img.youtube.com/vi/XM2xXWYxhbw/hqdefault.jpg"
                          width="100%"
                          className="br-10 cp objectfit-cover"
                          alt="Video thumbnail"
                          effect="blur"
                          onClick={() => openVideoModal("XM2xXWYxhbw")}
                        />

                        <div className="aboutus-video-btn play-btn">
                          <button
                            onClick={() => openVideoModal("XM2xXWYxhbw")}
                            className="custom clickof video-button-bg cursor-pointer"
                            aria-label="Play video"
                          >
                            <span className="newthing">
                              <i className="fas fa-play cursor-pointer"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ql-editor text-left mt-3">
                      <h2 className="mb-3"> WHY GOMZI LIFESCIENCE LLP..!!!</h2>
                      <p className="mb-4">
                        <strong>Gomzi Lifescience LLP.</strong> is an{" "}
                        <strong>
                          ISO 22000:2018 & WHO-GMP, HACCP, HALAL, FSSAI
                          Certified company
                        </strong>{" "}
                        Established and Run by{" "}
                        <strong>Dr. Gautam Jani In 2024.</strong> With the
                        vision to provide the best possible range of
                        international quality products at competitive prices
                        through integration, research and innovation.
                      </p>
                      <p className="mb-4">
                        Gomzili LifeSciences is a trusted leader in{" "}
                        <strong>white label, OEM/ODM</strong> and{" "}
                        <strong>contract nutraceutical manufacturing,</strong>
                        helping brands launch premium-quality supplements under
                        their own label. With our certified, state-of-the-art
                        facility in Gujarat, we proudly stand among{" "}
                        <a href="https://www.gomzilifesciences.in/nutrition/white-labelling">
                          {" "}
                          <strong className="blog-text-link ">
                            {" "}
                            the top nutraceutical third party manufacturers in
                            India{" "}
                          </strong>
                        </a>{" "}
                        and one of the most reliable private label supplement
                        manufacturers
                      </p>
                      <p className="mb-4">
                        <strong>Gomzi Lifescience LLP.</strong> is located in
                        Surat in India Engaged in supplying Nutraceutical
                        finished products in accordance to customized
                        requirement of client in India. It is GMP certified
                        nutraceutical manufacturer India that provide you
                        customize solution
                      </p>
                    </div>
                  </div>

                  <div className="aboutus-cards ">
                    <div className="text-left mt-3 mb-6">
                      <h2 className="mb-6 text-center mb-30">
                        Why Choose Gomzi Life Sciences
                      </h2>
                    </div>

                    <div className="cards-grid mt-6">
                      {[
                        {
                          title: "Market-Ready Formulas",
                          text: "Products aligned with current trends.",
                          img: "/assets/images/aboutus/Market-Ready.webp",
                        },
                        {
                          title: "Trusted Ingredients",
                          text: "Verified, high-quality raw materials.",
                          img: "/assets/images/aboutus/Trusted-Ingredients.webp",
                        },
                        {
                          title: "Dedicated Support",
                          text: "One point of contact for smooth coordination.",
                          img: "/assets/images/aboutus/Dedicated-support.webp",
                        },
                        {
                          title: "Quick Turnaround",
                          text: "Faster production and delivery timelines.",
                          img: "/assets/images/aboutus/Quick-turnaround.webp",
                        },
                        {
                          title: "Full Transparency",
                          text: "Clear communication at every step.",
                          img: "/assets/images/aboutus/Full-Transparency.webp",
                        },
                        {
                          title: "Premium Packaging",
                          text: " Modern, brand-enhancing packaging options.",
                          img: "/assets/images/aboutus/download-removebg-preview.webp",
                        },
                        {
                          title: "Secure Development",
                          text: " Confidential handling of all formulas. ",
                          img: "/assets/images/aboutus/Secure-Development.webp",
                        },
                        {
                          title: "Consistent Output",
                          text: " Reliable quality in every batch.",
                          img: "/assets/images/aboutus/images-removebg-preview-elementor-io-optimized.webp",
                        },
                        {
                          title: "Ethical Practices",
                          text: " Clean, safe, responsible manufacturing.",
                          img: "/assets/images/aboutus/8676176-removebg-preview.webp",
                        },
                        {
                          title: "Flexible Models",
                          text: "White label, private label, or custom.",
                          img: "/assets/images/aboutus/png-clipart-computer-icons-flexibility-organization-physical-flexibility-miscellaneous-leaf-removebg-preview.webp",
                        },
                        {
                          title: "Post-Launch Help ",
                          text: "Support for scaling and new products.",
                          img: "/assets/images/aboutus/help-elementor-io-optimized-removebg-preview-elementor-io-optimized.webp",
                        },
                        {
                          title: "Complete Documentation",
                          text: " COA and compliance-ready papers.",
                          img: "/assets/images/aboutus/Complete-Documentation.webp",
                        },
                      ].map((card, index) => (
                        <div key={index} className="aboutus-card">
                          <img
                            src={process.env.PUBLIC_URL + card.img}
                            alt={card.title}
                            className="aboutus-card-img"
                          />

                          <h4 className="aboutus-card-title">{card.title}</h4>
                          <p className="aboutus-card-text">{card.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div class="our-team">
                    <div className="ql-editor text-left mt-4">
                      <h2 className="mb-3">Our Infrastructure</h2>
                      <p className="mb-4">
                        Behind every product we create is a space built with
                        care. Our facility is modern, clean and thoughtfully
                        designed to ensure every supplement is crafted with
                        precision and safety. From advanced machines to
                        dedicated R&D spaces, everything works together to bring
                        your ideas to life with consistency and trust.
                      </p>
                    </div>

                    <div class="team-cards">
                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/Infrastructure1.1.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>

                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/Infrastructure1.2.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>

                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/Infrastructure1.3.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="our-team">
                    <div className="ql-editor text-left mt-3">
                      <h2 className="mb-3">Our Team</h2>
                      <p className="mb-4">
                        Our team is the heart of GomziliLifeSciences. We’re a
                        group of passionate experts—scientists, nutritionists
                        and quality professionals who truly care about what we
                        create. Every formula, every batch and every detail is
                        handled with dedication, because your brand deserves
                        nothing less than our very best.
                      </p>
                    </div>

                    <div class="team-cards">
                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/our-team1.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>

                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/our-team2.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>

                      <div class="team-card">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/our-team/our-team3.webp"
                          }
                          alt="gomzilifesciences"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>

                  <ReviewsSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p className="d-none">
        Gomzi Lifescience, nutraceuticals manufacturer, supplement manufacturer,
        third party manufacturing, white label nutrition, sports nutrition,
        protein powders, dietary supplements, ISO certified, FSSAI certified,
        WHO-GMP certified, HACCP certified, HALAL certified, Dr. Gautam Jani,
        Surat Gujarat, health and wellness products, innovation integration
        research, nutraceutical finished products, energy drinks, sports
        supplements, peanut butter, wellness products, product innovation purity
        efficacy, modern infrastructure, advanced techniques, in-house R&D,
        white label nutrition manufacturing, start-ups, established businesses,
        product designing, packaging development, one-stop solution, launching
        health wellness brand, WHO-GMP ISO FSSAI-approved manufacturing plant,
        in-house laboratory, testing quality checks, scientific techniques,
        unique effective formulations, time-bound delivery schedules, skilled
        professionals, marketing experts, world-class nutraceuticals,
        supplements accessible, long-term partnerships, trust quality
        innovation, healthier lifestyles, stronger brands, reliable
        manufacturing, certified excellence, customer-focused solutions
      </p>
      <NutritionFooter />

      {videoModal.isOpen && (
        <div
          className="modal-overlay about-position-fixed"
          onClick={closeVideoModal}
        >
          <div
            className="modal-content about-position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="about-position-absolute"
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${videoModal.videoId}`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutUs;
