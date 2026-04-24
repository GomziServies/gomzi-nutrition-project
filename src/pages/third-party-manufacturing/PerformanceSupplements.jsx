import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadPdf from "../../pdf/performance-supplement.pdf";
import "../../assets/css/blog.css";

import {
  faChartBar,
  faDna,
  faCalendarCheck,
  faTag,
  faStar,
  faTrophy,
  faHeartPulse,
  faUsers,
  faCheckCircle,
  faShieldHalved,
  faBolt,
  faDroplet,
  faMedal,
  faGem,
  faDumbbell,
  faLeaf,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/css/nutrition.css";

const KeyFeatures = ({ features }) => (
  <div className="wh-feat-grid">
    {features.map((feature, index) => (
      <div key={index} className="wh-feat-item">
        <FontAwesomeIcon icon={feature.icon} className="wh-feat-icon" />
        <span className="wh-feat-text">{feature.label}</span>
      </div>
    ))}
  </div>
);

const testimonials = [
  {
    text: "Gomzi Life Sciences is a very good work, I have also made this product and they provide very good quality, they do not compromise on quality, moreover they provide timely delivery, if you want to join them then you can join, I have a positive review, thank you gomzi life science and especially Gautam sir is very good, thank you Gautam sir",
    name: "Sarvottam Prasad",
    role: "Founder of Five Fitness",
    rating: 5,
  },
  {
    text: "Thank you so much, Dr. Gautam Jani, for building our product exactly as we envisioned for an entry-level nutraceutical brand. Your commitment, understanding of our needs, and attention to detail made a real difference. We’re grateful to have worked with you..",
    name: "Parth bhai",
    role: "Founder of NutraXpm",
    rating: 5,
  },
  {
    text: (
      <>
        {" "}
        Service 100%
        <br />
        Quality delivered 100%
        <br />
        Coperation 100%
        <br />
        Team support 100%
        <br />
        Overall good experience{" "}
      </>
    ),
    name: "Bharat bahi Chaudhari",
    role: "Founder of Gravity",
    rating: 5,
  },
  {
    text: "I have a very in-depth knowledge about raw ingredients of nutraceuticals products and currently running a nutrition store in ahmedabad.",
    name: "Mithil Patel",
    role: "Founder of CleanX",
    rating: 5,
  },
  {
    text: "We at Pro Wolf Nutrition are truly impressed with Gomzi Life Science for their exceptional supplement manufacturing services. They played a key role in bringing our premium Intence Pre Workout to life — available in our signature Tangy Orange and Green Apple flavors.",
    name: "Rathod Kishan",
    role: "Founder of Prowolf",
    rating: 5,
  },
  {
    text: "I got my brand ready with Gomzi Supplement Manufacturing, and they were incredibly helpful in getting my brand ready and gave me excellent suggestions. This helped me build my brand effectively. They were incredibly helpful and their team is incredibly good, and I look forward to working with them again. Thank you so much!",
    name: "Samirbhai",
    role: "Founder of Bio Kinetic",
    rating: 5,
  },
];

const carouselOptions = {
  loop: true,
  margin: 24,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: [
    `<span class="testi-nav-btn prev-btn">&#8592;</span>`,
    `<span class="testi-nav-btn next-btn">&#8594;</span>`,
  ],
  responsive: {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  },
};

const PerformanceSupplements = () => {
  const phoneNumber = "+918320077993";
  const baseMessage =
    "Hello, I have an inquiry about third-party manufacturing for ";

  const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "star-active" : "star-inactive"}`}
      >
        ★
      </span>
    ));

  const products = [
    {
      id: 1,
      imageSrc: "/assets/images/third-party-manufacturing/pre-workout.webp",
      productName: "Pre-Workout Supplements",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Pre-Workout Supplements")}`,
    },
    {
      id: 2,
      imageSrc: "/assets/images/third-party-manufacturing/creatine.webp",
      productName: "Creatine Supplements",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Creatine Supplements")}`,
    },
    {
      id: 3,
      imageSrc: "/assets/images/third-party-manufacturing/bcaas.webp",
      productName: "BCAA Supplements",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "BCAA Supplements")}`,
    },
    {
      id: 4,
      imageSrc: "/assets/images/third-party-manufacturing/eaas.webp",
      productName: "EAA Supplements",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "EAA Supplements")}`,
    },
  ];

  const schemaData = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/sports-nutrition-supplements/#product",
      name: "Private Label Sports Nutrition & Performance Supplement Manufacturer in India",
      image:
        "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/pre-workout.png",
      description:
        "Gomzi Lifescience LLP is a leading sports nutrition and performance supplement manufacturer in Surat, India. We offer private label and third party manufacturing for pre-workout, creatine, BCAA, EAA, and custom sports supplements with FSSAI, GMP, HACCP, HALAL and Kosher certifications.",
      brand: {
        "@type": "Brand",
        name: "Gomzilifesciences",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Gomzilifesciences",
        url: "https://www.gomzilifesciences.in",
        logo: "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "53",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/sports-nutrition-supplements/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Pre-Workout Supplements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pre-Workout supplements are designed to support energy, focus, endurance, and workout performance before training sessions. They are commonly used by gym users, athletes, and fitness supplement brands. We offer Basic, Standard, and Advanced formulation levels.",
          },
        },
        {
          "@type": "Question",
          name: "What Creatine products does Gomzi Lifescience manufacture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manufacture Creatine Monohydrate, Micronized Creatine, and Creatine Blend Formulations including custom blends with electrolytes and amino acids.",
          },
        },
        {
          "@type": "Question",
          name: "What BCAA ratios are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manufacture BCAA in 2:1:1, 4:1:1, and 8:1:1 ratios with custom formulations including BCAA with electrolytes, BCAA with glutamine, and intra-workout hydration formulas.",
          },
        },
        {
          "@type": "Question",
          name: "Who can start a performance supplement brand with Gomzi Lifescience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our manufacturing services are suitable for gym owners, fitness trainers, sports nutrition brands, e-commerce sellers, athletes, sports professionals, and health and wellness entrepreneurs.",
          },
        },
        {
          "@type": "Question",
          name: "What certifications does Gomzi Lifescience hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All products are manufactured under certified quality systems including FSSAI, GMP, HACCP, HALAL and Kosher standards.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum order quantity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gomzi Lifescience offers a low minimum order quantity of 50 to 100 kg for performance supplement manufacturing.",
          },
        },
        {
          "@type": "Question",
          name: "What Pre-Workout formulation levels are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer Basic Pre-Workout for beginners, Standard Pre-Workout for regular gym users, and Advanced Pre-Workout with high-performance formulas designed for athletes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get private label performance supplement manufacturing in Surat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label performance supplement manufacturing for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/sports-nutrition-supplements/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.gomzilifesciences.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Third Party Manufacturing",
          item: "https://www.gomzilifesciences.in/third-party-manufacturing",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sports Nutrition Supplements",
          item: "https://www.gomzilifesciences.in/third-party-manufacturing/sports-nutrition-supplements",
        },
      ],
    },
  ];

  const certificates = [
    { file: "nutri-certi-1.webp", name: "HACCP", sub: "Hazard Control Point" },
    {
      file: "nutri-certi-2.webp",
      name: "GMP",
      sub: "Good Manufacturing Practice",
    },
    { file: "nutri-certi-3.webp", name: "HALAL", sub: "Halal Certified" },
    { file: "nutri-certi-4.webp", name: "KOSHER", sub: "Kosher Certified" },
    { file: "nutri-certi-5.webp", name: "FSSAI", sub: "Licensed & Approved" },
  ];

  const productCategories = [
    {
      id: 1,
      title: "Pre-Workout Supplement",
      target:
        "TARGET: GYM-GOERS · FITNESS INFLUENCERS · SPORTS NUTRITION BRANDS",
      description:
        "Pre-Workout supplements are designed to support energy, focus, endurance, and workout performance before training sessions. These products are commonly used by gym users, athletes, and fitness supplement brands.",
      formulationTitle: "Pre-Workout Formulation Levels",
      formulations: [
        {
          label: "Basic Pre-Workout",
          desc: "Suitable for beginner fitness users",
        },
        {
          label: "Standard Pre-Workout",
          desc: "Balanced formulation for regular gym users",
        },
        {
          label: "Advanced Pre-Workout",
          desc: "High-performance formulas designed for athletes",
        },
      ],
      customTitle: "Custom Pre-Workout Formulations Available",
      customFormulations: [
        "Pre-Workout with Fat Burner Ingredients",
        "High Stim Pre-Workout Formulations",
        "Pump & Endurance Pre-Workout",
        "Athlete Performance Pre-Workout",
      ],
      commonIngredients: [
        "Caffeine",
        "Beta-Alanine",
        "Citrulline Malate",
        "Taurine",
        "Creatine Monohydrate",
        "L-Arginine",
        "Electrolytes",
      ],
      features: [
        { icon: faBolt, label: "Energy & focus support" },
        { icon: faHeartPulse, label: "Endurance & workout performance" },
        { icon: faTrophy, label: "Multiple formulation levels" },
        { icon: faTag, label: "Ideal for private label brands" },
      ],
    },
    {
      id: 2,
      title: "Creatine Supplement",
      target: "TARGET: BODYBUILDERS · STRENGTH ATHLETES · PERFORMANCE BRANDS",
      description:
        "Creatine is one of the most widely used ingredients in sports nutrition supplements for strength and performance support. These products are commonly used in gym supplements, athlete performance formulas, and strength training products.",
      formulationTitle: "Creatine Product Options",
      formulations: [
        { label: "Creatine Monohydrate", desc: "" },
        { label: "Micronized Creatine", desc: "" },
        { label: "Creatine Blend Formulations", desc: "" },
      ],
      customTitle: "Custom Creatine Formulations",
      customFormulations: [
        "Creatine with Electrolytes",
        "Creatine with Amino Acids",
        "Advanced Performance Creatine Blends",
      ],
      commonIngredients: [
        "Creatine Monohydrate",
        "Creatine HCL",
        "Electrolytes",
        "Amino Acid Support Ingredients",
      ],
      features: [
        { icon: faDumbbell, label: "Strength & performance support" },
        { icon: faGem, label: "Monohydrate & micronized options" },
        { icon: faFlask, label: "Custom blend formulations" },
        { icon: faMedal, label: "Athlete performance focused" },
      ],
    },
    {
      id: 3,
      title: "BCAA Supplement",
      target: "TARGET: ENDURANCE ATHLETES · GYM-GOERS · INTRA-WORKOUT BRANDS",
      description:
        "BCAA supplements contain branched-chain amino acids including leucine, isoleucine, and valine, commonly used in sports nutrition recovery formulas.",
      formulationTitle: "BCAA Product Options",
      formulations: [
        { label: "BCAA 2:1:1", desc: "" },
        { label: "BCAA 4:1:1", desc: "" },
        { label: "BCAA 8:1:1", desc: "" },
      ],
      customTitle: "Custom BCAA Formulations",
      customFormulations: [
        "BCAA with Electrolytes",
        "BCAA with Glutamine",
        "Intra-Workout Hydration Formulas",
      ],
      commonIngredients: [
        "L-Leucine",
        "L-Isoleucine",
        "L-Valine",
        "Electrolytes",
        "Glutamine",
      ],
      features: [
        { icon: faDna, label: "2:1:1, 4:1:1, 8:1:1 ratios" },
        { icon: faDroplet, label: "Intra-workout hydration support" },
        { icon: faLeaf, label: "Recovery amino acid blend" },
        { icon: faUsers, label: "Suitable for all fitness levels" },
      ],
    },
    {
      id: 4,
      title: "EAA Supplement",
      target:
        "TARGET: SERIOUS ATHLETES · VEGAN BRANDS · PREMIUM SUPPLEMENT LABELS",
      description:
        "EAA supplements contain all essential amino acids required by the body, making them suitable for recovery and advanced sports nutrition formulations.",
      formulationTitle: "EAA Product Options",
      formulations: [
        { label: "Standard Essential Amino Acid Formula", desc: "" },
        { label: "Advanced Athlete EAA Formulations", desc: "" },
      ],
      customTitle: "Custom EAA Formulations",
      customFormulations: [
        "EAA with Electrolytes",
        "EAA Recovery Formulas",
        "Athlete Endurance Amino Blends",
      ],
      commonIngredients: [
        "Essential Amino Acids",
        "Electrolytes",
        "Recovery Amino Compounds",
      ],
      features: [
        { icon: faStar, label: "All essential amino acids" },
        { icon: faShieldHalved, label: "Advanced recovery support" },
        { icon: faChartBar, label: "Athlete endurance formulas" },
        { icon: faCalendarCheck, label: "Standard & advanced options" },
      ],
    },
  ];

  const whyChoose = [
    "Specialized Powder Supplement Manufacturing Facility",
    "Low Minimum Order Quantity (50–100 KG)",
    "Custom Formulation Development",
    "Private Label Manufacturing",
    "Flavor Customization",
    "Packaging & Label Support",
    "Trusted Manufacturing Partner for Supplement Brands",
  ];

  const productSpecs = [
    {
      specification: "End-to-End Brand Launch Partner",
      details: "Gomzi Lifesciences LLP",
    },
    { specification: "Product Category", details: "Performance Supplements" },
    { specification: "Form", details: "Powder" },
    {
      specification: "Packaging Size",
      details: "Customizable (300g, 500g, 1 KG or as required)",
    },
    {
      specification: "Packaging Type",
      details: "Jar / Pouch / Custom Packaging",
    },
    { specification: "Composition", details: "Custom Formulation Available" },
    {
      specification: "Flavours",
      details:
        "Chocolate, Coffee, Mava Kulfi & Many More Custom Flavours Available",
    },
    { specification: "Shelf Life", details: "18 Months" },
    { specification: "Delivery Time", details: "15–20 Days" },
    {
      specification: "Product packaging",
      details: "Private Label & White Labelling Available",
    },
    {
      specification: "Certifications",
      details: "FSSAI, GMP, HACCP, HALAL, Kosher",
    },
  ];

  return (
    <div className="tpm-bg">
      <PageMeta
        title="Private Label Performance Supplement Manufacturer in Surat, India | Gomzi Lifescience"
        description="Gomzi Lifesciences LLP is a private label performance supplement manufacturer in Surat, India. Custom Pre-Workout, Creatine, BCAA, EAA formulations. FSSAI, GMP, HACCP, HALAL and Kosher certified."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <NutritionHeader />

      <div className="protein-powder-banner">
        <img
          src="/assets/images/third-party-manufacturing/performnace-supplement.webp"
          alt="Performance Supplement Manufacturer Banner"
          className="protein-powder-banner-image desktop-banner"
        />
        <img
          src="/assets/images/third-party-manufacturing/performance-supplement-banner.webp"
          alt="Performance Supplement Manufacturer Banner"
          className="protein-powder-banner-image mobile-banner"
        />
      </div>

      <div className="wh-pg">
        <div className="wh-container">
          <div className="btn-gp">
            <div>
              <a
                href={DownloadPdf || "#"}
                download
                className=" download-brochure barlow-condensed-semi f-18"
              >
                Download Our Brochure
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/918320077993?text=Hello%20I%20am%20interested%20in%20Protein%20Powders"
                target="_blank"
                rel="noreferrer"
                className="download-brochure barlow-condensed-semi f-18"
              >
                Enquiry Now
              </a>
            </div>
            <div>
              <a
                href="tel:+918320077993"
                target="_blank"
                rel="noreferrer"
                className="download-brochure barlow-condensed-semi f-18"
              >
                Call To Our Expert Team
              </a>
            </div>
          </div>

          <h1 className="wh-page-title barlow-condensed-extra f-32">
            Private Label Performance Supplement End-to-End Brand Launch
            <br />
            Partner In Surat, Gujarat
          </h1>

          <div className="whey-protein-div-main">
            <div>
              <p className="wh-desc inter-regular">
                Gomzi Lifesciences LLP manufactures a wide range of performance
                supplements for sports nutrition brands, gym owners, fitness
                trainers, athletes, and e-commerce supplement businesses.
              </p>
              <p className="wh-desc inter-regular">
                Our facility focuses on powder-based nutraceutical
                manufacturing, allowing us to develop customized sports
                nutrition products designed for workout performance, endurance,
                strength, and recovery.
              </p>
              <p className="wh-desc inter-regular">
                All products are manufactured under certified systems including{" "}
                <strong>FSSAI | GMP | HACCP | HALAL | Kosher</strong>
              </p>
            </div>
            <div className="blog p-0">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/nutrition/who-we-are.webp"
                }
                width="100%"
                className="border-radius-20"
                alt="gomzilifesciences"
              />
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title-our-whey-protein barlow-condensed-semi">
              Our Performance Supplement Categories
            </h2>
            <p className="wh-sec-desc-whey-protein inter-regular">
              We offer a range of performance supplement products widely used in
              sports nutrition and gym supplement industries. Each product can
              be developed in multiple formulation levels based on the ideal
              customer, such as beginners, gym users, or professional athletes.
            </p>

            <div className="wh-cat-list">
              {productCategories.map((category) => (
                <div
                  key={category.id}
                  className="wh-cat-row-item-performance-supplement"
                >
                  <div className="wh-cat-row-header wh-cat-row-header-top">
                    <div className="wh-cat-num">{category.id}</div>
                    <div className="wh-cat-title barlow-condensed-semi">
                      {category.title}
                    </div>
                  </div>

                  <div className="wh-cat-row-left">
                    <div className="wh-cat-target inter-500">
                      {category.target}
                    </div>
                    <p className="wh-cat-desc inter-regular">
                      {category.description}
                    </p>

                    <h4 className="mb-2 wh-kf-label inter-500">
                      {category.formulationTitle}
                    </h4>
                    <div className="sub-indent">
                      <ul className="pl-3">
                        {category.formulations.map((f, idx) => (
                          <li
                            key={idx}
                            className="protein-powder-page-description mb-1 inter-regular"
                          >
                            {f.desc ? (
                              <>
                                <strong>{f.label}</strong> – {f.desc}
                              </>
                            ) : (
                              f.label
                            )}
                          </li>
                        ))}
                      </ul>
                      <span className="wh-kf-label  inter-500">
                        Key Features
                      </span>
                      <KeyFeatures
                        className="inter-500"
                        features={category.features}
                      />
                    </div>

                    <h4 className="mb-2 wh-kf-label inter-500">
                      {category.customTitle}
                    </h4>
                    <div className="sub-indent">
                      <ul className="pl-3">
                        {category.customFormulations.map((item, idx) => (
                          <li
                            key={idx}
                            className="protein-powder-page-description mb-1 inter-regular"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h4 className="mb-2 wh-kf-label inter-500">
                      Common Ingredients Used
                    </h4>
                    <div className="sub-indent">
                      <div className="ingredients-tags">
                        {category.commonIngredients.map((ing, idx) => (
                          <span
                            key={idx}
                            className="ingredient-tag inter-regular"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="wh-prod-card">
                    <img
                      src={products[category.id - 1]?.imageSrc}
                      alt={category.title}
                      className="wh-pg wh-cat-row-img-performance"
                    />
                    <div className="wh-prod-card-btn">
                      <a
                        href={products[category.id - 1]?.productLink}
                        className="wh-prod-btn barlow-condensed-semi f-18"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquiry Now
                      </a>
                      <a
                        href="tel:+918320077993"
                        className="wh-prod-btn barlow-condensed-semi f-18"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              MARKET OPPORTUNITY
            </h2>
            <p className="wh-sec-desc inter-500">
              <strong>The Category Is Exploding.</strong>
            </p>
            <div className="market-cards-section">
              <div className="market-cards-container">
                <div className="market-card">
                  <h3 className="barlow-condensed-semi">₹1.9B</h3>
                  <p className="inter-regular">
                    India's sports nutrition market — growing at{" "}
                    <strong>9–11% CAGR.</strong> The window to build a
                    category-defining brand is right now.
                  </p>
                </div>

                <div className="market-card">
                  <h3 className="barlow-condensed-semi">1,000+</h3>
                  <p className="inter-regular">
                    New supplement brands launching in India
                    <strong> this year alone.</strong>
                    The winners will be those who manufacture smarter — not
                    louder.
                  </p>
                </div>
              </div>

              <div className="market-bottom-text">
                <p className="inter-regular">
                  “Over 1,000 new supplement brands will launch in India this
                  year. The question is:{" "}
                  <strong>who manufactures the ones that win?</strong>
                  The answer starts with the quality of your manufacturing
                  partner.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title">
              Who Can Start a Performance Supplement Brand With Us?
            </h2>
            <p className="wh-sec-desc">
              <strong>Our manufacturing services are suitable for:</strong>
            </p>
            <div className="wh-who-grid">
              {[
                "Gym Owners",
                "Fitness Trainers",
                "Sports Nutrition Brands",
                "E-commerce Sellers (Amazon, Flipkart, Shopify)",
                "Athletes and Sports Professionals",
                "Health and Wellness Entrepreneurs",
              ].map((item, i) => (
                <div key={i} className="wh-who-card inter-500">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title">Product Specifications</h2>

            <div className="wh-tbl-wrap">
              <table className="wh-spec-tbl">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {productSpecs.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.specification}</td>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="container">
            <h2 className="wh-sec-title text-center mb-5">
              Why Choose Gomzi Lifesciences?
            </h2>

            <div className="row why-card-wrapper justify-content-center">
              {whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className={`col-lg-4 col-md-6 col-12 mb-4 
      ${idx === whyChoose.length - 1 ? "last-card-center" : ""}`}
                >
                  <div className="why-card">
                    <div className="why-number">{idx + 1}</div>

                    <p className="why-text">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              FORMULATION EXPERTISE
            </h2>

            <p className="wh-sec-desc inter-regular">
              The Indian Flavour Edge.
            </p>

            <div className="wh-flavour-section">
              <div className="wh-flavour-container">
                <div className="wh-flavour-left">
                  <div className="wh-flavour-highlight">
                    <h3 className="barlow-condensed-semi">
                      Why Mawa Kulfi Outsells Chocolate For Tier 2 City Brands
                    </h3>

                    <p className="inter-regular">
                      Global supplement brands default to Chocolate, Vanilla,
                      and Strawberry. But India's fitness market is different.
                      <strong>
                        {" "}
                        Tier 2 and Tier 3 city buyers — your fastest growing
                        customer segment —
                      </strong>
                      respond to familiar flavour profiles they grew up with.
                    </p>

                    <p className="inter-regular">
                      Brands using regional Indian flavours report
                      <strong> 35–50% better repeat purchase rates</strong> vs.
                      standard flavours in non-metro markets. This is your
                      formulation moat.
                    </p>
                  </div>
                </div>

                <div className="wh-flavour-right">
                  <p className="wh-flavour-desc">
                    Our formulation team analyses Google Trends, Amazon BSR
                    data, and sales patterns from 50+ active supplement brands
                    to identify which flavours will win before you commit to a
                    batch.
                  </p>

                  <ul className="wh-flavour-list">
                    <li>
                      <strong>Trend analysis</strong> — Google Trends + Amazon
                      BSR data across 200+ supplement keywords monthly
                    </li>
                    <li>
                      <strong>Regional mapping</strong> — flavour preferences
                      mapped by state and city tier
                    </li>
                    <li>
                      <strong>Sample first</strong> — taste and test your
                      shortlisted flavours before committing to production
                    </li>
                    <li>
                      <strong>Custom development</strong> — have a flavour idea?
                      Our R&D team can develop it in 10–14 days
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/918320077993"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="wh-flavour-btn homePage-btn cta btn fw-bold shadow-lg px-5 py-2 text-capitalize request-toggle barlow-condensed-semi "
                  >
                    Request a Quote
                  </a>
                </div>
              </div>

              <span className="wh-trending-label barlow-condensed-semi">
                TRENDING FLAVOURS – INDIAN MARKET
              </span>

              <div className="wh-flavour-tags">
                {[
                  "Lemon",
                  "Fruit Punch",
                  "Watermelon",
                  "Tangy Orange",
                  "Blueberry",
                ].map((flavour, index) => (
                  <div key={index} className="wh-flavour-tag inter-500">
                    {flavour}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">HOW IT WORKS</h2>

            <p className="wh-sec-desc inter-regular">
              A committed timeline. Documented at every stage. No delays, no
              ambiguity.
            </p>

            <div className="wh-steps-section">
              <div className="wh-steps-container">
                {[
                  {
                    id: "01",
                    title: "Idea & Strategy",
                    desc: "Product brief, target customer, competitive positioning, and SKU selection for your vertical.",
                    days: "1–2 DAYS",
                  },
                  {
                    id: "02",
                    title: "Formulation",
                    desc: "Sample production in our GMP facility. Flavour development and ingredient finalisation.",
                    days: "5–7 DAYS",
                  },
                  {
                    id: "03",
                    title: "Manufacturing",
                    desc: "Batch production with full COA documentation. Third-party lab verification available.",
                    days: "7–10 DAYS",
                  },
                  {
                    id: "04",
                    title: "Packaging",
                    desc: "3D label mockup, FSSAI-compliant design, digiprint / flexo print options. Your brand, our execution.",
                    days: "3–4 DAYS",
                  },
                  {
                    id: "05",
                    title: "Website & Go-Live",
                    desc: "D2C Shopify store, Meta Ads structure, product photography brief. Ready to sell.",
                    days: "2–3 DAYS",
                  },
                ].map((step, index) => (
                  <div key={index} className="wh-step-item">
                    <div className="wh-step-circle">{step.id}</div>

                    <h4 className="wh-step-title barlow-condensed-semi">
                      {step.title}
                    </h4>

                    <p className="wh-step-desc inter-regular">{step.desc}</p>

                    <span className="wh-step-days">{step.days}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section class="qua-wh-section bg-white" id="certification">
          <p className="wh-sec-title barlow-condensed-semi text-center">
            Quality Assurance
          </p>

          <h1 className="wh-sec-desc barlow-condensed-semi text-center">
            Every Batch, Verified.
          </h1>

          <div className="gym-cert-grid">
            {certificates.map((cert, index) => {
              const filePath =
                process.env.PUBLIC_URL +
                `/assets/images/nutrition/${cert.file}`;

              return (
                <div className="gym-cert-card" key={index}>
                  <div className="gym-cert-img-wrap">
                    <img
                      src={filePath}
                      alt={`${cert.name} Certificate`}
                      loading="lazy"
                    />
                  </div>

                  <div className="gym-cert-label-wrap">
                    <span className="gym-cert-label-name barlow-condensed-semi">
                      {cert.name}
                    </span>
                    <span className="gym-cert-label-sub inter-regular">
                      {cert.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="qua-content">
            <div class="qua-item">
              <div class="check-box">
                <svg class="check-icon" viewBox="0 0 14 14">
                  <polyline points="2,7 5.5,10.5 12,3" />
                </svg>
              </div>
              <div class="qua-item-text">
                <h3>GMP-Certified Production</h3>
                <p>
                  Manufactured to international Good Manufacturing Practice
                  standards.
                </p>
              </div>
            </div>

            <div class="qua-item">
              <div class="check-box">
                <svg class="check-icon" viewBox="0 0 14 14">
                  <polyline points="2,7 5.5,10.5 12,3" />
                </svg>
              </div>
              <div class="qua-item-text">
                <h3>Batch COA on Every Order</h3>
                <p>
                  Certificate of Analysis shipped with every production run.
                </p>
              </div>
            </div>

            <div class="qua-item">
              <div class="check-box">
                <svg class="check-icon" viewBox="0 0 14 14">
                  <polyline points="2,7 5.5,10.5 12,3" />
                </svg>
              </div>
              <div class="qua-item-text">
                <h3>Third-Party Lab Testing</h3>
                <p>Independent verification of purity, potency, and safety.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href={DownloadPdf || "#"}
              download
              className="download-btn barlow-condensed-semi"
            >
              <i class="fa-solid fa-download"></i> Download Our Brochure
            </a>
          </div>
        </section>

        <div className="wh-section wh-section-white">
          <section className="testi-section">
            <div className="testimonial-div">
              <h2 className="wh-sec-title-our-whey-protein barlow-condensed-semi">
                Testimonials
              </h2>
            </div>

            <div className="testi-carousel-wrap">
              <OwlCarousel className="owl-theme" {...carouselOptions}>
                {testimonials.map((item, i) => (
                  <div className="testi-card" key={i}>
                    <div>
                      <div className="testi-quote-wrap">
                        <div className="testi-quote-mark">
                          <svg
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 17.5C3 13.5 5.8 10.2 10.5 9L11.5 11.5C8.8 12.4 7.2 14.3 7 16.3H11V22H3V17.5Z"
                              fill="white"
                            />
                            <path
                              d="M15 17.5C15 13.5 17.8 10.2 22.5 9L23.5 11.5C20.8 12.4 19.2 14.3 19 16.3H23V22H15V17.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="testi-stars">
                          {renderStars(item.rating)}
                        </div>
                      </div>
                      <p className="testi-text inter-regular">{item.text}</p>
                    </div>
                    <div className="testi-author">
                      <div className="testi-author-dot">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="testi-name inter-500">{item.name}</p>
                        <p className="testi-role inter-regular">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </section>
        </div>

        <div className="wh-container">
          <div className="blog-section">
            <h2 className="wh-sec-title barlow-condensed-semi">FAQ's</h2>

            <Accordion defaultActiveKey={["1"]} alwaysOpen inter-regular>
              <Accordion.Item eventKey="1" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What are Pre-Workout Supplements?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Pre-Workout supplements are designed to support energy, focus,
                  endurance, and workout performance before training sessions.
                  They are commonly used by gym users, athletes, and fitness
                  supplement brands. We offer Basic, Standard, and Advanced
                  formulation levels.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What Creatine products does Gomzi Lifesciences manufacture?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We manufacture Creatine Monohydrate, Micronized Creatine, and
                  Creatine Blend Formulations including custom blends with
                  Electrolytes and Amino Acids.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What BCAA ratios are available?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We manufacture BCAA in 2:1:1, 4:1:1, and 8:1:1 ratios with
                  custom formulations including BCAA with Electrolytes, BCAA
                  with Glutamine, and Intra-Workout Hydration Formulas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Who can start a performance supplement brand with Gomzi
                  Lifesciences?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Our manufacturing services are suitable for Gym Owners,
                  Fitness Trainers, Sports Nutrition Brands, E-commerce Sellers
                  (Amazon, Flipkart, Shopify), Athletes and Sports
                  Professionals, and Health and Wellness Entrepreneurs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What certifications does Gomzi Lifesciences hold?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  All products are manufactured under certified quality systems
                  including FSSAI, GMP, HACCP, HALAL and Kosher standards.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the minimum order quantity?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Gomzi Lifesciences offers a Low Minimum Order Quantity of
                  50–100 KG for performance supplement manufacturing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What Pre-Workout formulation levels are available?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We offer Basic Pre-Workout for beginner fitness users,
                  Standard Pre-Workout for regular gym users, and Advanced
                  Pre-Workout with high-performance formulas designed for
                  athletes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can I get private label performance supplement manufacturing
                  in Surat?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Gomzi Lifesciences LLP is based in Surat and specializes
                  in private label performance supplement manufacturing for
                  sports nutrition brands, gym owners, fitness trainers,
                  athletes, and e-commerce businesses.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What supplement formats can you manufacture?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Powders (tubs and flat-bottom pouches), capsules, tablets,
                  blister packs, stick packs, and sachets. For sports nutrition
                  specifically — pre-workouts, BCAAs, and mass gainers are
                  available in both tub and resealable pouch formats. MOQ starts
                  at 50 KG per SKU.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Do you offer women's sports nutrition formulas?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  one of our fastest-growing categories. We formulate
                  collagen-protein blends, iron and folate-fortified recovery
                  supplements, and hormone-support pre-workouts specifically
                  designed for the Indian women's wellness market.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="11" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What flavours are available, and can I request custom ones?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We have standard flavours including Indian-market profiles
                  —lemon, fruit punch , watermelon, tangy orange, blueberry.
                  Custom flavour development is available — typically 10–14 days
                  for a new flavour sample.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="12" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Are your products Halal and Kosher certified?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Our facility holds both certifications — making your
                  products export-ready for the Middle East and Southeast Asia
                  from your very first batch. Certificate documentation ships
                  with every order.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="13" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What does a COA (Certificate of Analysis) include?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Every batch COA covers actual protein percentage verification,
                  microbiology (yeast, mould, E.coli, Salmonella), heavy metal
                  screening (arsenic, cadmium, lead), and identity confirmation
                  of key active ingredients. It tests the finished product — not
                  just the inputs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <NutritionFooter />
    </div>
  );
};

export default PerformanceSupplements;
