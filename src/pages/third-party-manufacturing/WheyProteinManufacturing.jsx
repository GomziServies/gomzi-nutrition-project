import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadPdf from "../../pdf/whey-protein.pdf";
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
  faShieldHalved,
  faBolt,
  faCheckCircle,
  faDroplet,
  faMedal,
  faGem,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/css/nutrition.css";

const KeyFeatures = ({ features, className = "" }) => (
  <div className={`wh-feat-grid ${className}`}>
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

const WheyProteinManufacturing = () => {
  const phoneNumber = "+918320077993";
  const baseMessage =
    "Hello, I have an inquiry about third-party manufacturing for";
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
      imageSrc: "/assets/images/third-party-manufacturing/whey-blend-new.webp",
      productName: "Whey Protein Blend",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Blend")}`,
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/third-party-manufacturing/whey-protein-new.webp",
      productName: "100% Whey Protein",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "100% Whey Protein")}`,
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/third-party-manufacturing/protein-isolate-new.webp",
      productName: "Whey Protein Isolate 90%",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Isolate 90%")}`,
    },
    {
      id: 4,
      imageSrc:
        "/assets/images/third-party-manufacturing/protein-concentrate-new.webp",
      productName: "Whey Protein Concentrate 80%",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Concentrate 80%")}`,
    },
  ];

  const logos = [
    {
      id: 1,
      imageSrc: "/assets/images/third-party-manufacturing/fassai.webp",
    },
    {
      id: 2,
      imageSrc: "/assets/images/third-party-manufacturing/gmp.webp",
    },
    {
      id: 3,
      imageSrc: "/assets/images/third-party-manufacturing/haccp.webp",
    },
    {
      id: 4,
      imageSrc: "/assets/images/third-party-manufacturing/halal.webp",
    },
    {
      id: 5,
      imageSrc: "/assets/images/third-party-manufacturing/kosher.webp",
    },
  ];

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder/#product",
      name: "Private Label Whey Protein Manufacturer in surat, India",
      image:
        "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/whey-100.png",
      description:
        "Gomzi Lifesciences is a leading whey protein manufacturer insurat,  India offering private label, white label, and third party manufacturing for sports nutrition brands. We provide custom formulations, bulk production, and certified supplement manufacturing services.",
      brand: {
        "@type": "Brand",
        name: "Gomzilifesciences",
      },
      manufacturer: {
        "@type": "Organization",
        "@id": "https://www.gomzilifesciences.in/#organization",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "53",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.gomzilifesciences.in/#organization",
      name: "Gomzilifesciences",
      url: "https://www.gomzilifesciences.in",
      logo: "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
      sameAs: [
        "https://www.facebook.com/Gomzilifesciences",
        "https://www.instagram.com/gomzi_lifesciences/",
        "https://www.linkedin.com/in/gomzi-lifesciences-423558312/",
        "https://www.youtube.com/@Gomzilifesciences",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 8320077993",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "gujrati"],
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder/#webpage",
      url: "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder",
      name: "Whey Protein Manufacturer in India | Private Label Supplement Manufacturing",
      description:
        "Explore private label whey protein manufacturing services in India. Gomzi Lifesciences offers custom formulations, contract manufacturing, and bulk production for sports nutrition brands.",
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.gomzilifesciences.in/#website",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder/#breadcrumb",
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
          name: "Protein Powder",
          item: "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Whey Protein Blend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whey Protein Blend is a formulation that combines different whey protein sources such as whey protein concentrate and whey protein isolate to achieve a balanced nutritional profile and optimized cost structure. It is commonly used in sports nutrition supplements and daily protein products.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Whey Protein Isolate and Whey Protein Concentrate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whey Protein Isolate 90% is a highly purified protein produced through advanced filtration processes that remove most fats and lactose, resulting in faster absorption. Whey Protein Concentrate 80% has a balanced nutritional composition and is one of the most widely used ingredients in sports nutrition supplements.",
          },
        },
        {
          "@type": "Question",
          name: "Who can start a whey protein brand with Gomzi Lifescience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our whey protein manufacturing services are suitable for gym owners, fitness trainers, sports nutrition brands, e-commerce sellers (Amazon, Flipkart, Shopify), athletes, sports professionals, and health and wellness entrepreneurs.",
          },
        },
        {
          "@type": "Question",
          name: "What certifications does Gomzi Lifescience hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All products are manufactured under certified quality systems including FSSAI, GMP, HACCP, HALAL, and Kosher standards.",
          },
        },
        {
          "@type": "Question",
          name: "What manufacturing capabilities does Gomzi Lifescience offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our facility supports custom whey protein formulations, private label supplement manufacturing, flavor customization, packaging and labeling, and bulk production for supplement brands.",
          },
        },
        {
          "@type": "Question",
          name: "Which whey protein is best for premium sports nutrition products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whey Protein Isolate 90% is preferred for premium and advanced sports nutrition products due to its high protein concentration, low lactose and fat content, and fast absorption rate.",
          },
        },
        {
          "@type": "Question",
          name: "What is 100% Whey Protein used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "100% Whey Protein formulations are widely used in gym nutrition products, fitness supplements, and athlete-focused protein powders. They are developed to support muscle recovery and daily protein intake requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get private label whey protein manufacturing in Surat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label whey protein manufacturing for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses.",
          },
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
      title: "Whey Protein Blend",
      target: "TARGET: MASS MARKET · D2C · BEGINNERS",
      description1:
        "Whey Protein Blend is a formulation that combines different whey protein sources such as whey protein concentrate and whey protein isolate to achieve a balanced nutritional profile and optimized cost structure.",
      description2:
        "This formulation is commonly used in sports nutrition supplements and daily protein products due to its balanced amino acid profile and smooth mixability.",
      features: [
        { icon: faChartBar, label: "Balanced protein formulation" },
        { icon: faDna, label: "Good amino acid profile" },
        {
          icon: faCalendarCheck,
          label: "Suitable for daily protein supplementation",
        },
        { icon: faTag, label: "Ideal for private label supplement brands" },
      ],
    },
    {
      id: 2,
      title: "Whey Protein",
      target: "TARGET: SERIOUS GYM-GOERS · ATHLETES",
      description1:
        "Whey Protein formulations typically contain high-quality whey protein ingredients designed for sports nutrition supplements. These products are developed to support muscle recovery and daily protein intake requirements.",
      description2:
        "They are widely used in gym nutrition products, fitness supplements, and athlete-focused protein powders.",
      features: [
        { icon: faStar, label: "High-quality whey protein formulation" },
        { icon: faTrophy, label: "Designed for sports nutrition products" },
        {
          icon: faHeartPulse,
          label: "Suitable for muscle recovery and daily protein intake",
        },
        {
          icon: faUsers,
          label: "Popular choice for fitness supplement brands",
        },
      ],
    },
    {
      id: 3,
      title: "Whey Protein Isolate",
      target: "TARGET: PREMIUM · LACTOSE-INTOLERANT · EXPORT",
      description1:
        "Whey Protein Isolate  is a highly purified whey protein produced through advanced filtration processes that remove most fats and lactose.",
      description2:
        "This gives results  with faster absorption, making it suitable for advanced sports nutrition products and professional athlete supplements.",
      features: [
        { icon: faDroplet, label: "Low lactose and fat content" },
        { icon: faBolt, label: "Fast absorption rate" },
        {
          icon: faMedal,
          label: "Ideal for premium sports nutrition supplements",
        },
      ],
    },
    {
      id: 4,
      title: "Whey Protein Concentrate ",
      target: "TARGET: BUDGET-CONSCIOUS · TIER 2/3 CITIES",
      description1:
        "Whey Protein Concentrate is one of the most widely used ingredients in sports nutrition supplements due to its balanced nutritional composition and FSSAI-compliant formulation whey components.",
      description2:
        "It provides a  content along with essential amino acids, making it suitable for general fitness supplements and protein powders.",
      features: [
        { icon: faShieldHalved, label: "Rich in essential amino acids" },
        { icon: faTrophy, label: "Suitable for sports nutrition products" },
        { icon: faMugHot, label: "Good taste and mixability" },
      ],
    },
  ];

  const facilitySupports = [
    "Custom whey protein formulations",
    "Private label supplement manufacturing",
    "Flavor customization",
    "Packaging and labeling",
    "Bulk production for supplement brands",
  ];

  const productSpecs = [
    {
      specification: "End-to-end brand launch partner",
      details: "Gomzi Lifescience LLP",
    },
    { specification: "Form", details: "Powder" },
    {
      specification: "Packaging Size",
      details: "Customizable (500 G, 1 KG, 2 KG or as required)",
    },
    {
      specification: "Packaging Type",
      details: "Jar / Pouch / Custom Packaging",
    },
    { specification: "Composition", details: "As Per Brand Requirement" },
    {
      specification: "Flavours",
      details:
        "Chocolate, Coffee, Mava Kulfi & Many More Custom Flavours Available",
    },
    { specification: "Shelf Life", details: "18 Months" },
    { specification: "Delivery Time", details: "15–20 working days" },
    {
      specification: "Product packaging",
      details: "Private Label & White Labelling Available",
    },
    {
      specification: "Certifications",
      details: "FSSAI, GMP, HACCP, HALAL, Kosher",
    },
  ];

  const comparisonData = {
    features: [
      "Protein Source",
      "Protein Concentration",
      "Lactose Content",
      "Fat Content",
      "Absorption Speed",
      "Cost Structure",
      "Best For",
      "Common Applications",
    ],
    products: [
      {
        name: "Whey Protein Blend",
        values: [
          "Combination of whey protein types",
          "Moderate",
          "Moderate",
          "Moderate",
          "Medium",
          "Economical",
          "Daily protein supplements",
          "Protein blends & daily nutrition",
        ],
      },
      {
        name: "Whey Protein",
        values: [
          "Whey protein based formulation",
          "High",
          "Moderate",
          "Low",
          "Medium to Fast",
          "Mid-range",
          "Fitness supplements",
          "Gym supplements",
        ],
      },
      {
        name: "Whey Protein Isolate ",
        values: [
          "Highly purified whey isolate",
          "Very High",
          "Very Low",
          "Very Low",
          "Fast",
          "Premium",
          "Advanced sports nutrition",
          "Premium athlete products",
        ],
      },
      {
        name: "Whey Protein Concentrate",
        values: [
          "Whey protein concentrate",
          "High",
          "Moderate",
          "Moderate",
          "Medium",
          "Mid-range",
          "General sports nutrition",
          "Protein powders",
        ],
      },
    ],
  };

  return (
    <div className="tpm-bg">
      <PageMeta
        title="Private Label Whey Protein Manufacturer in Surat, India | Gomzi Lifescience"
        description="Gomzi Lifesciences LLP is a private label whey protein manufacturer in Surat, India. Custom formulations, bulk production, FSSAI, GMP, HACCP, HALAL and Kosher certified."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <NutritionHeader />

      <div className="protein-powder-banner">
        <img
          src="/assets/images/third-party-manufacturing/whey-protein.webp"
          alt="Whey Protein Manufacturer Banner"
          className="protein-powder-banner-image desktop-banner"
        />
        <img
          src="/assets/images/third-party-manufacturing/whey-protein-banner.webp"
          alt="Whey Protein Manufacturer Banner"
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
                className="download-brochure barlow-condensed-semi f-18"
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
            Private Label Whey Protein End-to-End Brand Launch Partner <br /> in
            Surat, Gujarat
          </h1>

          <div className="whey-protein-div-main">
            <div>
              <p className="wh-desc inter-regular">
                Gomzi Lifesciences LLP specializes in manufacturing high-quality
                whey protein supplements for sports nutrition brands, gym
                owners, fitness trainers, athletes, and e-commerce businesses.
              </p>
              <p className="wh-desc inter-regular">
                Our manufacturing facility supports custom formulations, private
                labeling, and bulk production for whey protein products designed
                for performance nutrition and daily protein supplementation.
              </p>
              <p className="wh-desc inter-regular">
                All products are manufactured under certified quality systems
                including <strong>FSSAI, GMP, HACCP, HALAL and Kosher</strong>{" "}
                standards.
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
              Our Whey Protein Product Categories
            </h2>
            <p className="wh-sec-desc-whey-protein inter-regular">
              We manufacture different whey protein formulations depending on
              protein concentration, filtration process, and intended
              application in sports nutrition products.
            </p>

            <div className="wh-cat-list">
              {productCategories.map((category) => (
                <div key={category.id} className="wh-cat-row-item">
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
                      {category.description1}
                    </p>
                    <p className="wh-cat-desc inter-regular">
                      {category.description2}
                    </p>
                    <span className="wh-kf-label inter-500">Key Features</span>
                    <KeyFeatures
                      className="inter-500 center-fix"
                      features={category.features}
                    />
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
              <strong>A Protein-Deficient Nation Waking Up.</strong>
            </p>
            <div className="market-cards-section">
              <div className="market-cards-container">
                <div className="market-card">
                  <h3 className="barlow-condensed-semi">46%</h3>
                  <p className="inter-regular">
                    Of Indians are <strong>protein deficient.</strong> A
                    documented, growing health crisis that creates massive
                    long-term demand for accessible, trusted protein brands.
                  </p>
                </div>

                <div className="market-card">
                  <h3 className="barlow-condensed-semi">267M</h3>
                  <p className="inter-regular">
                    India's whey protein market — growing fast as fitness
                    culture moves beyond metros into Tier 2 and Tier 3 cities.
                    <strong>
                      {" "}
                      The next wave of protein buyers is already there.
                    </strong>
                  </p>
                </div>

                <div className="market-card">
                  <h3 className="barlow-condensed-semi">3X</h3>
                  <p className="inter-regular">
                    Growth in online protein supplement searches since 2020.
                    <strong> First-time buyers</strong> are entering the
                    category — they'll be loyal to the brand they start with.
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
            <h2 className="wh-sec-title barlow-condensed-semi">
              Who Can Start a Whey Protein Brand With Us?
            </h2>
            <p className="wh-sec-desc inter-500">
              <strong>
                Our whey protein manufacturing services are suitable for:
              </strong>
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
                <div key={i} className="wh-who-card">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="inter-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              Product Specifications
            </h2>

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
            <h2 className="wh-sec-title barlow-condensed-semi">
              Whey Protein Comparison
            </h2>
            <p className="wh-sec-desc inter-regular">
              To help supplement brands, gym owners, and fitness businesses
              choose the right formulation, below is a comparison between
              different whey protein types manufactured at{" "}
              <strong>Gomzi Lifesciences LLP</strong>.
            </p>
            <div className="wh-cmp-wrap">
              <table className="wh-cmp-tbl">
                <thead>
                  <tr>
                    <th>Feature</th>
                    {comparisonData.products.map((p, i) => (
                      <th key={i}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.features.map((feature, rowIdx) => (
                    <tr key={rowIdx}>
                      <td>{feature}</td>
                      {comparisonData.products.map((p, colIdx) => (
                        <td key={colIdx}>{p.values[rowIdx]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              How to Choose the Right Whey Protein Type?
            </h2>
            <p className="wh-sec-desc inter-regular">
              Different whey protein formulations are selected based on the
              ideal customer, formulation requirements, and desired protein
              concentration.
            </p>
            <ul className="wh-choose-list">
              {[
                {
                  bold: "Whey Protein Blend",
                  rest: " is commonly used in balanced sports nutrition formulations.",
                },
                {
                  bold: "Whey Protein",
                  rest: " is widely used for general fitness supplements.",
                },
                {
                  bold: "Whey Protein Isolate",
                  rest: " is preferred for premium and advanced sports nutrition products.",
                },
                {
                  bold: "Whey Protein Concentrate ",
                  rest: " is one of the most commonly used whey protein ingredients in protein powders.",
                },
              ].map((item, i) => (
                <li key={i} className="wh-choose-item inter-regular">
                  <div className="wh-choose-n ">{i + 1}</div>
                  <span>
                    <strong>{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
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
                    title: "Idea & Brief",
                    desc: "Product type (WPC/WPI/blend), flavours, pack size, and brand positioning confirmed.",
                    days: "1–2 DAYS",
                  },
                  {
                    id: "02",
                    title: "Formulation",
                    desc: "Sample batch produced in GMP facility. Flavour development and mixability testing.",
                    days: "5–7 DAYS",
                  },
                  {
                    id: "03",
                    title: "Manufacturing",
                    desc: "Full production batch with Batch COA. Third-party lab testing available.",
                    days: "5–7 DAYS",
                  },
                  {
                    id: "04",
                    title: "Packaging",
                    desc: "Label artwork, 3D pouch/tub mockup, FSSAI compliance check. Digiprint or flexo.",
                    days: "3–4 DAYS",
                  },
                  {
                    id: "05",
                    title: "Dispatch",
                    desc: "D2C Shopify store optionally live. Product dispatched. Your brand is on the market.",
                    days: "1–2 DAYS",
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

        <section class="qua-wh-section" id="certification">
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
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              Manufacturing Capability
            </h2>
            <p className="wh-sec-desc inter-regular">
              At Gomzi Lifesciences LLP, we provide manufacturing solutions for
              all major whey protein formulations used in the sports nutrition
              industry.
            </p>
            <div className="wh-mfg-grid">
              <div>
                <p className="wh-mfg-left-title inter-500">
                  Our facility supports:
                </p>

                <div className="section-indent">
                  <ul className="mfg-timeline">
                    {facilitySupports.map((item, idx) => (
                      <li key={idx} className="mfg-timeline-item inter-500">
                        <div className="mfg-timeline-number">{idx + 1}</div>
                        <div className="mfg-timeline-content">{item}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="wh-cert-panel">
                <div className="wh-cert-panel-title inter-500">
                  Certified Quality Standards
                </div>
                <div className="wh-cert-panel-sub inter-regular">
                  All products are manufactured under certified systems
                  includings:
                </div>

                <div className="wh-cert-row">
                  <div className="logo-src">
                    {logos.map((logo, i) => (
                      <img key={i} src={logo.imageSrc} alt="logo" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  What is Whey Protein Blend?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Whey Protein Blend is a mix of different whey sources, such as
                  whey protein concentrate and whey protein isolate, designed to
                  balance nutrition and cost. It is commonly used in sports
                  nutrition and daily protein products.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the difference between Whey Protein Isolate and Whey
                  Protein Concentrate?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Whey Protein Isolate 90% is more refined, with higher protein
                  and lower fat and lactose. Whey Protein Concentrate 80% offers
                  a balanced profile and is often used for cost-effective
                  protein formulations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Who can start a whey protein brand with Gomzi Life Sciences?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Gym owners, fitness trainers, sports nutrition brands,
                  e-commerce sellers, athletes, and wellness entrepreneurs can
                  start a whey protein brand with us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What certifications does Gomzi Life Sciences hold?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Our products are manufactured under quality systems including
                  FSSAI, GMP, HACCP, Halal, and Kosher standards.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What manufacturing capabilities does Gomzi Life Sciences
                  offer?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We offer custom whey protein formulations, private label
                  manufacturing, flavor customization, packaging, labeling, and
                  bulk production.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Which whey protein is best for premium sports nutrition
                  products?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Whey Protein Isolate 90% is preferred for premium sports
                  nutrition products because it offers high protein content, low
                  lactose, and fast absorption.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can I get private label whey protein manufacturing in Surat?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Gomzi Life Sciences LLP is based in Surat and provides
                  private label whey protein manufacturing for brands and
                  entrepreneurs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can I get the product tested by my own third-party lab?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes, third-party lab testing can be arranged, and you may also
                  use your own preferred lab for verification.{" "}
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

export default WheyProteinManufacturing;
