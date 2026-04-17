import "../../assets/css/thirdParty.css";
import { useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadPdf from "../../pdf/multivitamin-tablet.pdf";
import {
  faShieldHalved,
  faBolt,
  faHeartPulse,
  faLeaf,
  faStar,
  faTrophy,
  faUsers,
  faFlask,
  faBoxOpen,
  faCheckCircle,
  faCapsules,
  faMicroscope,
  faIndustry,
  faTag,
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

const NutritionTableWithReadMore = ({
  data,
  col1Key,
  col2Key,
  col1Label,
  col2Label,
  initialRows = 10,
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleData = expanded ? data : data.slice(0, initialRows);
  return (
    <div className="wh-tbl-wrap">
      <table className="wh-spec-tbl">
        <thead>
          <tr>
            <th>{col1Label}</th>
            <th>{col2Label}</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((row, idx) => (
            <tr key={idx}>
              <td>{row[col1Key]}</td>
              <td>{row[col2Key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > initialRows && (
        <div className="read-more-less-div">
          <button
            onClick={() => setExpanded(!expanded)}
            className="read-more-less-btn"
            onMouseOver={(e) => (e.currentTarget.style.background = "#6aa82e")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#86c33a")}
          >
            {expanded
              ? "Read Less ▲"
              : `Read More ▼ (${data.length - initialRows} more)`}
          </button>
        </div>
      )}
    </div>
  );
};
const testimonials = [
  {
    text: "Gomzi Life Science is a very good work, I have also made this product and they provide very good quality, they do not compromise on quality, moreover they provide timely delivery, if you want to join them then you can join, I have a positive review, thank you gomzi life science and especially Gautam sir is very good, thank you Gautam sir",
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

const MultivitaminTablet = () => {
  const phoneNumber = "+918866842520";
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
      imageSrc:
        "/assets/images/third-party-manufacturing/advanced-multivitamin.webp",
      productName: "Advanced Multivitamin Formulation",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Advanced Multivitamin Formulation Tablet")}`,
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/third-party-manufacturing/complete-third-party.webp",
      productName: "Complete Third Party Manufacturing Services",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Complete Third Party Manufacturing Services Tablet")}`,
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/third-party-manufacturing/general-wellness.webp",
      productName: "General Wellness Multivitamin",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "General Wellness Multivitamin Tablet")}`,
    },
    {
      id: 4,
      imageSrc: "/assets/images/third-party-manufacturing/immune-support.webp",
      productName: "Immune Support & Active Lifestyle Multivitamin",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Immune Support & Active Lifestyle Multivitamin Tablet")}`,
    },
  ];

  const schemaData = [
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/multivitamins-tablet/#product",
      name: "Multivitamin Tablet Manufacturer in India | Private Label Nutraceutical Manufacturing",
      image:
        "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/multivitamin-general.png",
      description:
        "Gomzi Lifescience LLP offers complete multivitamin tablet manufacturing services in India, including custom formulation, private label nutraceutical manufacturing, packaging, and bulk production. FSSAI and GMP certified facility.",
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
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Form",
          value: "Tablet",
        },
        {
          "@type": "PropertyValue",
          name: "Packaging",
          value: "HDPE Bottle, Blister Pack, Strip Packaging",
        },
        {
          "@type": "PropertyValue",
          name: "Shelf Life",
          value: "24 Months",
        },
        {
          "@type": "PropertyValue",
          name: "Certifications",
          value: "FSSAI, GMP",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/multivitamins-tablet/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum order quantity for multivitamin tablet manufacturing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimum order quantities depend on the formulation and packaging requirements. We offer flexible production options suitable for both startups and established supplement brands.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide private label multivitamin manufacturing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our services include complete private label supplement manufacturing, including formulation development, production, packaging, and labeling.",
          },
        },
        {
          "@type": "Question",
          name: "Can you create custom multivitamin formulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our R&D team can develop customized multivitamin formulations based on the nutritional requirements and target market of your brand.",
          },
        },
        {
          "@type": "Question",
          name: "Are your supplements manufactured according to regulatory guidelines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our manufacturing facility follows FSSAI guidelines and GMP quality standards to ensure product safety and compliance.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/multivitamins-tablet/#breadcrumb",
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
          name: "Multivitamin Tablets",
          item: "https://www.gomzilifesciences.in/third-party-manufacturing/multivitamins-tablet",
        },
      ],
    },
  ];

  const nutritionData = [
    { nutrient: "Vitamin A", amount: "1000 IU" },
    { nutrient: "Vitamin C", amount: "80 mg" },
    { nutrient: "Vitamin D3", amount: "10 mcg" },
    { nutrient: "Vitamin E", amount: "10 mg" },
    { nutrient: "Vitamin K2", amount: "55 mcg" },
    { nutrient: "Thiamine (Vitamin B1)", amount: "1.4 mg" },
    { nutrient: "Riboflavin (Vitamin B2)", amount: "2 mg" },
    { nutrient: "Niacin", amount: "14 mg" },
    { nutrient: "Vitamin B6", amount: "2 mg" },
    { nutrient: "Vitamin B12", amount: "2.2 mcg" },
    { nutrient: "Folate", amount: "300 mcg" },
    { nutrient: "Biotin", amount: "40 mcg" },
    { nutrient: "Pantothenic Acid", amount: "5 mg" },
    { nutrient: "Calcium", amount: "160 mg" },
    { nutrient: "Magnesium", amount: "145 mg" },
    { nutrient: "Zinc", amount: "13.3 mg" },
    { nutrient: "Iron", amount: "15 mg" },
    { nutrient: "Copper", amount: "1 mg" },
    { nutrient: "Iodine", amount: "140 mcg" },
    { nutrient: "Selenium", amount: "40 mcg" },
    { nutrient: "Chromium", amount: "50 mcg" },
    { nutrient: "Potassium", amount: "35 mg" },
    { nutrient: "Sodium", amount: "40 mg" },
    { nutrient: "Manganese", amount: "2.2 mg" },
    { nutrient: "Molybdenum", amount: "10 mcg" },
    { nutrient: "Boron", amount: "2 mg" },
    { nutrient: "L-Leucine", amount: "50 mg" },
    { nutrient: "L-Isoleucine", amount: "25 mg" },
    { nutrient: "L-Glutamine", amount: "25 mg" },
    { nutrient: "L-Lysine", amount: "30 mg" },
    { nutrient: "Grape Seed Extract", amount: "50 mg" },
    { nutrient: "Turmeric Extract", amount: "50 mg" },
    { nutrient: "Amla Extract", amount: "25 mg" },
    { nutrient: "Choline", amount: "10 mg" },
    { nutrient: "Inositol", amount: "10 mg" },
    { nutrient: "Coenzyme Q10", amount: "30 mg" },
    { nutrient: "Amylase", amount: "5 mg" },
    { nutrient: "Papain", amount: "5 mg" },
  ];

  const vitaminsData = [
    { vitamin: "Vitamin A", benefit: "Supports vision and immune health" },
    { vitamin: "Vitamin C", benefit: "Powerful antioxidant for immunity" },
    {
      vitamin: "Vitamin D3",
      benefit: "Supports bone health and calcium absorption",
    },
    { vitamin: "Vitamin E", benefit: "Protects cells from oxidative stress" },
    {
      vitamin: "Vitamin K2",
      benefit: "Supports bone and cardiovascular health",
    },
    {
      vitamin: "Vitamin B Complex",
      benefit: "Helps improve metabolism and energy production",
    },
  ];

  const mineralsData = [
    { mineral: "Calcium", benefit: "Helps maintain strong bones and teeth" },
    { mineral: "Magnesium", benefit: "Supports muscle and nerve function" },
    { mineral: "Zinc", benefit: "Supports immune system health" },
    { mineral: "Iron", benefit: "Helps transport oxygen in the body" },
    { mineral: "Selenium", benefit: "Provides antioxidant protection" },
    { mineral: "Chromium", benefit: "Supports metabolic health" },
  ];

  const aminoAcidsData = [
    { ingredient: "L-Leucine", benefit: "Supports muscle health" },
    { ingredient: "L-Glutamine", benefit: "Helps tissue repair" },
    {
      ingredient: "Grape Seed Extract",
      benefit: "Powerful antioxidant support",
    },
    { ingredient: "Turmeric Extract", benefit: "Helps reduce inflammation" },
    { ingredient: "Coenzyme Q10", benefit: "Supports heart and energy health" },
  ];

  const keyBenefits = [
    "Supports immune system health",
    "Improves energy levels and metabolism",
    "Promotes bone and muscle health",
    "Supports heart health",
    "Helps maintain healthy skin and hair",
    "Helps reduce nutritional deficiencies",
  ];

  const manufacturingServices = [
    "Custom multivitamin formulation development",
    "Private label multivitamin manufacturing",
    "Bulk nutraceutical supplement manufacturing",
    "Product packaging and labeling",
    "Regulatory documentation support",
  ];

  const productCategories = [
    {
      id: 1,
      title: "Advanced Multivitamin Formulation",
      description1:
        "As a trusted multivitamin tablet manufacturer, we develop advanced formulations that combine essential vitamins, minerals, amino acids, herbal extracts, and antioxidants.",
      description2:
        "Our scientifically designed formulations help support immunity, energy metabolism, and overall wellness, produced using carefully selected raw materials and advanced manufacturing processes.",
      features: [
        { icon: faFlask, label: "Custom nutraceutical formulation support" },
        { icon: faMicroscope, label: "Scientifically designed compositions" },
        { icon: faShieldHalved, label: "Supports immunity and energy" },
        { icon: faLeaf, label: "High-quality raw materials" },
      ],
    },
    {
      id: 2,
      title: "Complete Third Party Manufacturing Services",
      description1:
        "We provide complete multivitamin third party manufacturing services for nutraceutical brands, pharmaceutical companies, and healthcare startups.",
      description2:
        "Our company offers reliable contract manufacturing for multivitamin supplements, helping brands launch their own products in the market.",
      features: [
        { icon: faIndustry, label: "Large-scale production capacity" },
        { icon: faTag, label: "Private label supplement manufacturing" },
        { icon: faBoxOpen, label: "Flexible packaging and labeling" },
        { icon: faCheckCircle, label: "Regulatory documentation support" },
      ],
    },
    {
      id: 3,
      title: "General Wellness Multivitamin",
      description1:
        "Our general wellness multivitamin tablets are formulated with a comprehensive blend of essential vitamins, minerals, amino acids, antioxidants, and herbal extracts to support overall health.",
      description2:
        "Suitable for daily use, these tablets are designed for supplement brands targeting general wellness and preventive healthcare markets.",
      features: [
        { icon: faHeartPulse, label: "Supports overall daily health" },
        { icon: faBolt, label: "Improves energy and metabolism" },
        { icon: faStar, label: "Comprehensive nutrient blend" },
        { icon: faUsers, label: "Ideal for wellness supplement brands" },
      ],
    },
    {
      id: 4,
      title: "Immune Support & Active Lifestyle Multivitamin",
      description1:
        "Our immune support and active lifestyle multivitamin formulations are developed for supplement brands targeting fitness enthusiasts, athletes, and health-conscious consumers.",
      description2:
        "These formulations include carefully selected vitamins, minerals, and antioxidants to support immune defense and active daily nutrition requirements.",
      features: [
        { icon: faShieldHalved, label: "Targeted immune support formula" },
        { icon: faTrophy, label: "Designed for active lifestyle brands" },
        { icon: faCapsules, label: "High bioavailability formulation" },
        {
          icon: faCheckCircle,
          label: "Suitable for fitness supplement brands",
        },
      ],
    },
  ];

  const productSpecs = [
    { specification: "Manufacturer", details: "Gomzi Lifescience LLP" },
    { specification: "Form", details: "Tablet" },
    {
      specification: "Packaging Size",
      details: "Customizable (30 tabs, 60 tabs, 90 tabs or as required)",
    },
    {
      specification: "Packaging Type",
      details: "HDPE Bottle / Blister Pack / Strip Packaging",
    },
    { specification: "Composition", details: "As Per Brand Requirement" },
    { specification: "Shelf Life", details: "24 Months" },
    { specification: "Delivery Time", details: "15–20 Days" },
    {
      specification: "Branding",
      details: "Private Label & White Labelling Available",
    },
    { specification: "Certifications", details: "FSSAI, GMP" },
    {
      specification: "Applications",
      details: "General Wellness, Immunity, Daily Nutrition, Active Lifestyle",
    },
  ];

  const whyChooseUs = [
    "Advanced multivitamin formulations",
    "Experienced nutraceutical R&D team",
    "Competitive third party manufacturing cost",
    "Reliable private label supplement manufacturing",
    "Large-scale production capacity",
  ];

  return (
    <div className="tpm-bg">
      <PageMeta
        title="Multivitamin Tablet Manufacturer in India | Private Label Nutraceutical Manufacturing"
        description="We offer complete multivitamin tablet third party manufacturing services for nutraceutical brands, pharmaceutical companies, and healthcare startups. Custom formulations, private label manufacturing, FSSAI and GMP certified."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <NutritionHeader />

      <div className="protein-powder-banner">
        <img
          className="protein-powder-banner-image desktop-banner"
          src="/assets/images/third-party-manufacturing/multivitamin-banner.webp"
          alt="Multivitamin Tablet Manufacturer Banner"
        />
        <img
          src="/assets/images/third-party-manufacturing/multivitamin-banner-mobile.webp"
          alt="Multivitamin Tablet Manufacturer Banner"
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
                className="download-brochure"
              >
                Download Our Brochure
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/918320077993?text=Hello%20I%20am%20interested%20in%20Protein%20Powders"
                target="_blank"
                rel="noreferrer"
                className="download-brochure"
              >
                Enquiry Now
              </a>
            </div>
            <div>
              <a
                href="tel:+918320077993"
                target="_blank"
                rel="noreferrer"
                className="download-brochure"
              >
                Call To Our Expert Team
              </a>
            </div>
          </div>

          <h1 className="wh-page-title">
            Private Label Multivitamin Tablet Manufacturer <br /> In Surat,
            India
          </h1>

          <h2 className="wh-sec-title-multi multivitamin-subtext">
            Complete Multivitamin Tablet Manufacturing Solutions for
            Nutraceutical Brands
          </h2>

          <div className="whey-protein-div-main">
            <div className="whey-protein-div-text-multivitamin">
              <p className="wh-desc">
                Multivitamin supplements are among the most popular
                nutraceutical products worldwide due to increasing awareness
                about preventive healthcare and nutritional deficiencies.
                Multivitamins provide a balanced combination of vitamins,
                minerals, antioxidants, and other essential nutrients that
                support overall wellness.
              </p>
              <p className="wh-desc">
                Our company offers multivitamin third party manufacturing
                services for nutraceutical brands, pharmaceutical companies,
                healthcare startups, and supplement distributors looking to
                launch their own private label products.
              </p>
              <p className="wh-desc">
                With advanced infrastructure, experienced R&D teams, and
                high-quality raw materials, we provide custom multivitamin
                formulation, manufacturing, packaging, and private label
                solutions for domestic and international markets.
              </p>
            </div>
            <div className="blog blog-multivitamin p-0">
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
            <h2 className="wh-sec-title-our-whey-protein">
              Our Multivitamin Manufacturing Solution
            </h2>

            <p className="wh-sec-desc-whey-protein">
              We manufacture different multivitamin formulations depending on
              the target health segment , nutritional requirements and intended
              application.
            </p>

            <div className="wh-cat-list">
              {productCategories.map((category) => (
                <div key={category.id} className="wh-cat-row-item">
                  <div className="wh-cat-row-header wh-cat-row-header-top">
                    <div className="wh-cat-num">{category.id}</div>
                    <div className="wh-cat-title">{category.title}</div>
                  </div>

                  <div className="wh-cat-row-left">
                    <p className="wh-cat-desc">{category.description1}</p>
                    <p className="wh-cat-desc">{category.description2}</p>
                    <span className="wh-kf-label">Key Features</span>
                    <KeyFeatures features={category.features} />
                  </div>
                  <div className="wh-prod-card">
                    <img
                      src={products[category.id - 1]?.imageSrc}
                      alt={category.title}
                      className="wh-cat-row-img"
                    />
                    <div className="wh-prod-card-btn">
                      <a
                        href={products[category.id - 1]?.productLink}
                        className="wh-prod-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquiry Now
                      </a>
                      <a
                        href="tel:+918320077993"
                        className="wh-prod-btn"
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
            <h2 className="wh-sec-title">
              Nutritional Composition of Multivitamin Tablets
            </h2>
            <p className="wh-sec-desc">
              Our multivitamin tablets are formulated with a comprehensive blend
              of essential vitamins, minerals, amino acids, antioxidants, and
              herbal extracts to support overall health and wellness. The
              following table shows the nutritional composition per tablet.
            </p>
            <NutritionTableWithReadMore
              data={nutritionData}
              col1Key="nutrient"
              col2Key="amount"
              col1Label="Nutrient"
              col2Label="Amount Per Tablet"
              initialRows={10}
            />

            <h3 className="wh-sec-sub">Essential Vitamins</h3>
            <p className="wh-body-text">
              Our multivitamin tablets contain important vitamins that support
              daily nutritional needs and overall health.
            </p>
            <NutritionTableWithReadMore
              data={vitaminsData}
              col1Key="vitamin"
              col2Key="benefit"
              col1Label="Vitamin"
              col2Label="Key Benefit"
              initialRows={10}
            />
            <p className="wh-body-text">
              These essential vitamins make our product suitable for brands
              looking for high-quality multivitamin supplement manufacturing.
            </p>

            <h3 className="wh-sec-sub">Essential Minerals</h3>
            <p className="wh-body-text">
              Minerals are equally important for maintaining metabolic balance,
              nerve function, and bone strength. Our formulations include
              carefully balanced mineral blends that complement the vitamin
              profile.
            </p>
            <NutritionTableWithReadMore
              data={mineralsData}
              col1Key="mineral"
              col2Key="benefit"
              col1Label="Mineral"
              col2Label="Health Benefit"
              initialRows={10}
            />
            <p className="wh-body-text">
              Balanced mineral composition ensures optimal nutrient absorption
              and nutritional effectiveness.
            </p>

            <h3 className="wh-sec-sub">Amino Acids and Antioxidants</h3>
            <p className="wh-body-text">
              To improve the nutritional value of our multivitamin supplements,
              the formulation also includes amino acids and antioxidants.
            </p>
            <NutritionTableWithReadMore
              data={aminoAcidsData}
              col1Key="ingredient"
              col2Key="benefit"
              col1Label="Ingredient"
              col2Label="Benefit"
              initialRows={10}
            />
            <p className="wh-body-text">
              These ingredients enhance the effectiveness of the multivitamin
              formulation and support overall vitality.
            </p>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title">Benefits of Multivitamin Tablets</h2>
            <p className="wh-sec-desc">
              Our multivitamin tablets are designed to support daily nutritional
              needs and overall wellness.
            </p>
            <h3 className="wh-sec-sub">Key Benefits</h3>
            <div className="wh-grid-3">
              {keyBenefits.map((benefit, idx) => (
                <div key={idx} className="wh-grid-item">
                  <span className="wh-grid-check">➤</span>
                  {benefit}
                </div>
              ))}
            </div>
            <p className="wh-body-text point">
              These benefits make our products ideal for brands looking for
              nutraceutical multivitamin supplement manufacturing.
            </p>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title">
              Multivitamin Third Party Manufacturing Services
            </h2>
            <p className="wh-sec-desc">
              We provide complete multivitamin third party manufacturing
              services for nutraceutical brands, pharmaceutical companies, and
              healthcare startups.
            </p>
            <p className="wh-body-text">
              Our company offers reliable contract manufacturing for
              multivitamin supplements, helping brands launch their own products
              in the market.
            </p>
            <h3 className="wh-sec-sub">Our Services Include:</h3>

            <div className="section-indent">
              <ul className="mfg-timeline">
                {manufacturingServices.map((item, idx) => (
                  <li key={idx} className="mfg-timeline-item">
                    <div className="mfg-timeline-number">{idx + 1}</div>
                    <div className="mfg-timeline-content">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="wh-body-text point ">
              As an experienced multivitamin tablet manufacturer, we help
              businesses develop high-quality dietary supplements under their
              own brand name.
            </p>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title">Packaging Options</h2>
            <p className="wh-sec-desc">
              We provide flexible packaging solutions for multivitamin tablets
              and nutraceutical supplements.
            </p>
            <h3 className="wh-sec-sub">Available Packaging Options:</h3>
            <div className="wh-grid-3 point">
              {[
                { text: "HDPE bottles", icon: "fa-bottle-water" },
                { text: "Blister packs", icon: "fa-tablets" },
                { text: "Strip packaging", icon: "fa-grip-lines" },
              ].map((item, idx) => (
                <div key={idx} className="wh-grid-item">
                  <span className="wh-grid-check">
                    <i
                      className={`fas ${item.icon}`}
                      style={{ color: "#86c33a" }}
                    ></i>
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
            <p className="wh-body-text">
              Our packaging solutions support brands looking for private label
              multivitamin supplements.
            </p>
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
          <div className="wh-container">
            <h2 className="wh-sec-title">Quality Standards</h2>
            <p className="wh-sec-desc">
              As a reliable nutraceutical manufacturing company, we follow
              strict quality control standards to ensure product safety and
              effectiveness.
            </p>
            <div className="wh-grid-2">
              {[
                { text: "FSSAI compliant manufacturing", icon: "fa-landmark" },
                {
                  text: "GMP certified production facility",
                  icon: "fa-industry",
                },
                { text: "High-quality raw ingredients", icon: "fa-leaf" },
                { text: "Third-party quality testing", icon: "fa-flask" },
              ].map((item, idx) => (
                <div key={idx} className="wh-grid-item">
                  <span className="wh-grid-check">
                    <i
                      className={`fas ${item.icon}`}
                      style={{ color: "#86c33a" }}
                    ></i>
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
            <p className="wh-body-text">
              These standards make us a trusted multivitamin tablet manufacturer
              in India.
            </p>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title">
              Applications of Multivitamin Tablets
            </h2>
            <p className="wh-sec-desc">
              Multivitamin supplements are used across multiple health and
              wellness segments.
            </p>
            <strong className="this-include ">
              Common applications include:
            </strong>
            <div className="wh-grid-2">
              {[
                {
                  text: "General wellness supplements",
                  icon: "fa-spa",
                },
                { text: "Daily nutrition products", icon: "fa-apple-whole" },
                {
                  text: "Immune support formulations",
                  icon: "fa-shield-virus",
                },
                {
                  text: "Active lifestyle and fitness supplements",
                  icon: "fa-dumbbell",
                },
              ].map((item, idx) => (
                <div key={idx} className="wh-grid-item">
                  <span className="wh-grid-check">
                    <i
                      className={`fas ${item.icon}`}
                      style={{ color: "#86c33a" }}
                    ></i>
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title">
              Who Can Launch Multivitamin Brands?
            </h2>
            <p className="wh-sec-desc">
              Our manufacturing solutions are suitable for a wide range of
              businesses entering the dietary supplement market.
            </p>
            <strong className="this-include ">These include:</strong>
            <div className="wh-who-grid">
              {[
                "Nutraceutical startups",
                "Fitness and wellness brands",
                "Pharmaceutical companies",
                "Healthcare distributors",
                "Online supplement businesses",
              ].map((item, i) => (
                <div key={i} className="wh-who-card">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <div className="whey-protein-div-main">
              <div className="whey-protein-div-text-multivitamin">
                <h2 className="wh-sec-title">
                  Why Choose Us as Your Multivitamin Manufacturer?
                </h2>
                <div className="section-indent">
                  <ul className="mfg-timeline">
                    {whyChooseUs.map((item, idx) => (
                      <li key={idx} className="mfg-timeline-item">
                        <div className="mfg-timeline-number">{idx + 1}</div>
                        <div className="mfg-timeline-content">{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="blog-multivitamin p-0">
                <img
                  src="/assets/images/nutrition/white-labelling-vision-001.webp"
                  alt="Gomzi Lifesciences"
                  className="illustration-image illustration-image-why-choose-us  pb-5 pb-md-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <section className="testi-section">
            <div className="testimonial-div">
              <h2 className="wh-sec-title-our-whey-protein">Testimonials</h2>
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
                      <p className="testi-text">{item.text}</p>
                    </div>
                    <div className="testi-author">
                      <div className="testi-author-dot">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="testi-name">{item.name}</p>
                        <p className="testi-role">{item.role}</p>
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
            <h2 className="wh-sec-title">FAQ's</h2>

            <Accordion defaultActiveKey={["1"]} alwaysOpen>
              <Accordion.Item eventKey="1" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the minimum order quantity for multivitamin tablet
                  manufacturing?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Minimum order quantities depend on the formulation and
                  packaging requirements. We offer flexible production options
                  suitable for both startups and established supplement brands.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Do you provide private label multivitamin manufacturing?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Our services include complete private label supplement
                  manufacturing, including formulation development, production,
                  packaging, and labeling.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can you create custom multivitamin formulations?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Our R&D team can develop customized multivitamin
                  formulations based on the nutritional requirements and target
                  market of your brand.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Are your supplements manufactured according to regulatory
                  guidelines?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Our manufacturing facility follows FSSAI guidelines and
                  GMP quality standards to ensure product safety and compliance.
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

export default MultivitaminTablet;
