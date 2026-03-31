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
    faMugHot,
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

const WheyProtein = () => {
    const phoneNumber = "+918320077993";
    const baseMessage =
        "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc: "/assets/images/third-party-manufacturing/blend.png",
            productName: "Whey Protein Blend",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Blend")}`,
        },
        {
            id: 2,
            imageSrc: "/assets/images/third-party-manufacturing/protein.png",
            productName: "100% Whey Protein",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "100% Whey Protein")}`,
        },
        {
            id: 3,
            imageSrc: "/assets/images/third-party-manufacturing/isolate.png",
            productName: "Whey Protein Isolate 90%",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Isolate 90%")}`,
        },
        {
            id: 4,
            imageSrc: "/assets/images/third-party-manufacturing/concentrate.png",
            productName: "Whey Protein Concentrate 80%",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Whey Protein Concentrate 80%")}`,
        },
    ];

    const schemaData = [
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Private Label Whey Protein Manufacturer in India, Surat",
            "image": "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/whey-100.png",
            "description": "Gomzi Lifescience LLP is a private label whey protein manufacturer in Surat, India. We offer custom formulations, bulk production, and white label whey protein supplements with FSSAI, GMP, HACCP, HALAL and Kosher certifications.",
            "brand": { "@type": "Brand", "name": "Gomzilifesciences" },
            "manufacturer": {
                "@type": "Organization",
                "name": "Gomzilifesciences",
                "logo": "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
                "url": "https://www.gomzilifesciences.in/third-party-manufacturing/whey-protein"
            },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "34" },
            "review": [{
                "@type": "Review",
                "author": { "@type": "Person", "name": "Kotadiya Prakash Mohanbhai" },
                "datePublished": "2025-01-01",
                "reviewBody": "All types of whey protein available. Very good hygiene maintained.",
                "name": "Trusted Private Label Whey Protein Manufacturer",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is Whey Protein Blend?", "acceptedAnswer": { "@type": "Answer", "text": "Whey Protein Blend is a formulation that combines different whey protein sources such as whey protein concentrate and whey protein isolate to achieve a balanced nutritional profile and optimized cost structure." } },
                { "@type": "Question", "name": "What is the difference between Whey Protein Isolate and Whey Protein Concentrate?", "acceptedAnswer": { "@type": "Answer", "text": "Whey Protein Isolate 90% is a highly purified protein produced through advanced filtration that removes most fats and lactose. Whey Protein Concentrate 80% has a balanced nutritional composition and is one of the most widely used ingredients in sports nutrition supplements." } },
                { "@type": "Question", "name": "Who can start a whey protein brand with Gomzi Lifescience?", "acceptedAnswer": { "@type": "Answer", "text": "Our whey protein manufacturing services are suitable for Gym Owners, Fitness Trainers, Sports Nutrition Brands, E-commerce Sellers (Amazon, Flipkart, Shopify), Athletes and Sports Professionals, and Health and Wellness Entrepreneurs." } },
                { "@type": "Question", "name": "What certifications does Gomzi Lifescience hold?", "acceptedAnswer": { "@type": "Answer", "text": "All products are manufactured under certified quality systems including FSSAI, GMP, HACCP, HALAL and Kosher standards." } },
                { "@type": "Question", "name": "What manufacturing capabilities does Gomzi Lifescience offer?", "acceptedAnswer": { "@type": "Answer", "text": "Our facility supports custom whey protein formulations, private label supplement manufacturing, flavor customization, packaging and labeling, and bulk production for supplement brands." } },
                { "@type": "Question", "name": "Which whey protein is best for premium sports nutrition products?", "acceptedAnswer": { "@type": "Answer", "text": "Whey Protein Isolate 90% is preferred for premium and advanced sports nutrition products due to its 90% protein concentration, low lactose and fat content, and fast absorption rate." } },
                { "@type": "Question", "name": "What is 100% Whey Protein used for?", "acceptedAnswer": { "@type": "Answer", "text": "100% Whey Protein formulations are widely used in gym nutrition products, fitness supplements, and athlete-focused protein powders. They support muscle recovery and daily protein intake requirements." } },
                { "@type": "Question", "name": "Can I get private label whey protein manufacturing in Surat?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label whey protein manufacturing for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses." } }
            ]
        }
    ];

    const productCategories = [
        {
            id: 1,
            title: "Whey Protein Blend",
            description1: "Whey Protein Blend is a formulation that combines different whey protein sources such as whey protein concentrate and whey protein isolate to achieve a balanced nutritional profile and optimized cost structure.",
            description2: "This formulation is commonly used in sports nutrition supplements and daily protein products due to its balanced amino acid profile and smooth mixability.",
            features: [
                { icon: faChartBar,      label: "Balanced protein formulation" },
                { icon: faDna,           label: "Good amino acid profile" },
                { icon: faCalendarCheck, label: "Suitable for daily protein supplementation" },
                { icon: faTag,           label: "Ideal for private label supplement brands" },
            ],
        },
        {
            id: 2,
            title: "100% Whey Protein",
            description1: "100% Whey Protein formulations typically contain high-quality whey protein ingredients designed for sports nutrition supplements. These products are developed to support muscle recovery and daily protein intake requirements.",
            description2: "They are widely used in gym nutrition products, fitness supplements, and athlete-focused protein powders.",
            features: [
                { icon: faStar,      label: "High-quality whey protein formulation" },
                { icon: faTrophy,    label: "Designed for sports nutrition products" },
                { icon: faHeartPulse,label: "Suitable for muscle recovery and daily protein intake" },
                { icon: faUsers,     label: "Popular choice for fitness supplement brands" },
            ],
        },
        {
            id: 3,
            title: "Whey Protein Isolate 90%",
            description1: "Whey Protein Isolate 90% is a highly purified whey protein produced through advanced filtration processes that remove most fats and lactose.",
            description2: "This results in a high protein concentration with faster absorption, making it suitable for advanced sports nutrition products and professional athlete supplements.",
            features: [
                { icon: faGem,    label: "90% protein concentration" },
                { icon: faDroplet,label: "Low lactose and fat content" },
                { icon: faBolt,   label: "Fast absorption rate" },
                { icon: faMedal,  label: "Ideal for premium sports nutrition supplements" },
            ],
        },
        {
            id: 4,
            title: "Whey Protein Concentrate 80%",
            description1: "Whey Protein Concentrate 80% is one of the most widely used ingredients in sports nutrition supplements due to its balanced nutritional composition and natural whey components.",
            description2: "It provides a high protein content along with essential amino acids, making it suitable for general fitness supplements and protein powders.",
            features: [
                { icon: faChartBar,   label: "80% protein concentration" },
                { icon: faShieldHalved,label: "Rich in essential amino acids" },
                { icon: faTrophy,     label: "Suitable for sports nutrition products" },
                { icon: faMugHot,     label: "Good taste and mixability" },
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
        { specification: "Manufacturer",   details: "Gomzi Lifescience LLP" },
        { specification: "Form",           details: "Powder" },
        { specification: "Packaging Size", details: "Customizable (500g, 1kg, 2kg or as required)" },
        { specification: "Packaging Type", details: "Jar / Pouch / Custom Packaging" },
        { specification: "Composition",    details: "As Per Brand Requirement" },
        { specification: "Flavours",       details: "Chocolate, Coffee, Mava Kulfi & Many More Custom Flavours Available" },
        { specification: "Shelf Life",     details: "18 Months" },
        { specification: "Delivery Time",  details: "15–20 Days" },
        { specification: "Branding",       details: "Private Label & White Labelling Available" },
        { specification: "Certifications", details: "FSSAI, GMP, HACCP, HALAL, Kosher" },
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
                values: ["Combination of whey protein types", "Moderate", "Moderate", "Moderate", "Medium", "Economical", "Daily protein supplements", "Protein blends & daily nutrition"],
            },
            {
                name: "100% Whey Protein",
                values: ["Whey protein based formulation", "High", "Moderate", "Low", "Medium to Fast", "Mid-range", "Fitness supplements", "Gym supplements"],
            },
            {
                name: "Whey Protein Isolate 90%",
                values: ["Highly purified whey isolate", "Very High", "Very Low", "Very Low", "Fast", "Premium", "Advanced sports nutrition", "Premium athlete products"],
            },
            {
                name: "Whey Protein Concentrate 80%",
                values: ["Whey protein concentrate", "High", "Moderate", "Moderate", "Medium", "Mid-range", "General sports nutrition", "Protein powders"],
            },
        ],
    };

    return (
        <div className="tpm-bg">
            <PageMeta
                title="Private Label Whey Protein Manufacturer in Surat, India | Gomzi Lifescience"
                description="Gomzi Lifescience LLP is a private label whey protein manufacturer in Surat, India. Custom formulations, bulk production, FSSAI, GMP, HACCP, HALAL and Kosher certified."
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

                    /* Manufacturing Timeline */
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

                    /* Product Specifications Table */
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

                    /* Whey Comparison Table */
                    .whey-comparison-desc { font-size: 15px; color: #555; font-family: 'Roboto', sans-serif; margin-bottom: 18px; line-height: 1.6; }
                    .whey-comparison-desc strong { color: #333; }
                    .whey-comparison-table-wrap { overflow-x: auto; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
                    .whey-comparison-table {
                        width: 100%; border-collapse: collapse;
                        font-family: 'Roboto', sans-serif; font-size: 14px; min-width: 700px;
                    }
                    .whey-comparison-table thead tr { background: #86c33a; color: #fff; }
                    .whey-comparison-table thead th { padding: 13px 16px; font-weight: 700; font-size: 14px; text-align: left; white-space: nowrap; }
                    .whey-comparison-table thead th:first-child { background: #6aa82e; }
                    .whey-comparison-table tbody tr { border-bottom: 1px solid #e8f5e1; }
                    .whey-comparison-table tbody tr:nth-child(even) { background: #f4fbed; }
                    .whey-comparison-table tbody tr:last-child { border-bottom: none; }
                    .whey-comparison-table tbody td { padding: 11px 16px; color: #333; vertical-align: top; }
                    .whey-comparison-table tbody td:first-child { font-weight: 600; color: #555; background: #f0f8e8; white-space: nowrap; }
                `}</style>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <NutritionHeader />

            {/* Banner Section */}
            <div className="protein-powder-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Whey Protein Manufacturer Banner"
                    className="protein-powder-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="protein-powder-content protein-powder-container">
                <h1 className="protein-powder-page-title">
                    Private Label{" "}
                    <span className="primory-color">Whey Protein Manufacturer</span>{" "}
                    In Surat, India
                </h1>

                <p className="protein-powder-page-description">
                    Gomzi Lifescience LLP specializes in manufacturing high-quality whey protein supplements for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses.
                </p>
                <p className="protein-powder-page-description">
                    Our manufacturing facility supports custom formulations, private labeling, and bulk production for whey protein products designed for performance nutrition and daily protein supplementation.
                </p>
                <p className="protein-powder-page-description">
                    All products are manufactured under certified quality systems including{" "}
                    <strong>FSSAI, GMP, HACCP, HALAL and Kosher</strong> standards.
                </p>

                {/* ── Our Whey Protein Product Categories ── */}
                <h2 className="mb-2">Our Whey Protein Product Categories</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        We manufacture different whey protein formulations depending on protein concentration, filtration process, and intended application in sports nutrition products.
                    </p>

                    {productCategories.map((category) => (
                        <div key={category.id} className="mb-4">
                            <h3 className="mb-2">{category.id}. {category.title}</h3>
                            <div className="sub-indent">
                                <p className="protein-powder-page-description">{category.description1}</p>
                                <p className="protein-powder-page-description">{category.description2}</p>
                                <h4 className="d-block mb-2">Key Features:</h4>
                                <div className="sub-indent">
                                    <KeyFeatures features={category.features} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Who Can Start ── */}
                <h2 className="mb-2">Who Can Start a Whey Protein Brand With Us?</h2>
                <div className="section-indent">
                    <strong style={{ fontSize: "20px" }}>Our whey protein manufacturing services are suitable for:</strong>
                    <ul className="pl-3 mt-2">
                        <li className="protein-powder-page-description">Gym Owners</li>
                        <li className="protein-powder-page-description">Fitness Trainers</li>
                        <li className="protein-powder-page-description">Sports Nutrition Brands</li>
                        <li className="protein-powder-page-description">E-commerce Sellers (Amazon, Flipkart, Shopify)</li>
                        <li className="protein-powder-page-description">Athletes and Sports Professionals</li>
                        <li className="protein-powder-page-description">Health and Wellness Entrepreneurs</li>
                    </ul>
                </div>

                {/* ── Product Specifications ── */}
                <h2 className="mb-2">Product Specifications:</h2>
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

                {/* ── Whey Protein Comparison ── */}
                <h2 className="mb-2">Whey Protein Comparison:</h2>
                <div className="section-indent">
                    <p className="whey-comparison-desc">
                        To help supplement brands, gym owners, and fitness businesses choose the right formulation, below is a comparison between different whey protein types manufactured at <strong>Gomzi Lifescience</strong>.
                    </p>
                    <div className="whey-comparison-table-wrap">
                        <table className="whey-comparison-table">
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

                {/* ── How to Choose ── */}
                <h2 className="mb-2">How to Choose the Right Whey Protein Type?</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Different whey protein formulations are selected depending on the target market, formulation requirements, and desired protein concentration.
                    </p>
                    <ul className="pl-3">
                        <li className="protein-powder-page-description"><strong>Whey Protein Blend</strong> is commonly used in balanced sports nutrition formulations.</li>
                        <li className="protein-powder-page-description"><strong>100% Whey Protein</strong> is widely used for general fitness supplements.</li>
                        <li className="protein-powder-page-description"><strong>Whey Protein Isolate 90%</strong> is preferred for premium and advanced sports nutrition products.</li>
                        <li className="protein-powder-page-description"><strong>Whey Protein Concentrate 80%</strong> is one of the most commonly used whey protein ingredients in protein powders.</li>
                    </ul>
                </div>

                {/* ── Manufacturing Capability ── */}
                <h2 className="mb-2">Manufacturing Capability</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        At Gomzi Lifescience, we provide manufacturing solutions for all major whey protein formulations used in the sports nutrition industry.
                    </p>
                    <h3 className="mb-2">Our facility supports:</h3>
                    <div className="sub-indent">
                        <ul className="mfg-timeline">
                            {facilitySupports.map((item, idx) => (
                                <li key={idx} className="mfg-timeline-item">
                                    <div className="mfg-timeline-number">{idx + 1}</div>
                                    <div className="mfg-timeline-content">{item}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="protein-powder-page-description">
                        All products are manufactured under certified systems including:{" "}
                        <strong>FSSAI | GMP | HACCP | HALAL | Kosher</strong>
                    </p>
                </div>

            </section>

            {/* Products Section */}
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

            {/* FAQ Section */}
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
                                    <Accordion.Header className="f-18 lp-2">What is Whey Protein Blend?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Whey Protein Blend is a formulation that combines different whey protein sources such as whey protein concentrate and whey protein isolate to achieve a balanced nutritional profile and optimized cost structure. It is commonly used in sports nutrition supplements and daily protein products.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What is the difference between Whey Protein Isolate and Whey Protein Concentrate?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Whey Protein Isolate 90% is a highly purified protein produced through advanced filtration processes that remove most fats and lactose, resulting in faster absorption. Whey Protein Concentrate 80% has a balanced nutritional composition and is one of the most widely used ingredients in sports nutrition supplements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Who can start a whey protein brand with Gomzi Lifescience?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Our whey protein manufacturing services are suitable for Gym Owners, Fitness Trainers, Sports Nutrition Brands, E-commerce Sellers (Amazon, Flipkart, Shopify), Athletes and Sports Professionals, and Health and Wellness Entrepreneurs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What certifications does Gomzi Lifescience hold?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        All products are manufactured under certified quality systems including FSSAI, GMP, HACCP, HALAL and Kosher standards.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What manufacturing capabilities does Gomzi Lifescience offer?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Our facility supports custom whey protein formulations, private label supplement manufacturing, flavor customization, packaging and labeling, and bulk production for supplement brands.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Which whey protein is best for premium sports nutrition products?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Whey Protein Isolate 90% is preferred for premium and advanced sports nutrition products due to its 90% protein concentration, low lactose and fat content, and fast absorption rate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">What is 100% Whey Protein used for?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        100% Whey Protein formulations are widely used in gym nutrition products, fitness supplements, and athlete-focused protein powders. They are developed to support muscle recovery and daily protein intake requirements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Can I get private label whey protein manufacturing in Surat?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Yes. Gomzi Lifescience LLP is based in Surat and specializes in private label whey protein manufacturing for sports nutrition brands, gym owners, fitness trainers, athletes, and e-commerce businesses.
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

export default WheyProtein;