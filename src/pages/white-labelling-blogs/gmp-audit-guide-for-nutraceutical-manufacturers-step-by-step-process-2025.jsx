import React from "react";
import { useEffect } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/nutrition.css";
import "../../assets/css/blog.css";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Accordion } from "react-bootstrap";

const faqData = [
  {
    eventKey: "faq1",
    question: " 1. Why audit a \u201cGMP Certified\u201d factory?",
    answer:
      " Certification proves they can comply; your audit checks they are compliant with your specific product today. It's your vital safety check.",
  },
  {
    eventKey: "faq2",
    question: '2.What does "GMP certified" actually mean for my product?',
    answer:
      " It means the manufacturer has proven they follow strict rules on cleanliness, documentation, and process control, ensuring your product is safe and consistent batch-to-batch.",
  },
  {
    eventKey: "faq3",
    question: " 3. Why is the year '2025' compliance so important?",
    answer:
      "  Regulators are now focused on Data Integrity and Audit Trails. You need proof that computerized records haven't been secretly altered, which is essential for a credible GMP certified nutraceutical manufacturer India.",
  },
  {
    eventKey: "faq4",
    question: "4. What's the #1 thing to check for on the factory floor?",
    answer:
      "Cross-Contamination. Ensure your product line is completely separate from any allergen (like nuts or whey) via strict Line Clearance protocols.",
  },
  {
    eventKey: "faq5",
    question: "5. Is the supplier's COA enough proof of quality?",
    answer:
      " No. The manufacturer must perform their own Identity Testing on incoming ingredients, not just trust the supplier's COA.",
  },
  {
    eventKey: "faq6",
    question: "6. My product is a powder. What's the biggest risk?",
    answer:
      "Moisture! Check for humidity-controlled rooms.Moisture degrades potency, especially in delicate nutraceutical sachets manufacturer India products.",
  },
  {
    eventKey: "faq7",
    question: " 7. What is product traceability?",
    answer:
      " The ability to instantly trace a single finished bottle back to the specific raw material lot, equipment, and staff used — essential for quick product recall readiness.",
  },
  {
    eventKey: "faq8",
    question: '8. What does "OEM/ODM" mean for my recipe?',
    answer:
      "OEM means they follow your recipe.ODM means their team creates the recipe for you.Always confirm you own the final Master Batch Record (MBR) and the IP.",
  },
  {
    eventKey: "faq9",
    question: " 9. What does CAPA mean?",
    answer:
      "CAPA (Corrective and Preventive Action) means they fix the immediate mistake and then change the system to ensure that problem never happens again.",
  },
  {
    eventKey: "faq10",
    question: " 10. How does this protect my brand's money?",
    answer:
      " By vetting a manufacturer rigorously, you prevent recalls, which are financially devastating and ruin your brand's reputation.",
  },
];

