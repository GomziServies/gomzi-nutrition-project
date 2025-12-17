import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/css/thirdParty.css";

const ProductFAQS = () => {
  return (
    <section className="faq-section bg-white py-3 py-md-5">
      <div className="container-fluid w-80">
        {/* Intro Paragraph */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="faq-title f-rob-bol f-30 text-uppercase">
              Nutraceuticals Third Party Manufacturers in India, Surat
            </h2>
            <p className="faq-intro f-rob-reg f-16 mt-3">
              Choosing the right third-party manufacturing is key to start your
              health and nutrition business. <b>Gomzilifesciences</b>, founded
              in 2024, is a top Nutraceuticals Third Party Manufacturer in India
              from Surat focusing on high-quality formulations, innovation, and
              safety. <br />
              We are one of the leading supplement manufacturers in India,
              offering premium nutraceuticals, sports nutrition, performance
              drinks, protein powders, and wellness products. As a{" "}
              <b>white label nutrition manufacturer</b>, we help clients create
              their own private-label goods with full customization. <br />
              <b>Gomzilifesciences LLP</b> is ISO 22000:2018 certified with
              trusted approvals like FSSAI, HACCP, GMP, HALAL, and Kosher,
              ensuring global safety, purity, and effectiveness standards.{" "}
              <br />
              Our advanced facilities and customer-focused approach make it easy
              for businesses to expand their product lines. We provide smooth
              processes, strict quality checks, and quick market access for both
              start-ups and established brands. <br />
              Trust us for top-notch quality, innovation, and customer-focused
              solutions in nutraceutical manufacturing. With our expertise and
              commitment, we turn your vision into reality.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
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

              <Accordion.Item eventKey="8" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can healthcare professionals create their own supplement
                  brand?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. We partner with doctors, dietitians, and wellness
                  clinics. Together, they launch their own personalized
                  supplements. We even support small-batch manufacturing to suit
                  clinic requirements.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is white labeling in the nutrition industry?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  White labeling lets you sell nutrition products under your own
                  brand while a third-party manufacturer produces them. It helps
                  you offer quality supplements without setting up your own
                  facility.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  How does the private labeling process work for supplements?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  You select a formula, customize the packaging, approve the
                  design, and place your order. The manufacturer handles
                  production and delivery.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="11" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Why should I consider white labeling nutrition products?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  It saves cost, time, and effort by giving you ready-to-brand
                  products without dealing with manufacturing or inventory.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="12" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What types of nutrition products can I white-label?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  You can white-label powders, tablets, capsules, vitamins,
                  protein products, gummies, liquids, and more pre-formulated or
                  custom. Gomzilifesciences is one of the most trusted{" "}
                  <a
                    className="blog-text-link font-black"
                    href="https://www.gomzilifesciences.in/nutrition/white-labelling"
                  >
                    <strong>white label supplement manufacturer </strong>
                  </a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="13" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can I create products for gyms, coaches, or fitness studios?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Absolutely. Many clients create{" "}
                  <strong>
                    GYM-branded whey, pre-workouts, BCAA, vitamins.
                  </strong>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="14" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Do you offer branding and design services?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes, branding, label design, and packaging support are
                  available to help your product look retail-ready.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="15" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the minimum order quantity (MOQ)?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  The MOQ generally ranges from 500 to 1,000 units depending on
                  the product and customization.{" "}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="16" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What’s the difference between white label and private label?{" "}
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  White label = ready formulations you can brand. <br />
                  Private label = fully customized formulas made specifically
                  for your brand. Gomzi Lifescience, as an established private
                  label manufacturer in India, handles both types of projects.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="17" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  How do I know my custom protein formula will remain private
                  and not be shared with other brands?{" "}
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Reputable manufacturers sign an NDA (Non-Disclosure Agreement)
                  to protect your formula, taste profile, and branding. This
                  agreement ensures your product remains exclusive to your
                  brand.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="18" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Is white labeling a good model for new nutrition brands?{" "}
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. It’s low-risk, affordable, and helps new brands launch
                  high-quality supplements quickly.{" "}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="19" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What documents or licenses do I need to start selling?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  You only need basic business registration +{" "}
                  <a
                    className="blog-text-link font-black"
                    href="https://fssaiindia.in/fssai-food-safety-license-registration-for/food-marketing-company/"
                  >
                    <strong>FSSAI marketing license</strong>
                  </a>{" "}
                  . We help with packaging compliance.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="20" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can fitness trainers, gym owners, or influencers launch their
                  own protein supplement brand?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Absolutely. White-label protein manufacturing is ideal for gym
                  trainers, bodybuilders, influencers, coaches, and gym owners
                  who want to monetize their audience with their own supplement
                  line.
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
// descriptionShow text-secondary whitelable-decription
