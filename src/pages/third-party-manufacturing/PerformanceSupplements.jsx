import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    faDroplet,
    faMedal,
    faGem,
    faDumbbell,
    faLeaf,
    faFlask,
} from "@fortawesome/free-solid-svg-icons";

const KeyFeatures = ({ features }) => (
    <div className="whey-key-features-grid">
        {features.map((feature, index) => (
            <div key={index} className="whey-key-feature-item">
                <FontAwesomeIcon icon={feature.icon} className="whey-feature-icon" />
                <span className="whey-feature-text">{feature.label}</span>
            </div>
        ))}
    </div>
);

const PerformanceSupplements = () => {
    const phoneNumber = "+918320077993";
    const baseMessage = "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc: "/assets/images/third-party-manufacturing/pre-workout.png",
            productName: "Pre-Workout Supplements",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Pre-Workout Supplements")}`,
        },
        {
            id: 2,
            imageSrc: "/assets/images/third-party-manufacturing/creatine.png",
            productName: "Creatine Supplements",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Creatine Supplements")}`,
        },
        {
            id: 3,
            imageSrc: "/assets/images/third-party-manufacturing/bcaa.png",
            productName: "BCAA Supplements",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "BCAA Supplements")}`,
        },
        {
            id: 4,
            imageSrc: "/assets/images/third-party-manufacturing/eaa.png",
            productName: "EAA Supplements",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "EAA Supplements")}`,
        },
    ];

    const schemaData = [
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Private Label Performance Supplement Manufacturer in India, Surat",
            "image": "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/pre-workout.png",
            "description": "Gomzi Lifescience LLP is a private label performance supplement manufacturer in Surat, India. We offer custom Pre-Workout, Creatine, BCAA, EAA formulations with FSSAI, GMP, HACCP, HALAL and Kosher certifications.",
            "brand": { "@type": "Brand", "name": "Gomzilifesciences" },
            "manufacturer": {
                "@type": "Organization",
                "name": "Gomzilifesciences",
                "logo": "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
                "url": "https://www.gomzilifesciences.in/third-party-manufacturing/performance-supplements"
            },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "34" },
            "review": [{
                "@type": "Review",
                "author": { "@type": "Person", "name": "Kotadiya Prakash Mohanbhai" },
                "datePublished": "2025-01-01",
                "reviewBody": "All types of performance supplements available. Very good hygiene maintained.",
                "name": "Trusted Private Label Performance Supplement Manufacturer",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What are Pre-Workout Supplements?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-Workout supplements are designed to support energy, focus, endurance, and workout performance before training sessions." } },
                { "@type": "Question", "name": "What Creatine products does Gomzi Lifescience manufacture?", "acceptedAnswer": { "@type": "Answer", "text": "We manufacture Creatine Monohydrate, Micronized Creatine, and Creatine Blend Formulations." } },
                { "@type": "Question", "name": "What BCAA ratios are available?", "acceptedAnswer": { "@type": "Answer", "text": "We manufacture BCAA in 2:1:1, 4:1:1, and 8:1:1 ratios." } },
                { "@type": "Question", "name": "Who can start a performance supplement brand with Gomzi Lifescience?", "acceptedAnswer": { "@type": "Answer", "text": "Gym Owners, Fitness Trainers, Sports Nutrition Brands, E-commerce Sellers, Athletes and Health Entrepreneurs." } },
                { "@type": "Question", "name": "What certifications does Gomzi Lifescience hold?", "acceptedAnswer": { "@type": "Answer", "text": "FSSAI, GMP, HACCP, HALAL and Kosher standards." } },
                { "@type": "Question", "name": "What is the minimum order quantity?", "acceptedAnswer": { "@type": "Answer", "text": "Low Minimum Order Quantity of 50–100 KG." } },
                { "@type": "Question", "name": "What Pre-Workout formulation levels are available?", "acceptedAnswer": { "@type": "Answer", "text": "Basic, Standard, and Advanced Pre-Workout formulation levels." } },
                { "@type": "Question", "name": "Can I get private label performance supplement manufacturing in Surat?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label performance supplement manufacturing." } }
            ]
        }
    ];

    const productCategories = [
        {
            id: 1,
            title: "Pre-Workout Supplements",
            description: "Pre-Workout supplements are designed to support energy, focus, endurance, and workout performance before training sessions. These products are commonly used by gym users, athletes, and fitness supplement brands.",
            formulationTitle: "Pre-Workout Formulation Levels",
            formulations: [
                { label: "Basic Pre-Workout", desc: "Suitable for beginner fitness users" },
                { label: "Standard Pre-Workout", desc: "Balanced formulation for regular gym users" },
                { label: "Advanced Pre-Workout", desc: "High-performance formulas designed for athletes" },
            ],
            customTitle: "Custom Pre-Workout Formulations Available",
            customFormulations: [
                "Pre-Workout with Fat Burner Ingredients",
                "High Stim Pre-Workout Formulations",
                "Pump & Endurance Pre-Workout",
                "Athlete Performance Pre-Workout",
            ],
            commonIngredients: ["Caffeine", "Beta-Alanine", "Citrulline Malate", "Taurine", "Creatine Monohydrate", "L-Arginine", "Electrolytes"],
            features: [
                { icon: faBolt,       label: "Energy & focus support" },
                { icon: faHeartPulse, label: "Endurance & workout performance" },
                { icon: faTrophy,     label: "Multiple formulation levels" },
                { icon: faTag,        label: "Ideal for private label brands" },
            ],
        },
        {
            id: 2,
            title: "Creatine Supplements",
            description: "Creatine is one of the most widely used ingredients in sports nutrition supplements for strength and performance support. These products are commonly used in gym supplements, athlete performance formulas, and strength training products.",
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
            commonIngredients: ["Creatine Monohydrate", "Creatine HCL", "Electrolytes", "Amino Acid Support Ingredients"],
            features: [
                { icon: faDumbbell,  label: "Strength & performance support" },
                { icon: faGem,       label: "Monohydrate & micronized options" },
                { icon: faFlask,     label: "Custom blend formulations" },
                { icon: faMedal,     label: "Athlete performance focused" },
            ],
        },
        {
            id: 3,
            title: "BCAA Supplements",
            description: "BCAA supplements contain branched-chain amino acids including leucine, isoleucine, and valine, commonly used in sports nutrition recovery formulas.",
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
            commonIngredients: ["L-Leucine", "L-Isoleucine", "L-Valine", "Electrolytes", "Glutamine"],
            features: [
                { icon: faDna,     label: "2:1:1, 4:1:1, 8:1:1 ratios" },
                { icon: faDroplet, label: "Intra-workout hydration support" },
                { icon: faLeaf,    label: "Recovery amino acid blend" },
                { icon: faUsers,   label: "Suitable for all fitness levels" },
            ],
        },
        {
            id: 4,
            title: "EAA Supplements",
            description: "EAA supplements contain all essential amino acids required by the body, making them suitable for recovery and advanced sports nutrition formulations.",
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
            commonIngredients: ["Essential Amino Acids", "Electrolytes", "Recovery Amino Compounds"],
            features: [
                { icon: faStar,          label: "All essential amino acids" },
                { icon: faShieldHalved,  label: "Advanced recovery support" },
                { icon: faChartBar,      label: "Athlete endurance formulas" },
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
        { specification: "Manufacturer",     details: "Gomzi Lifescience LLP" },
        { specification: "Product Category", details: "Performance Supplements" },
        { specification: "Form",             details: "Powder" },
        { specification: "Packaging Size",   details: "Customizable (300g, 500g, 1kg or as required)" },
        { specification: "Packaging Type",   details: "Jar / Pouch / Custom Packaging" },
        { specification: "Composition",      details: "Custom Formulation Available" },
        { specification: "Flavours",         details: "Chocolate, Coffee, Mava Kulfi & Many More Custom Flavours Available" },
        { specification: "Shelf Life",       details: "18 Months" },
        { specification: "Delivery Time",    details: "15–20 Days" },
        { specification: "Branding",         details: "Private Label & White Labelling Available" },
        { specification: "Certifications",   details: "FSSAI, GMP, HACCP, HALAL, Kosher" },
    ];

    return (
        <div className="tpm-bg">
            <PageMeta
                title="Private Label Performance Supplement Manufacturer in Surat, India | Gomzi Lifescience"
                description="Gomzi Lifescience LLP is a private label performance supplement manufacturer in Surat, India. Custom Pre-Workout, Creatine, BCAA, EAA formulations. FSSAI, GMP, HACCP, HALAL and Kosher certified."
            />
            <Helmet>
                <style>{`
                    /* Indented content block under any heading */
                    .section-indent {
                        padding-left: 24px;
                        margin-bottom: 32px;
                    }

                    /* Sub-indent for content inside product categories */
                    .sub-indent {
                        padding-left: 20px;
                        margin-bottom: 24px;
                    }

                    .whey-key-features-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                        margin: 12px 0 20px;
                    }
                    .whey-key-feature-item {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        background: #dfeedc;
                        border: 1px solid #b7eab7;
                        border-radius: 8px;
                        padding: 8px 12px;
                    }
                    .whey-feature-icon { color: #86c33a; font-size: 17px; flex-shrink: 0; }
                    .whey-feature-text { font-size: 17px; color: #333; font-family: 'Roboto', sans-serif; line-height: 1.4; }
                    @media (max-width: 576px) {
                        .whey-key-features-grid { grid-template-columns: 1fr; }
                        .section-indent { padding-left: 14px; }
                        .sub-indent { padding-left: 12px; }
                    }

                    .mfg-timeline { position: relative; margin: 18px 0 24px 0; padding: 0; list-style: none; }
                    .mfg-timeline::before {
                        content: '';
                        position: absolute;
                        left: 14px; top: 8px; bottom: 8px;
                        width: 3px;
                        background: linear-gradient(180deg, #86c33a 0%, #b7eab7 100%);
                        border-radius: 2px;
                    }
                    .mfg-timeline-item { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 16px; position: relative; }
                    .mfg-timeline-item:last-child { margin-bottom: 0; }
                    .mfg-timeline-number {
                        width: 30px; height: 30px; min-width: 30px;
                        border-radius: 50%;
                        background: #86c33a; color: #fff;
                        font-size: 15px; font-weight: 700;
                        font-family: 'Roboto', sans-serif;
                        display: flex; align-items: center; justify-content: center;
                        box-shadow: 0 2px 10px rgba(134,195,58,0.30);
                        z-index: 1; flex-shrink: 0;
                    }
                    .mfg-timeline-content {
                        font-size: 16px; font-family: 'Roboto', sans-serif;
                        color: #86c33a; font-weight: 600; line-height: 1.5;
                        flex: 1; margin-top: 10px;
                    }
                    .whey-specs-table {
                        width: 100%; border-collapse: collapse;
                        font-family: 'Roboto', sans-serif; font-size: 15px;
                        border-radius: 10px; overflow: hidden;
                        box-shadow: 0 2px 12px rgba(0,0,0,0.07);
                    }
                    .whey-specs-table thead tr { background: #86c33a; color: #fff; }
                    .whey-specs-table thead th { padding: 13px 18px; font-weight: 700; font-size: 15px; letter-spacing: 0.3px; }
                    .whey-specs-table tbody tr { border-bottom: 1px solid #e8f5e1; }
                    .whey-specs-table tbody tr:nth-child(even) { background: #f4fbed; }
                    .whey-specs-table tbody tr:last-child { border-bottom: none; }
                    .whey-specs-table tbody td { padding: 11px 18px; color: #333; vertical-align: top; }
                    .whey-specs-table tbody td:first-child { font-weight: 600; color: #555; width: 38%; }
                    .ingredients-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 16px; }
                    .ingredient-tag {
                        background: #f4fbed; border: 1px solid #b7eab7;
                        border-radius: 20px; padding: 4px 14px;
                        font-size: 14px; color: #444; font-family: 'Roboto', sans-serif;
                    }
                `}</style>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <NutritionHeader />

            {/* Banner */}
            <div className="protein-powder-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Performance Supplement Manufacturer Banner"
                    className="protein-powder-banner-image"
                />
            </div>

            {/* Main Content */}
            <section className="protein-powder-content protein-powder-container">

                <h1 className="protein-powder-page-title">
                    {/* <br /> */}
                    <span className="primory-color">Private Label Performance Supplement Manufacturer</span>
                </h1>

                <p className="protein-powder-page-description">
                    Gomzi Lifescience LLP manufactures a wide range of performance supplements for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce supplement businesses.
                </p>
                <p className="protein-powder-page-description">
                    Our facility focuses on powder-based nutraceutical manufacturing, allowing us to develop customized sports nutrition products designed for workout performance, endurance, strength, and recovery.
                </p>
                <p className="protein-powder-page-description">
                    All products are manufactured under certified systems including{" "}
                    <strong>FSSAI | GMP | HACCP | HALAL | Kosher</strong>
                </p>

                {/* ── Our Performance Supplement Categories ── */}
                <h2 className="mb-2">Our Performance Supplement Categories</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        We manufacture several performance supplement products widely used in sports nutrition and gym supplement industries. Each product can be developed in multiple formulation levels depending on the target market such as beginners, gym users, or professional athletes.
                    </p>

                    {productCategories.map((category) => (
                        <div key={category.id} className="mb-4">
                            <h3 className="mb-2">{category.id}. {category.title}</h3>
                            <div className="sub-indent">
                                <p className="protein-powder-page-description">{category.description}</p>

                                <h4 className="mb-2">{category.formulationTitle}</h4>
                                <div className="sub-indent">
                                    <ul className="pl-3">
                                        {category.formulations.map((f, idx) => (
                                            <li key={idx} className="protein-powder-page-description mb-1">
                                                {f.desc ? <><strong>{f.label}</strong> – {f.desc}</> : f.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="mb-2">Key Features:</h4>
                                <div className="sub-indent">
                                    <KeyFeatures features={category.features} />
                                </div>

                                <h4 className="mb-2">{category.customTitle}</h4>
                                <div className="sub-indent">
                                    <ul className="pl-3">
                                        {category.customFormulations.map((item, idx) => (
                                            <li key={idx} className="protein-powder-page-description mb-1">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="mb-2">Common Ingredients Used</h4>
                                <div className="sub-indent">
                                    <div className="ingredients-tags">
                                        {category.commonIngredients.map((ing, idx) => (
                                            <span key={idx} className="ingredient-tag">{ing}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Who Can Start ── */}
                <h2 className="mb-2">Who Can Start a Performance Supplement Brand With Us</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">Our manufacturing services are suitable for:</p>
                    <ul className="pl-3">
                        <li className="protein-powder-page-description">Gym Owners launching their own supplement brands</li>
                        <li className="protein-powder-page-description">Fitness Trainers building personal supplement lines</li>
                        <li className="protein-powder-page-description">Sports Nutrition Brands</li>
                        <li className="protein-powder-page-description">E-commerce Sellers (Amazon, Flipkart, Shopify)</li>
                        <li className="protein-powder-page-description">Athletes &amp; Sports Professionals</li>
                        <li className="protein-powder-page-description">Health &amp; Wellness Entrepreneurs</li>
                    </ul>
                </div>

                {/* ── Product Specifications ── */}
                <h2 className="mb-2">Product Specifications</h2>
                <div className="section-indent">
                    <table className="whey-specs-table">
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

                {/* ── Why Choose ── */}
                <h2 className="mb-2">Why Choose Gomzi Lifescience</h2>
                <div className="section-indent">
                    <ul className="mfg-timeline">
                        {whyChoose.map((item, idx) => (
                            <li key={idx} className="mfg-timeline-item">
                                <div className="mfg-timeline-number">{idx + 1}</div>
                                <div className="mfg-timeline-content">{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Start Your Brand ── */}
                <h2 className="mb-2">Start Your Performance Supplement Brand</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Gomzi Lifescience provides complete private label manufacturing solutions for performance supplements.
                    </p>
                    <p className="protein-powder-page-description">
                        From product formulation to final packaging, our team supports businesses looking to launch their own sports nutrition supplement brand.
                    </p>
                </div>

            </section>

            {/* Product Cards */}
            <section className="third-party-manufacturing-card-container">
                <div className="row mt-3">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 col-6 mb-4">
                            <div className="third-party-manufacturing-card text-center bg-white br-15 p-2 d-flex flex-column justify-content-between shadow-sm">
                                <img
                                    src={product.imageSrc}
                                    alt={product.productName}
                                    className="product-img"
                                />
                                <h3 className="text-ellipse-custom text-secondary my-4 f-rob-med f-20">
                                    <b>{product.productName}</b>
                                </h3>
                                <div className="mb-1">
                                    <a
                                        href={product.productLink}
                                        className="enquiry-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Enquiry Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="top-categories-main bg-white py-3 py-md-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8 d-flex align-items-center justify-content-between">
                            <div className="col">
                                <h2 className="f-rob-bol f-30 text-black text-uppercase">FAQ's</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 pb-5 justify-content-center overflow-hidden">
                        <div className="col-md-8">
                            <Accordion defaultActiveKey={["1"]} alwaysOpen>
                                <Accordion.Item eventKey="1" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What are Pre-Workout Supplements?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Pre-Workout supplements are designed to support energy, focus, endurance, and workout performance before training sessions. They are commonly used by gym users, athletes, and fitness supplement brands. We offer Basic, Standard, and Advanced formulation levels.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What Creatine products does Gomzi Lifescience manufacture?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        We manufacture Creatine Monohydrate, Micronized Creatine, and Creatine Blend Formulations including custom blends with Electrolytes and Amino Acids.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What BCAA ratios are available?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        We manufacture BCAA in 2:1:1, 4:1:1, and 8:1:1 ratios with custom formulations including BCAA with Electrolytes, BCAA with Glutamine, and Intra-Workout Hydration Formulas.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Who can start a performance supplement brand with Gomzi Lifescience?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Our manufacturing services are suitable for Gym Owners, Fitness Trainers, Sports Nutrition Brands, E-commerce Sellers (Amazon, Flipkart, Shopify), Athletes and Sports Professionals, and Health and Wellness Entrepreneurs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What certifications does Gomzi Lifescience hold?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        All products are manufactured under certified quality systems including FSSAI, GMP, HACCP, HALAL and Kosher standards.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What is the minimum order quantity?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Gomzi Lifescience offers a Low Minimum Order Quantity of 50–100 KG for performance supplement manufacturing.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What Pre-Workout formulation levels are available?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        We offer Basic Pre-Workout for beginner fitness users, Standard Pre-Workout for regular gym users, and Advanced Pre-Workout with high-performance formulas designed for athletes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Can I get private label performance supplement manufacturing in Surat?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label performance supplement manufacturing for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <NutritionFooter />
        </div>
    );
};

export default PerformanceSupplements;