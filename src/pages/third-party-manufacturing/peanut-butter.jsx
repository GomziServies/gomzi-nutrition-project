import React, { useState } from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// const KeyFeatures = ({ features, className = "" }) => (
//   <div className={`wh-feat-grid ${className}`}>
//     {features.map((feature, index) => (
//       <div key={index} className="wh-feat-item">
//         <span className="wh-feat-text">{feature.label}</span>
//       </div>
//     ))}
//   </div>
// );

const productCategories = [
  {
    id: 1,
    title: "Natural Smooth Peanut Butter",
    target: "TARGET : HEALTH-CONSCIOUS · CLEAN LABEL BUYERS",
    description1:
      "100% peanuts, no added sugar, no palm oil. High protein, natural oils. ",
    description2:
      " The purest form - top choice for gym-goers and keto dieters.",

    flavours: [
      {
        label: "Chocolate Smooth",
        image:
          "/assets/images/third-party-manufacturing/chocolate-smooth peanut-butter.webp",
        name: "Chocolate Smooth Peanut Butter",
      },
      {
        label: "Classic Smooth",
        image:
          "/assets/images/third-party-manufacturing/classic-smooth peanut-butter.webp",
        name: "Classic Smooth Peanut Butter",
      },
      {
        label: "Cardamom (Elaichi) Smooth",
        image:
          "/assets/images/third-party-manufacturing/cardamom-elaichi-smooth peanut-butter.webp",
        name: "Cardamom (Elaichi) Smooth Peanut Butter",
      },
    ],
  },
  {
    id: 2,
    title: "Natural Crunch Peanut Butter",
    target: "TARGET : TEXTURE LOVERS · FITNESS BRANDS",
    description1:
      "Same clean natural formula with peanut bits for added texture. ",
    description2: " Popular with athletes who prefer crunch over smooth.",

    flavours: [
      {
        label: "Chocolate Crunch",
        image:
          "/assets/images/third-party-manufacturing/chocolate crunch peanut butter.webp",
        name: "Chocolate Crunch Peanut Butter",
      },
      {
        label: "Classic Crunch",
        image:
          "/assets/images/third-party-manufacturing/classic-crunch peanut-butter.webp",
        name: "Classic Crunch Peanut Butter",
      },
      {
        label: "Cardamom (Elaichi) Crunch",
        image:
          "/assets/images/third-party-manufacturing/cardamom-elaichi-crunch-peanut-butter.webp",
        name: "Cardamom (Elaichi) Crunch Peanut Butter",
      },
    ],
  },
  {
    id: 3,
    title: "Chocolate Crispy",
    target: "TARGET: KIDS · PREMIUM D2C · GIFTING",
    description1:
      "Chocolate peanut butter with crispy rice or puffed grain inclusions. ",
    description2: " Indulgent, fun, snackable. ",
    description3:
      " Appeals strongly to younger consumers and parents buying for children.",
    flavours: [
      {
        label: "White Chocolate Crispy",
        image:
          "/assets/images/third-party-manufacturing/white-chocolate crispy.webp",
        name: "White Chocolate Crispy Peanut Butter",
      },
    ],
  },
  {
    id: 4,
    title: "Mango Chia Seeds",
    target: "TARGET: WELLNESS · SUPERFOOD BRANDS",
    description1:
      "Tropical mango flavour with omega-rich chia seeds - a genuine superfood innovation. ",
    description2: " Dual-benefit positioning (protein + omega-3).",
    description3: " Perfect for health-first, wellness-focused D2C brands.",
  },
  {
    id: 5,
    title: "Cookie & Cream",
    target: "TARGET: INDULGENCE · KIDS · D2C PREMIUM",
    description1: "Cookies & cream flavour meets protein-rich peanut butter.",
    description2: "Dessert-like indulgence.",
    description3:
      "Extremely high shareability - this is the social-media-first SKU.",
    description4: " Drives brand virality and new customer acquisition.",
  },
];

