import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import ComplaintsFaq from "../../components/nutrition/ComplaintsFaq";
import ChatBotGomziComponent from "../../components/whey-landing/chat-bot-gomzi";
import "../../assets/css/nutrition.css";
import "../../assets/css/thirdParty.css";
import "../../assets/css/complaints.css";

const complaintFaqs = [
  {
    question: "I’m Not satisfied with my Product Packaging",
    answer:
      "Please share specific details about the issue, such as the packaging quality, design, sealing, labeling, or overall appearance. Our team will review your concern and take the necessary steps to improve your experience.",
  },
  {
    question: "Why Is My Product Design Not Ready ?",
    answer:
      "Product design depends on the order list and the specific requirements of each order. Therefore, the design and production process may take some time to complete. The product will be completed and delivered according to the timeline provided by the Management team.",
  },
  {
    question: "Why is my order delayed ?",
    answer:
      "All updates and details regarding order completion will be shared with you through the WhatsApp group. Please check the group regularly for the latest information. If you have any further concerns or require additional assistance, please contact the Admin team.",
  },
  {
    question: "How To check / get my lab Report ?",
    answer:
      "The lab report is a paid service and is provided by a third-party laboratory. If you would like to get the lab report, please contact the team, and they will guide you through the process and provide the necessary details.",
  },
  {
    question: "How to Check my Shipment Status ?",
    answer:
      "You can check your shipment status using the tracking details provided by the team. All important shipment and delivery updates will also be shared with you through the WhatsApp group or https://www.vrlgroup.in/Tracking/TrackShipment with LR Number of your Order.",
  },
  {
    question: "My Branding Design is not proper .",
    answer:
      "If you feel that your branding design is not proper or does not meet your expectations, please share specific details about what needs to be improved, such as the logo, colors, layout, fonts, or overall design in the WhatsApp group or with the team.",
  },
  {
    question: "A salesperson has not fulfilled a commitment made to me .",
    answer:
      "Please share the specific details of the commitment, including what was promised and any relevant communication or evidence. Our team will verify the matter with the concerned salesperson and take the necessary action to resolve your concern promptly.",
  },
  {
    question: "Why 70% of payment I need to pay before my order is delivered ?",
    answer:
      "The 70% advance payment covers the raw material procurement and order handling costs required to process and manufacture your order. This allows the team to begin the production process and manage the necessary arrangements for your order. The remaining 30% payment is payable after order completion and before the final delivery/shipment process.",
  },
];

