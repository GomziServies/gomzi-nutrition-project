import React from "react";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry, faAward, faShieldHalved, faUsers, faCalendarDays, faCircleCheck,
  faAtom, faGear, faBoxOpen, faLaptopCode, faRocket,
  faLightbulb, faFlag, faFileShield, faHandshake, faEarthAsia,
  faVialCircleCheck, faFileContract, faTag, faChartGantt,
  faPlay, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { whitelabelBloglist } from "../../components/nutrition/Read-more-whitelabel-blogs";

import "../../assets/css/about.css";
import "../../assets/css/founder.css";
import { Link } from "react-router-dom";
import WhatsappHeaderApp from "../../components/NutritionWhatsappHeaderBtn";

const FounderPage = () => {
  const truncateTitle = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const selectedBlogs = whitelabelBloglist.filter((blog) =>
    [30, 31, 32].includes(blog.number)
  );

  return (
    <main id="main">
      <Helmet>
        <title>Dr. Gautam Jani  Founder & Managing Director | Gomzi Lifesciences LLP</title>
      </Helmet>

      <NutritionHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to connect with Dr. Gautam Jani or learn more about Gomzi Lifesciences LLP."
        }
        options={{ pageRef: true }}
      />

      {/* Hero Section */}
      <section className="founder-section margintop-nutrition" style={{ backgroundColor: "rgba(134, 195, 58, 0.1)" }}>
        <div className="founder-container">
          <div className="founder-hero-grid">
            <div className="founder-hero-content">
              <p className="inter-regular mt-3" style={{ fontSize: "14px", letterSpacing: "0.06em", color: "#86c33a", marginBottom: "10px", textTransform: "uppercase", fontWeight: "600", backgroundColor: "#85c33a37", padding: "6px 14px", borderRadius: "10px", display: "inline-block", borderLeft: "3px solid #86c33a", maxWidth: "100%", whiteSpace: "normal", wordWrap: "break-word" }}>
                Founder & managing director
              </p>
              <h1 className="founder-title barlow-condensed-semi">
                Dr. Gautam <span>Jani</span>
              </h1>
              <p className="founder-subtitle inter-regular" style={{ color: "#000", fontWeight: "500" }}>
                Building a complete, end-to-end launch partner  from formulation to your finished brand website.
              </p>
              <p className="inter-regular" style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, marginBottom: "20px", maxWidth: "480px" }}>
                With a commitment to quality and transparency,Dr. Gautam Jani founded Gomzi Lifesciences LLP in 2024 to give Indian supplement brands a true end-to-end manufacturing and launch partner.
              </p>

              <div className="founder-hero-actions">
                <div className="founder-btn-group">
                  <button
                    className="about-primary-btn barlow-condensed-semi"
                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=+918320077993&text=${encodeURIComponent("Hello, I wanted to schedule a meeting with Gautam Jani or learn more about Gomzi Lifesciences LLP.")}`, "_blank")}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "8px", fontSize: "1.1em" }} /> Schedule a meeting
                  </button>
                  <Link to={"https://www.linkedin.com/in/dr-gautam-jani-561a50161/"} className="about-secondary-btn text-center barlow-condensed-semi">
                    Connect on LinkedIn
                  </Link>
                </div>

                <div className="founder-cert-group" style={{ justifyContent: "space-between", width: "100%", marginTop: "30px" }}>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/fassai.webp"} alt="FSSAI" />
                    </div>
                    <p className="founder-cert-label">FSSAI</p>
                  </div>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/gmp.webp"} alt="GMP" />
                    </div>
                    <p className="founder-cert-label">GMP</p>
                  </div>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/haccp.webp"} alt="HACCP" />
                    </div>
                    <p className="founder-cert-label">HACCP</p>
                  </div>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/halal.webp"} alt="HALAL" />
                    </div>
                    <p className="founder-cert-label">Halal</p>
                  </div>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/kosher.webp"} alt="KOSHER" />
                    </div>
                    <p className="founder-cert-label">Kosher</p>
                  </div>
                  <div className="founder-cert-item">
                    <div className="founder-cert-icon-wrapper">
                      <img src={process.env.PUBLIC_URL + "/assets/images/third-party-manufacturing/FDA-logo.webp"} alt="FDA" />
                    </div>
                    <p className="founder-cert-label">FDA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="founder-hero-image-container">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/nutrition/dr-gautam-jani.webp"}
                alt="Dr. Gautam Jani - Founder"
                className="founder-hero-image"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Vision Section */}
      <section className="founder-section-tinted">
        <div className="founder-container">
          <div className="vision-card">
            {/* Quote area */}
            <div className="vision-top">
              <div className="vision-eyebrow">
                <div className="vision-eyebrow-line"></div>
                <span className="vision-eyebrow-text inter-regular">Our Vision</span>
                <div className="vision-eyebrow-line"></div>
              </div>

              <span className="vision-bigquote">"</span>

              <p className="vision-quote inter-regular">
                "A great product manufactured well still fails if the brand around it isn't ready. That's why we don't stop at the product  we support founders through formulation, packaging, and even their website, so they launch as a complete brand from day one."
              </p>

              <div className="vision-person">
                <img className="vision-avatar" src={process.env.PUBLIC_URL + "/assets/images/nutrition/dr-gautam-jani.webp"} alt="Dr. Gautam Jani" />
                <div className="vision-person-info">
                  <div className="vision-name inter-regular">Dr. Gautam Jani</div>
                  <div className="vision-role inter-regular">Founder & Managing Director</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="founder-section founder-journey-section">
        <div className="founder-journey-overlay">
          <div className="founder-container">
            <h2 className="founder-section-title barlow-condensed-semi" style={{ color: "#fff" }}>The Complete Launch Journey</h2>
            <p className="founder-section-desc inter-regular" style={{ color: "#fff" }}>We provide end-to-end support to turn your vision into a market-ready brand.</p>

            <div className="founder-grid-5">
              <div className="founder-journey-image-card">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/idea-new-2.webp"} alt="The Idea" />
              </div>
              <div className="founder-journey-image-card">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/formulation-new-3.webp"} alt="Formulation" />
              </div>
              <div className="founder-journey-image-card">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/manufacturer-new.webp"} alt="Manufacturing" />
              </div>
              <div className="founder-journey-image-card">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/whey-protein-combo.webp"} alt="Packaging" />
              </div>
              <div className="founder-journey-image-card">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/website-new.webp"} alt="Brand Website" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="founder-section-tinted">
        <div className="founder-container">
          <h2 className="founder-section-title barlow-condensed-semi">Our Journey</h2>

          <div className="founder-timeline-grid">
            <div className="founder-timeline-line"></div>

            <div className="founder-timeline-item">
              <div className="founder-icon-box"><FontAwesomeIcon icon={faLightbulb} /></div>
              <h3 className="barlow-condensed-semi" style={{ color: "#86c33a", marginBottom: "5px" }}>2023</h3>
              <p className="inter-regular" style={{ fontWeight: 600, color: "#000", marginBottom: "5px" }}>The Idea</p>
              <p className="inter-regular" style={{ fontSize: "14px", color: "#555" }}>Identified the gap between quality manufacturing and brand success</p>
            </div>

            <div className="founder-timeline-item">
              <div className="founder-icon-box"><FontAwesomeIcon icon={faFlag} /></div>
              <h3 className="barlow-condensed-semi" style={{ color: "#86c33a", marginBottom: "5px" }}>2024</h3>
              <p className="inter-regular" style={{ fontWeight: 600, color: "#000", marginBottom: "5px" }}>Gomzi Founded</p>
              <p className="inter-regular" style={{ fontSize: "14px", color: "#555" }}>GMP facility established in Surat, Gujarat</p>
            </div>

            <div className="founder-timeline-item">
              <div className="founder-icon-box"><FontAwesomeIcon icon={faFileShield} /></div>
              <h3 className="barlow-condensed-semi" style={{ color: "#86c33a", marginBottom: "5px" }}>2024</h3>
              <p className="inter-regular" style={{ fontWeight: 600, color: "#000", marginBottom: "5px" }}>FSSAI & GMP Secured</p>
              <p className="inter-regular" style={{ fontSize: "14px", color: "#555" }}>Full regulatory compliance achieved</p>
            </div>

            <div className="founder-timeline-item">
              <div className="founder-icon-box"><FontAwesomeIcon icon={faHandshake} /></div>
              <h3 className="barlow-condensed-semi" style={{ color: "#86c33a", marginBottom: "5px" }}>2024</h3>
              <p className="inter-regular" style={{ fontWeight: 600, color: "#000", marginBottom: "5px" }}>Brand Partners Grow</p>
              <p className="inter-regular" style={{ fontSize: "14px", color: "#555" }}>Expanded into 5+ product categories</p>
            </div>

            <div className="founder-timeline-item">
              <div className="founder-icon-box"><FontAwesomeIcon icon={faEarthAsia} /></div>
              <h3 className="barlow-condensed-semi" style={{ color: "#86c33a", marginBottom: "5px" }}>2026+</h3>
              <p className="inter-regular" style={{ fontWeight: 600, color: "#000", marginBottom: "5px" }}>Looking Ahead</p>
              <p className="inter-regular" style={{ fontSize: "14px", color: "#555" }}>Bringing trusted manufacturing to more Indian brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="bio-section">
            {/* Left: Profile Card */}
            <div className="profile-card">
              <div className="avatar">
                <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/dr-gautam-jani.webp"} alt="Dr. Gautam Jani" />
              </div>
              <div className="profile-title-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="profile-name barlow-condensed-semi">Dr. Gautam Jani</p>
                <p className="profile-role inter-regular">Founder & Managing Director</p>
              </div>
              <div className="profile-divider"></div>
              <div className="profile-tag inter-regular">Gomzi Lifesciences LLP</div>
              <div className="profile-tag inter-regular">Surat, Gujarat</div>
              <div className="profile-tag inter-regular">Est. 2024</div>
            </div>

            {/* Right: Bio + Expertise */}
            <div className="bio-right">
              <div className="bio-text-card">
                <p className="inter-regular">Dr. Gautam Jani founded Gomzi Lifesciences LLP in 2024 to solve a problem he saw repeatedly  brand owners who could find a manufacturer, but nowhere that helped them launch as a complete, market-ready brand.</p>
                <p className="inter-regular">Today he leads Gomzi's GMP-certified facility in Surat, working directly with founders from initial formulation through packaging design  so a first-time entrepreneur can go from idea to a fully launched product with one partner, not five.</p>
                <p className="inter-regular mt-3"><strong>One real story:</strong> "A founder from Uttar Pradesh contacted us in January with a protein blend formula written in a notebook. By April, their brand had a GMP-certified first batch, a label, and a Shopify store. They sold out in 6 weeks."</p>
                <p><Link to="https://www.instagram.com/reel/DXjihAsM666/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Click here</Link> to watch the full story.</p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="founder-section-tinted facility-section">
        <div className="founder-container facility-container">
          <h2 className="founder-section-title barlow-condensed-semi mb-5 text-center" style={{ textAlign: "center" }}>Inside Our Manufacturing Facility</h2>

          <div className="facility-grid">
            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/formulation-new-3.webp"} alt="Raw Material" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">Raw Material</p>
              </div>
            </div>

            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/nutrition-factory-2.webp"} alt="Blending" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">Blending</p>
              </div>
            </div>

            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/nutrition-factory-3.webp"} alt="QC Lab" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">QC Lab</p>
              </div>
            </div>

            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/manufacturer-new.webp"} alt="Packaging" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">Packaging</p>
              </div>
            </div>

            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/nutrition-factory-5.webp"} alt="Warehouse" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">Warehouse</p>
              </div>
            </div>

            <div className="facility-image-card">
              <img src={process.env.PUBLIC_URL + "/assets/images/nutrition/nutrition-factory-6.webp"} alt="Dispatch" />
              <div className="facility-image-overlay">
                <p className="facility-image-label inter-regular">Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="founder-section" style={{ paddingTop: "20px", paddingBottom: "40px" }}>
        <div className="founder-container text-center">
          <p className="inter-regular" style={{ fontSize: "14px", letterSpacing: "0.06em", color: "#86c33a", marginBottom: "10px", textTransform: "uppercase", fontWeight: "600" }}>Meet Our Founder</p>
          <h2 className="founder-section-title barlow-condensed-semi mb-5">A message from Dr. Gautam Jani</h2>

          <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto", overflow: "hidden", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <iframe
              src="https://www.instagram.com/reel/DXO1LWjjK6J/embed/"
              width="100%"
              height="550"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
              title="Gautam Jani Message"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="founder-section-tinted">
        <div className="founder-container">
          <h2 className="founder-section-title barlow-condensed-semi">Insights from the Founder</h2>

          <div className="row justify-content-center mt-4 mx-0">
            {selectedBlogs.map((blog, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <Link to={blog.url} className="cp">
                  <div className="blog-product-card-main">
                    <div className="blog-product-card bg-white br-15">
                      <span className="lazy-load-image-background blur lazy-load-image-loaded d-block">
                        <img
                          alt="blog cover"
                          className="img-fluid product-img w-100-h-auto-object-fit "
                          src={blog.imgSrc}
                        />
                      </span>
                      <div className="col-12 py-3">
                        <div className="row align-items-center">
                          <div className="col-10 text-left">
                            <p className="m-0 f-16 text-black inter-regular">
                              {truncateTitle(blog.title)}
                            </p>
                          </div>
                          <div className="col-2 text-right">
                            <FontAwesomeIcon icon={faArrowRight} className="f-20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="founder-section" id="faq">
        <div className="founder-container">
          <h2 className="founder-section-title barlow-condensed-semi">Frequently Asked Questions</h2>

          <div className="row justify-content-center mx-0">
            <div className="col-lg-8 col-md-10 col-12">
              <Accordion defaultActiveKey={["1"]} alwaysOpen className="mt-4">
                <Accordion.Item eventKey="1" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Who is Dr. Gautam Jani?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Dr. Gautam Jani is the Founder of Gomzi Lifesciences LLP, a nutraceutical manufacturing company that helps entrepreneurs and businesses develop, manufacture, and launch high-quality health and nutrition products across India.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What inspired Dr. Gautam Jani to start Gomzi Lifesciences LLP?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Dr. Gautam Jani founded Gomzi Lifesciences LLP with a vision to make reliable, transparent, and high-quality supplement manufacturing accessible to growing brands. His goal is to help entrepreneurs turn their product ideas into successful businesses.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What experience does Dr. Gautam Jani have in the nutraceutical industry?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Dr. Gautam Jani has extensive experience in nutraceutical formulation, manufacturing operations, quality assurance, regulatory compliance, and private label product development. He has worked closely with brands across sports nutrition, wellness, and dietary supplements.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    What is Dr. Gautam Jani's vision for Gomzi Lifesciences LLP?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    His vision is to build one of India's most trusted nutraceutical manufacturing companies by focusing on quality, innovation, transparency, and long-term partnerships with brand owners.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mt-3 p-4">
                  <Accordion.Header className="faq-question">
                    Why do brands choose to work with Dr. Gautam Jani and Gomzi Lifesciences LLP?
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    Brands choose Gomzi Lifesciences LLP because of its end-to-end support, including product formulation, manufacturing, packaging, compliance guidance, and business-focused consultation. Gautam believes in building partnerships that help brands grow sustainably.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="founder-section-tinted">
        <div className="founder-container cta-container">
          <div className="cta-card">

            <div className="cta-text">
              <h2 className="barlow-condensed-semi">Let's build something extraordinary together</h2>
              <p className="inter-regular">Have an idea for your next product? Let's discuss how we can bring it to life.</p>
            </div>
            <button
              className="cta-btn barlow-condensed-semi"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=+918320077993&text=${encodeURIComponent("Hello, I wanted to schedule a meeting with Dr. Gautam Jani or learn more about Gomzi Lifesciences LLP.")}`, "_blank")}
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "8px", fontSize: "1.1em" }} /> Schedule a Meeting
            </button>
          </div>
        </div>
      </section>

      <NutritionFooter />
    </main>
  );
};

export default FounderPage;