const PeanutButter = () => {
  const [selectedFlavours, setSelectedFlavours] = useState({});

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

  const handleFlavourClick = (id, flavour) => {
    setSelectedFlavours((prev) => ({
      ...prev,
      [id]: flavour,
    }));
  };

  const products = [
    {
      id: 1,
      imageSrc:
        "/assets/images/third-party-manufacturing/natural-smooth-peanut.webp",
      productName: "Smooth Peanut Butter",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Natural Smooth Peanut Butter")}`,
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/third-party-manufacturing/natural-crunch-peanut-butter.webp",
      productName: "Natural Crunch Peanut Butter",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Natural Crunch Peanut Butter")}`,
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/third-party-manufacturing/chocolate-crispy-peanut-butter.webp",
      productName: "Chocolate Crispy",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Chocolate Crispy Peanut Butter")}`,
    },
    {
      id: 4,
      imageSrc:
        "/assets/images/third-party-manufacturing/mango-chia-seeds.webp",
      productName: "Mango Chia Seeds",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Mango Chia Seeds Peanut Butter")}`,
    },
    {
      id: 4,
      imageSrc:
        "/assets/images/third-party-manufacturing/cookie-and-cream.webp",
      productName: "Cookie & Cream",
      productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Cookie & Cream Peanut Butter")}`,
    },
  ];

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

  const certificates = [
    { file: "nutri-certi-6.webp", name: "FDA", sub: "FDA Registreted" },
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

  const schemaData = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Crunchy Peanut Butter in Surat, India",
      image:
        "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/peanut-butter.png",
      description:
        "Peanut butter manufacturer in Surat, India offers reliable third party manufacturing, certified safety, and flexible white label peanut butter services.",
      brand: {
        "@type": "Brand",
        name: "Gomzilifesciences",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Gomzilifesciences",
        logo: "https://www.gomzilifesciences.in/assets/images/logo/gomzi-life-science-logo.webp",
        url: "https://www.gomzilifesciences.in",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "34",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Chirag Pawar",
          },
          datePublished: "2025-01-01",
          reviewBody:
            "Best supplement manufacturers in India. Best quality and affordable pricing!",
          name: "Trusted White Label Peanut Butter",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum order quantity for peanut butter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our MOQ is 50 KG per variant. This typically yields approximately 100–200 units depending on your jar size (250g, 500g, or 1kg). Many first-time brand owners start with 2–3 variants at 50 KG each to validate which flavours resonate with their customers before scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get custom flavours not listed in your 12 variants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Yes  our R&D team can develop custom peanut butter flavours in 10–14 days. If you have a specific flavour concept (e.g. rose, saffron, date & nut), share it with us during the formulation call. Custom flavour development may carry a small R&D fee depending on complexity.",
          },
        },
        {
          "@type": "Question",
          name: "Is your peanut butter FSSAI compliant for selling on Amazon India and Flipkart?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Yes. Every product we manufacture meets FSSAI labelling requirements  FSSAI licence number, complete ingredient list with quantities, batch number, manufacturing date, expiry date, net weight, allergen declaration, and nutritional facts panel. All mandatory elements are verified before production. Your product is marketplace-ready.",
          },
        },
        {
          "@type": "Question",
          name: "What packaging formats are available for peanut butter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "  We offer glass jars (250g, 500g, 1kg), PET plastic jars (250g, 500g, 1kg), and flexible pouches for bulk/HoReCa formats. Glass jars are preferred for premium D2C positioning. PET jars are more cost-effective for mass-market channels. Custom label design is included  we work with your designer or our team.",
          },
        },
        {
          "@type": "Question",
          name: "Is your peanut butter Halal certified? Can I export it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Yes  our facility holds Halal and Kosher certifications, making your peanut butter export-ready for UAE, Saudi Arabia, Malaysia, Singapore, and other markets. Certificate documentation is provided with every export order. Full export documentation support is available on request.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the shelf life of your peanut butter variants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Natural variants (no added preservatives): 6–9 months in sealed packaging. Classic and Chocolate variants: 9–12 months.Specialty variants (Elaichi, Mango Chia, White Chocolate, Cookie & Cream): 6–9 months. Shelf life is validated through stability testing and declared on the COA. Specific shelf life data for your variant is confirmed at formulation stage.",
          },
        },
        {
          "@type": "Question",
          name: " What is the protein content per 100g in your peanut butter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: " Our Natural variants typically deliver 24–26g protein per 100g. Classic and Chocolate variants: 22–25g per 100g. Specialty variants vary based on additional inclusions. Exact nutritional profiles  protein, fat (total, saturated, unsaturated), carbohydrates, fibre, calories  are provided in the formula sheet and verified in the COA.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter/#breadcrumb",
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
          item: "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id":
        "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter/#service",
      url: "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter",
      name: "Private Label Peanut Butter Manufacturing Services",
      serviceType: "Peanut Butter Manufacturing",
      provider: {
        "@id": "https://www.gomzilifesciences.in/#organization",
      },
      mainEntityOfPage: {
        "@id":
          "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter/#webpage",
      },
      description:
        "Private label and third party peanut butter manufacturing services including natural peanut butter, crunchy peanut butter, creamy peanut butter, chocolate peanut butter, high protein peanut butter, custom formulations, packaging, labeling and contract manufacturing for brands across India.",
      category: [
        "Peanut Butter Manufacturing",
        "Private Label Food Manufacturing",
        "Private Label Peanut Butter",
        "Third Party Manufacturing",
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Food Brands, Nutrition Brands, Supplement Brands, Distributors, Amazon Sellers, D2C Brands and Entrepreneurs",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Natural Peanut Butter",
        "Crunchy Peanut Butter",
        "Creamy Peanut Butter",
        "Chocolate Peanut Butter",
        "High Protein Peanut Butter",
        "Private Label Manufacturing",
        "Custom Formulation",
        "Food Packaging",
        "Nutritional Labeling",
        "Contract Manufacturing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Peanut Butter Manufacturing Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Natural Peanut Butter Manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Crunchy Peanut Butter Manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Creamy Peanut Butter Manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chocolate Peanut Butter Manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High Protein Peanut Butter Manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Peanut Butter Formulation",
            },
          },
        ],
      },
    },
  ];

  return (
    <div className="tpm-bg">
      <PageMeta
        title="Third Party Peanut Butter Manufacturing | Private Label Peanut Butter for Brands"
        description="Looking for third party peanut butter manufacturing? Launch creamy, crunchy, and high-protein peanut butter under your own label with quality ingredients, private label support, and scalable production."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <NutritionHeader />

      <div className="protein-powder-banner">
        <img
          className="protein-powder-banner-image desktop-banner"
          src="/assets/images/third-party-manufacturing/peanut-butter-banner.webp"
          alt="Peanut butter Manufacturer Banner"
          fetchpriority="high"
          width={1600}
          height={350}
        />
        <img
          src="/assets/images/third-party-manufacturing/peanut-butter-mobile.webp"
          alt="Peanut butter Manufacturer Banner"
          className="protein-powder-banner-image mobile-banner"
          fetchpriority="high"
          width={720}
          height={480}
        />
      </div>

      <div className="wh-pg">
        <div className="wh-container">
          <div className="btn-gp">
            <div>
              <a
                href="https://wa.me/918320077993?text=Hello%20I%20am%20interested%20in%20third%20party%20peanut%20butter%20manufacturing%20services"
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
            Third Party Peanut Butter Manufacturing for Private Label Brands In
            Surat, India
          </h1>

          <div className="whey-protein-div-main align-start">
            <div className="whey-protein-div-text-peanute justify-text">
              <p className="wh-desc mb-2 lg-5 inter-regular">
                Gomzilifesciences is a reliable peanut butter manufacturer in
                India, known for delivering high-quality third party and private
                label peanut butter solutions. With certifications like FSSAI,
                HACCP, GMP, HALAL, and Kosher, we ensure safe, consistent, and
                premium products for growing brands.
              </p>
              <p className="wh-desc mb-2 lg-5 inter-regular">
                We offer a wide range of options, including creamy, crunchy, and
                high-protein peanut butter, tailored to your brand needs.
                Whether you're starting a new venture or expanding your product
                line, our expert team supports you from manufacturing to final
                product launch.
              </p>
              <p className="wh-desc mb-2 lg-5 inter-regular">
                As a trusted white label peanut butter supplier in India, we
                help businesses create market-ready, nutritious spreads that
                stand out in the health and fitness industry.
              </p>
            </div>
            <div className="blog blog-peanute p-0">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/nutrition/who-we-are.webp"
                }
                width="100%"
                className="border-radius-20 sticky-top"
                alt="gomzilifesciences"
              />
            </div>
          </div>
        </div>
        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title-our-whey-protein barlow-condensed-semi">
              Our Peanut Butter Product Categories
            </h2>
            <p className="wh-sec-desc-whey-protein inter-regular">
              Every variant available under your brand, in your packaging.
              Formulated for the Indian palate — from classic to premium
              specialty flavours.
            </p>

            <div className="wh-cat-list">
              {productCategories.map((category) => {
                const selectedFlavour = selectedFlavours[category.id];

                return (
                  <div key={category.id} className="wh-cat-row-item-peanut">
                    <div className="wh-cat-row-header-peanut wh-cat-row-header-top-peanut">
                      <div className="wh-cat-num-peanut">{category.id}</div>
                      <div className="wh-cat-title-peanut barlow-condensed-semi">
                        {category.title}
                      </div>
                    </div>

                    <div className="wh-cat-row-left-peanut">
                      <div className="wh-cat-target-peanut inter-500">
                        {category.target}
                      </div>
                      <p className="wh-cat-desc-peanut inter-regular">
                        {category.description1}
                      </p>
                      <p className="wh-cat-desc-peanut inter-regular">
                        {category.description2}
                      </p>
                      <p className="wh-cat-desc-peanut inter-regular">
                        {category.description3}
                      </p>
                      <p className="wh-cat-desc-peanut inter-regular">
                        {category.description4}
                      </p>

                      {category.flavours && (
                        <>
                          <span className="wh-kf-label-peanut inter-500">
                            Flavours
                          </span>

                          <div
                            className="wh-feat-grid-peanut"
                            onMouseLeave={() =>
                              handleFlavourClick(category.id, null)
                            }
                          >
                            {category.flavours.map((flavour, i) => (
                              <div
                                key={i}
                                className="wh-feat-item-peanut cp"
                                onMouseEnter={() =>
                                  handleFlavourClick(category.id, flavour)
                                }
                              >
                                <span className="wh-feat-text-peanut">
                                  {flavour.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="wh-prod-card-peanut">
                      <img
                        src={
                          selectedFlavour?.image ||
                          products[category.id - 1]?.imageSrc
                        }
                        alt={category.title}
                        className="wh-cat-row-img-peanut"
                      />

                      <div className="wh-prod-card-btn-peanut">
                        <a
                          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                            baseMessage +
                              (selectedFlavour?.name ||
                                products[category.id - 1]?.productName),
                          )}`}
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
                );
              })}
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-alt">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              Market Opportunity
            </h2>
            <p className="wh-sec-desc inter-500">
              <strong>India's Peanut Butter Market Is Booming.</strong>
            </p>
            <div className="market-cards-section">
              <div className="market-cards-container">
                <div className="market-card">
                  <h3 className="barlow-condensed-semi">1,800Cr</h3>
                  <p className="inter-regular">
                    India's peanut butter market — growing at{" "}
                    <strong>25-28% CAGR</strong>. First-time buyers entering the
                    category daily as health awareness rises across Tier 2 and
                    Tier 3 cities.
                  </p>
                </div>

                <div className="market-card">
                  <h3 className="barlow-condensed-semi">3x</h3>
                  <p className="inter-regular">
                    Growth in online peanut butter searches since 2021.
                    <strong>Protein-conscious Indians</strong> are switching
                    from traditional snacks to peanut butter as a daily protein
                    source — your customer is already searching.
                  </p>
                </div>
              </div>

              <div className="market-bottom-text">
                <p className="inter-regular">
                  “Over 500 new food brands will launch peanut butter products
                  in India this year. The brands that win are those who start
                  with the <strong>right manufacturer </strong>— not the
                  cheapest one.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wh-section wh-section-white">
          <div className="wh-container">
            <h2 className="wh-sec-title barlow-condensed-semi">
              Who Can Start a Peanut Butter Brand With Us?
            </h2>
            <p className="wh-sec-desc inter-500">
              <strong>
                Our peanut butter manufacturing services are suitable for:
              </strong>
            </p>
            <div className="wh-who-grid">
              {[
                "Food Creator / Influencer",
                "Gym Owner",
                "D2C Brand Founder",
                "Retailer / Distributor",
                "Export / Trading Company",
                "Home Baker / Cafe Brand",
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
            <h2 className="wh-sec-title barlow-condensed-semi">How It Works</h2>

            <p className="wh-sec-desc inter-regular">
              Every step documented. Every milestone committed. No surprises.
            </p>

            <div className="wh-steps-section bg-white">
              <div className="wh-steps-container">
                {[
                  {
                    id: "01",
                    title: "Idea",
                    desc: "Product brief, variant selection, target customer, and pricing strategy confirmed.",
                    days: "1-2 DAYS",
                  },
                  {
                    id: "02",
                    title: "Formulation",
                    desc: "Sample batch produced. Flavour development, texture, and consistency testing.",
                    days: "5-7 DAYS",
                  },
                  {
                    id: "03",
                    title: "Manufacturing",
                    desc: "Full batch with COA documentation. FSSAI-compliant production.",
                    days: "5-7 DAYS",
                  },
                  {
                    id: "04",
                    title: "Packaging",
                    desc: "Label artwork, FSSAI-compliant design, jar or pouch format. Your brand, our execution.",
                    days: "3-4 DAYS",
                  },
                  {
                    id: "05",
                    title: "Dispatch",
                    desc: "D2C Shopify store optional. Product dispatched. Your brand is on the market.",
                    days: "1-2 DAYS",
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

        <section class="qua-wh-section bg-white">
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
                  What is the minimum order quantity for peanut butter?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Our MOQ is 50 KG per variant. This typically yields
                  approximately 100-200 units depending on your jar size (250g,
                  500g, or 1kg). Many first-time brand owners start with 2-3
                  variants at 50 KG each to validate which flavours resonate
                  with their customers before scaling.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Can I get custom flavours not listed in your 12 variants?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes — our R&D team can develop custom peanut butter flavours
                  in 10-14 days. If you have a specific flavour concept (e.g.
                  rose, saffron, date & nut), share it with us during the
                  formulation call. Custom flavour development may carry a small
                  R&D fee depending on complexity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Is your peanut butter FSSAI compliant for selling on Amazon
                  India and Flipkart?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes. Every product we manufacture meets FSSAI labelling
                  requirements — FSSAI licence number, complete ingredient list
                  with quantities, batch number, manufacturing date, expiry
                  date, net weight, allergen declaration, and nutritional facts
                  panel. All mandatory elements are verified before production.
                  Your product is marketplace-ready.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What packaging formats are available for peanut butter?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  We offer glass jars (250g, 500g, 1kg), PET plastic jars (250g,
                  500g, 1kg), and flexible pouches for bulk/HoReCa formats.
                  Glass jars are preferred for premium D2C positioning. PET jars
                  are more cost-effective for mass-market channels. Custom label
                  design is included — we work with your designer or our team.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  Is your peanut butter Halal certified? Can I export it?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Yes — our facility holds Halal and Kosher certifications,
                  making your peanut butter export-ready for UAE, Saudi Arabia,
                  Malaysia, Singapore, and other markets. Certificate
                  documentation is provided with every export order. Full export
                  documentation support is available on request.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  How long is the shelf life of your peanut butter variants?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Natural variants (no added preservatives): 6-9 months in
                  sealed packaging. Classic and Chocolate variants: 9-12 months.
                  Specialty variants (Elaichi, Mango Chia, White Chocolate,
                  Cookie & Cream): 6-9 months. Shelf life is validated through
                  stability testing and declared on the COA. Specific shelf life
                  data for your variant is confirmed at formulation stage.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="mt-3 p-4">
                <Accordion.Header className="faq-question">
                  What is the protein content per 100g in your peanut butter?
                </Accordion.Header>
                <Accordion.Body className="faq-answer">
                  Our Natural variants typically deliver 24-26g protein per
                  100g. Classic and Chocolate variants: 22-25g per 100g.
                  Specialty variants vary based on additional inclusions. Exact
                  nutritional profiles — protein, fat (total, saturated,
                  unsaturated), carbohydrates, fibre, calories — are provided in
                  the formula sheet and verified in the COA.
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

export default PeanutButter;