function Complaints() {
  const canonicalUrl = window.location.href;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = complaintFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Helmet>
        <title>Help Center & Customer Support | Gomzi Lifesciences</title>
        <meta
          name="description"
          content="We are here to support your brand journey. Find quick answers in our FAQs, submit feedback, or raise an order inquiry with Gomzi Lifesciences."
        />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <NutritionHeader />

      <main className="hc-page-wrapper">
        {/* 1. Hero Section */}
        <section className="hc-hero-section">
          <div className="container">
            <div className="hc-hero-content">
              <div className="hc-badge">
                <i className="fas fa-headset"></i> Customer Support &amp;
                Feedback
              </div>
              <h1 className="hc-hero-title">
                We Value Your <span className="highlight">Feedback!</span>
              </h1>
              <p className="hc-hero-desc" style={{ marginBottom: "0" }}>
                At Gomzi Lifesciences, delivering high-quality nutraceutical
                products and transparent contract manufacturing is our top
                priority. Whether you have an order question, quality concern,
                or suggestion, our dedicated team is here to listen and assist
                you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* 2. 4-Step Process Section */}
        <section className="hc-process-section">
          <div className="container">
            <div className="hc-section-header">
              <h2 className="hc-section-title">
                How We Handle Your <span className="highlight">Concerns</span>
              </h2>
              <p className="hc-section-subtitle">
                A transparent, step-by-step resolution process designed to
                address every query quickly and effectively.
              </p>
            </div>

            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-lg-3 col-sm-6">
                <div className="hc-step-card">
                  <span className="hc-step-badge">Step 1</span>
                  <div className="hc-step-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h3 className="hc-step-title">1. Read FAQs</h3>
                  <p className="hc-step-desc">
                    Explore our curated FAQs below. Most common questions
                    regarding timelines, lab reports, and shipping are answered
                    instantly.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-lg-3 col-sm-6">
                <div className="hc-step-card">
                  <span className="hc-step-badge">Step 2</span>
                  <div className="hc-step-icon">
                    <i className="fas fa-qrcode"></i>
                  </div>
                  <h3 className="hc-step-title">2. Scan &amp; Submit</h3>
                  <p className="hc-step-desc">
                    If unresolved, scan our mobile QR code or fill out the
                    online form with your details and supporting image proof.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-lg-3 col-sm-6">
                <div className="hc-step-card">
                  <span className="hc-step-badge">Step 3</span>
                  <div className="hc-step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="hc-step-title">3. Team Review</h3>
                  <p className="hc-step-desc">
                    Our quality assurance and operations managers review every
                    ticket thoroughly within 24 to 48 business hours.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="col-lg-3 col-sm-6">
                <div className="hc-step-card">
                  <span className="hc-step-badge">Step 4</span>
                  <div className="hc-step-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="hc-step-title">4. Quick Resolution</h3>
                  <p className="hc-step-desc">
                    We take immediate corrective actions and keep you updated
                    through WhatsApp or phone until complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GLS Commitment Section */}
        <section className="hc-commitment-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="hc-commitment-img-wrap">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/nutrition-factory-1.webp"
                    }
                    alt="Gomzi Lifesciences Manufacturing Facility"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hc-commitment-content">
                  <h2 className="hc-commitment-title">
                    Our Commitment to{" "}
                    <span className="highlight" style={{ color: "#86c33a" }}>
                      Manufacturing Excellence
                    </span>
                  </h2>
                  <p className="hc-commitment-desc">
                    At Gomzi Lifesciences, we take immense pride in our
                    state-of-the-art nutraceutical manufacturing facilities in
                    Surat, Gujarat. Our dedicated team of scientists,
                    formulators, and technicians works relentlessly to ensure
                    every supplement meets stringent global safety, purity, and
                    potency standards.
                  </p>
                  <p className="hc-commitment-desc">
                    From raw material testing and automated batch processing to
                    independent lab reports, complete transparency defines our
                    operations. Your feedback directly guides our continuous
                    improvement process.
                  </p>
                  <div className="hc-trust-pills">
                    <span className="hc-trust-pill">
                      <i className="fas fa-check-circle"></i> GMP Certified
                    </span>
                    <span className="hc-trust-pill">
                      <i className="fas fa-check-circle"></i> FSSAI Approved
                    </span>
                    <span className="hc-trust-pill">
                      <i className="fas fa-check-circle"></i> HACCP &amp; ISO
                      Standards
                    </span>
                    <span className="hc-trust-pill">
                      <i className="fas fa-check-circle"></i> 100% Quality
                      Tested
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ Section */}
        <section id="faq-section">
          <div className="max-90-margin-0">
            <div className="col-12 text-center">
              <div>
                <h2 className="homepage-faq-title barlow-condensed-semi">
                  FAQ's
                </h2>
              </div>
            </div>

            <div className="row mb-4 justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="hcf-input-wrap mb-0 mt-3">
                  <i className="fas fa-search hcf-input-icon"></i>
                  <input
                    type="text"
                    className="hcf-input"
                    placeholder="Search FAQs by topic or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row pb-5 justify-content-center overflow-hidden">
              <div className="col-md-8">
                {filteredFaqs.length > 0 ? (
                  <ComplaintsFaq faqs={filteredFaqs} />
                ) : (
                  <div className="text-center text-muted mt-4">
                    <i className="fas fa-search fa-2x mb-3 opacity-50"></i>
                    <p>No matching FAQs found for "{searchQuery}".</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Mobile QR & Direct Form Section */}
        <section id="qr-section" className="hc-qr-section">
          <div className="container">
            <div className="hc-qr-card">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-4 mb-lg-0 text-center text-lg-start">
                  <div className="hc-badge">
                    <i className="fas fa-mobile-alt"></i> Mobile Optimized
                  </div>
                  <h2 className="hc-qr-title">
                    Prefer Using Your Mobile Device?
                  </h2>
                  <p className="hc-qr-desc mb-0">
                    We are dedicated to supporting your supplement brand. If
                    your inquiry is not answered above, simply scan the QR code
                    to open the ticket form directly on your mobile device.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="hc-qr-box">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                        window.location.origin + "/help-center-form",
                      )}`}
                      alt="Gomzi Lifesciences Complaint Form QR Code"
                      loading="lazy"
                    />
                    <span>Scan to open form</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBotGomziComponent />
      <NutritionFooter />
    </>
  );
}

export default Complaints;