function GMPAuditGuideforNutraceuticalManufacturersStepbyStepProcess2025() {
  const canonicalUrl = window.location.href;

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  //  Steps Array

  const stepsData = [
    {
      number: "1",
      title: "Before You Visit: Set the Rules",
      whatItIs:
        "This is the planning stage, where you decide exactly what you're checking.",
      simpleCheck: (
        <>
          Make sure the manufacturer's GMP Certificate is current. Decide if
          you're checking the whole factory or just the specific line making
          your product (e.g., the{" "}
          <strong>
            <Link to="https://www.gomzilifesciences.in/nutrition/white-labelling">
              OEM/ODM nutraceutical manufacturing
            </Link>
          </strong>{" "}
          process for a softgel).
        </>
      ),
      yourTakeaway:
        "You need a clear checklist so no corner of the factory is missed.",
      extraContent: null,
    },
    {
      number: "2",
      title: "The People Check: Are Staff Following the Rules?",
      whatItIs:
        "Auditing the staff is critical because human error is the #1 cause of mistakes.",
      simpleCheck: (
        <>
          Look at their <strong>Training Records</strong>. Did the team get
          their annual <strong>GMP Refresher Training</strong>? Are they trained
          specifically for the job they're doing?
        </>
      ),
      yourTakeaway:
        "Watch the production line! Are they wearing the hairnets, gloves, and specialized uniforms correctly? A small hygiene mistake can ruin your whole batch.",
      extraContent: null,
    },
    {
      number: "3",
      title: "The Facility Check: Is the Factory Safe and Clean?",
      whatItIs:
        "Checking the building and the machinery. The environment must protect your ingredients.",
      simpleCheck: (
        <>
          Does the factory floor plan make sense? Ingredients shouldn't cross
          paths to prevent <strong>cross-contamination</strong>. Look at the{" "}
          <strong>Sanitation Logs</strong> — are surfaces cleaned meticulously
          between batches?
        </>
      ),
      yourTakeaway: (
        <>
          Check the <strong>Equipment Maintenance Logs!</strong> Are the scales
          calibrated? A tiny error in the <strong>Calibration Logs</strong>{" "}
          means your label weights could be wrong.
        </>
      ),
      extraContent: null,
    },
    {
      number: "4",
      title: "The Ingredient Check: Are They Using the Right Stuff?",
      whatItIs:
        "Verifying the quality of everything that goes into your product.",
      simpleCheck: (
        <p className="blog-text">
          Does the{" "}
          <strong>GMP certified nutraceutical manufacturer India</strong> have a
          strict program for vetting their suppliers? Most importantly: they
          must test the materials themselves. A supplier's <strong>COA</strong>{" "}
          is not enough!
        </p>
      ),
      yourTakeaway: (
        <>
          Materials should be kept in a <strong>Quarantine area</strong> until
          their <strong>Identity Testing</strong> proves they are exactly what
          they claim to be. This is vital for your specialized{" "}
          <strong>nutraceutical products</strong>.
        </>
      ),
      extraContent: null,
    },
    {
      number: "5",
      title: "The Production Check: Did They Follow the Recipe?",
      whatItIs: (
        <>
          Auditing the actual manufacturing process to see if they follow their
          written rules <strong>(SOPs)</strong>.
        </>
      ),
      simpleCheck: (
        <>
          Review a <strong>Batch Record (BPR)</strong>. It's like a report card
          for the batch. Every mixing time, weight check, and signature must be
          filled out <strong>in real-time</strong>.
        </>
      ),
      yourTakeaway: (
        <>
          Look for <strong>Deviation Handling</strong> reports. If something
          went wrong, did they investigate why and get documented approval to
          continue, or did they just ignore it?
        </>
      ),
      extraContent: null,
    },
    {
      number: "6",
      title:
        "The Digital Check: Is the Data Real and Traceable? (New for 2025!)",
      whatItIs:
        "In 2025, auditors focus on the honesty and reliability of computerized records.",
      simpleCheck:
        "For any software they use, are the Audit Trails enabled? This proves who changed what and when. Can they instantly trace every bottle of your product back to its specific batch of raw material?",
      yourTakeaway: (
        <>
          Traceability is mandatory. If they can't prove where every ingredient
          came from and where every bottle went, they fail the core{" "}
          <strong>cGMP</strong> requirement.
        </>
      ),
      extraContent: null,
    },
    {
      number: "7",
      title: "The Follow-Up Check: Fixing Problems for Good",
      whatItIs:
        "The audit ends, but the work doesn't. This step ensures mistakes won't happen again.",
      simpleCheck: null,
      yourTakeaway: (
        <>
          A good manufacturer is always looking for{" "}
          <strong>Continuous Improvement</strong>. Management must review audit
          findings to ensure the right resources are used to fix system problems
          permanently.
        </>
      ),
      extraContent: (
        <>
          <p className="blog-text">
            Review the <strong>CAPA (Corrective and Preventive Action)</strong>{" "}
            reports.
          </p>
          <ul className="blog-list">
            <li className="blog-list-item">
              The <strong>Corrective Action</strong> fixes the immediate issue
              (e.g., "re-clean the machine").
            </li>
            <li className="blog-list-item">
              The <strong>Preventive Action</strong> fixes the system (e.g.,
              "rewrite the cleaning SOP and retrain all staff").
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          How to Manufacture Export-Ready Nutraceuticals in India: 2026 Global
          Guide
        </title>
        <meta
          name="description"
          content="Learn the step-by-step process to manufacture export-ready nutraceuticals in India. Discover global compliance secrets and why GomziLifesciences is a top partner for international success."
        />
        <meta
          name="keyword"
          content="private label supplements, white label supplements, supplement brand, nutraceutical manufacturing, FSSAI license, supplement business"
        />
        <meta
          property="og:title"
          content="How to Manufacture Export-Ready Nutraceuticals in India: 2026 Global Guide"
        />
        <meta
          property="og:description"
          content="Learn the step-by-step process to manufacture export-ready nutraceuticals in India. Discover global compliance secrets and why GomziLifesciences is a top partner for international success."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
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
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1" />`}</noscript>
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

      <div className="my-auto">
        <section className="header-main">
          <div className="px-1 py-2 bg-yellow text-center">
            <div className="item active">
              <Link to="/nutrition/bulk-inquiry-nutrition">
                <p className="text-white m-0 f-rob-reg f-14 lp-2">
                  Bulk Inquiry Now
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="main-content" style={{ marginTop: "150px" }}>
        <section className="blog-main">
          <div className="container-fluid  p-0" style={{ width: "95%" }}>
            <div className="row">
              <div
                className="col-12 text-center"
                style={{ padding: "0px 15px" }}
              >
                <div className="details-banner-img position-relative">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/best-whey-protein-in-india-main.webp"
                    }
                    alt="bgImage"
                    className="img-fluid w-100 mh-200 object-fit"
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  />
                  <div className="layer"></div>
                  <div className="col-12 detail-title">
                    <h1 className="text-white f-rob-bol f-43">
                      How to Manufacture Export-Ready Nutraceutical Products in
                      India?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid w-80">
            <div className="row">
              <div className="col-12 text-center mb-4 px-4">
                <div className="ql-editor text-left mt-5">
                  <div className="blog-container">
                    {/* Intro */}
                    <div className="blog-section">
                      <h2 className="blog-section-title">
                        From Idea to Shelf: Your Ultimate Guide to Hiring
                        India's Top Nutraceutical Manufacturers
                      </h2>
                      <h3 className="blog-subsection-title">
                        What to Demand Before Hiring Your Supplement
                        Manufacturer
                      </h3>
                      <p className="blog-text" style={{ marginBottom: "8px" }}>
                        Launching a supplement brand is exciting, but the
                        manufacturing process can feel like a maze.
                      </p>
                      <p className="blog-text" style={{ marginBottom: "8px" }}>
                        To build a successful business, you don't just need a
                        vendor — you need a strategic partner who operates at
                        the highest level of quality and professionalism.
                      </p>
                      <p className="blog-text" style={{ marginBottom: "8px" }}>
                        This guide will walk you through what to look for when
                        choosing a{" "}
                        <strong>
                          <Link to="https://www.gomzilifesciences.in/nutrition/white-labelling">
                            best nutraceutical third party manufacturer in India
                          </Link>
                        </strong>{" "}
                        and how to leverage their expertise to scale your
                        business.
                      </p>
                      <p className="blog-text">
                        Don't let the technical terms scare you! Before you pick
                        a{" "}
                        <strong>
                          <Link to="https://www.gomzilifesciences.in/nutrition/white-labelling">
                            top leading supplement manufacturer
                          </Link>
                        </strong>
                        , slow down. This is your guide to making sure your
                        chosen <strong>nutraceutical manufacturer</strong> is
                        trustworthy and compliant. Think of this as your
                        "Quality Check" master list.
                      </p>
                    </div>

                    {/*  STEPS - stepsData.map() thi render */}
                    {stepsData.map((step, index) => (
                      <div
                        key={step.number}
                        style={{ display: "flex", gap: "0" }}
                      >
                        {/* Left: Timeline circle + vertical line */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "52px",
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "50%",
                              background: "#86c33a",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "18px",
                              fontWeight: "700",
                              color: "#fff",
                              flexShrink: 0,
                              zIndex: 1,
                              boxShadow: "0 2px 8px rgba(134,195,58,0.4)",
                            }}
                          >
                            {step.number}
                          </div>
                          {index < stepsData.length - 1 && (
                            <div
                              style={{
                                width: "2px",
                                flex: 1,
                                background: "#86c33a",
                                opacity: 0.35,
                                minHeight: "40px",
                              }}
                            />
                          )}
                        </div>

                        {/* Right: Content */}
                        <div
                          style={{
                            flex: 1,
                            paddingLeft: "20px",
                            paddingBottom: "40px",
                          }}
                        >
                          <h2
                            className="blog-section-title"
                            style={{ marginTop: "8px", marginBottom: "16px" }}
                          >
                            {step.title}
                          </h2>

                          {/* What it is */}
                          <div style={{ marginBottom: "10px" }}>
                            <p
                              style={{
                                margin: "0 0 2px 0",
                                fontWeight: "700",
                                fontSize: "14px",
                                color: "#86c33a",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              <i
                                className="fas fa-info-circle"
                                style={{ marginRight: "6px" }}
                              ></i>
                              What it is
                            </p>
                            <p
                              className="blog-text"
                              style={{ margin: "0 0 0 20px" }}
                            >
                              {step.whatItIs}
                            </p>
                          </div>

                          {/* Simple Check */}
                          <div style={{ marginBottom: "10px" }}>
                            <p
                              style={{
                                margin: "0 0 2px 0",
                                fontWeight: "700",
                                fontSize: "14px",
                                color: "#86c33a",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              <i
                                className="fas fa-search"
                                style={{ marginRight: "6px" }}
                              ></i>
                              Simple Check
                            </p>
                            <div style={{ margin: "0 0 0 20px" }}>
                              {step.simpleCheck ? (
                                <p className="blog-text" style={{ margin: 0 }}>
                                  {step.simpleCheck}
                                </p>
                              ) : (
                                step.extraContent
                              )}
                            </div>
                          </div>

                          {/* Your Takeaway */}
                          <div>
                            <p
                              style={{
                                margin: "0 0 2px 0",
                                fontWeight: "700",
                                fontSize: "14px",
                                color: "#86c33a",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              <i
                                className="fas fa-lightbulb"
                                style={{ marginRight: "6px" }}
                              ></i>
                              Your Takeaway
                            </p>
                            <div style={{ margin: "0 0 0 20px" }}>
                              <p className="blog-text" style={{ margin: 0 }}>
                                {step.yourTakeaway}
                              </p>
                              {step.number === "7" && step.extraContent && (
                                <div style={{ marginTop: "8px" }}>
                                  {step.extraContent}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* FAQs */}

                    <div className="blog-section">
                      <h2 className="blog-section-title">FAQs</h2>

                      <Accordion defaultActiveKey={["faq1"]} alwaysOpen>
                        {faqData.map((faq) => (
                          <Accordion.Item
                            key={faq.eventKey}
                            eventKey={faq.eventKey}
                            className="mt-3 p-4"
                          >
                            <Accordion.Header className="faq-question">
                              {faq.question}
                            </Accordion.Header>
                            <Accordion.Body className="faq-answer">
                              {faq.answer}
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <NutritionFooter />
    </>
  );
}

export default GMPAuditGuideforNutraceuticalManufacturersStepbyStepProcess2025;
