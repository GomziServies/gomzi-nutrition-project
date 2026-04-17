import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/css/thirdParty.css";
import "../../assets/css/nutrition.css";

const ProductFAQS = () => {
  return (
    <section className="faq-section bg-white py-3 py-md-5">
      <div className="max-90-margin-0 ">
        <div className="col-12 text-center">
          <div className="certified-compliant-div">
            <h2 className="certified-compliant-div-h2 barlow-condensed-extra">
              FAQ
            </h2>
          </div>
        </div>

        <div className="row mt-5 pb-5 justify-content-center overflow-hidden">
          <div className="col-md-8">
            <Accordion defaultActiveKey={["1"]} alwaysOpen>
              <Accordion.Item eventKey="1" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is third-party nutraceutical manufacturing in India?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Third-party nutraceutical manufacturing involves outsourcing
                  your supplement production to a specialized company. This
                  allows you to launch your own brand without having to set up a
                  factory. At Gomzilifesciences, we provide end-to-end solutions
                  including formulation, manufacturing, packaging, and labeling.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  How do I start my own nutraceutical or supplement brand?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Choose from our white label nutraceutical products or request
                  a custom formulation. We help with FSSAI approval, packaging
                  design, and branding. So, you may concentrate on marketing and
                  sales.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What certifications do your products have?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Our nutraceuticals are manufactured in facilities authorized
                  by FSSAI, GMP, HACCP, and ISO. These certifications guarantee
                  product safety and quality. They also ensure compliance for
                  both domestic and export markets.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the minimum order quantity (MOQ) for private label
                  supplements?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  MOQ depends on the product type. We provide a wide selection
                  of capsules, tablets, powders, and gummies. This helps
                  startups and small businesses launch their brands without
                  breaking the bank.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Do you provide custom formulations?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Our R&amp;D team creates unique formulations. We work on
                  proteins, herbal supplements, multivitamins, performance
                  drinks, and more. This helps your business stand out in a
                  market where there are a lot of other nutraceuticals.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can you manufacture supplements for e-commerce brands?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Absolutely. We supply nutraceuticals to Amazon, Flipkart, and
                  D2C sellers across India. We offer great packaging, barcoding,
                  and compliance help. This makes selling online easy for you.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Do you export nutraceutical products to other countries?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. We serve exporters and international traders. We offer
                  bulk nutraceutical manufacturing that meets global regulatory
                  standards. We ensure all documentation and certifications are
                  in place.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQS;
