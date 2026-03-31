import "../../assets/css/thirdParty.css";
import { useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const NutritionTableWithReadMore = ({ data, col1Key, col2Key, col1Label, col2Label, initialRows = 10 }) => {
    const [expanded, setExpanded] = useState(false);
    const visibleData = expanded ? data : data.slice(0, initialRows);
    return (
        <div className="multivit-nutrition-table-wrap">
            <table className="multivit-nutrition-table">
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
                <div style={{ textAlign: "center", margin: "12px 0 4px" }}>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            background: "#86c33a",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "8px 28px",
                            fontSize: "15px",
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 600,
                            cursor: "pointer",
                            letterSpacing: "0.3px",
                            transition: "background 0.2s",
                        }}
                        onMouseOver={e => e.currentTarget.style.background = "#6aa82e"}
                        onMouseOut={e => e.currentTarget.style.background = "#86c33a"}
                    >
                        {expanded ? "Read Less ▲" : `Read More ▼ (${data.length - initialRows} more)`}
                    </button>
                </div>
            )}
        </div>
    );
};

const MultivitaminTablet = () => {
    const phoneNumber = "+918866842520";
    const baseMessage =
        "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc: "/assets/images/third-party-manufacturing/multivitamin-general.png",
            productName: "General Wellness Multivitamin",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "General Wellness Multivitamin Tablet")}`,
        },
        {
            id: 2,
            imageSrc: "/assets/images/third-party-manufacturing/multivitamin-immunity.png",
            productName: "Immune Support Multivitamin",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Immune Support Multivitamin Tablet")}`,
        },
        {
            id: 3,
            imageSrc: "/assets/images/third-party-manufacturing/multivitamin-active.png",
            productName: "Active Lifestyle Multivitamin",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Active Lifestyle Multivitamin Tablet")}`,
        },
        {
            id: 4,
            imageSrc: "/assets/images/third-party-manufacturing/multivitamin-daily.png",
            productName: "Daily Nutrition Multivitamin",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + "Daily Nutrition Multivitamin Tablet")}`,
        },
    ];

    const schemaData = [
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Multivitamin Tablet Manufacturer in India | Private Label Nutraceutical Manufacturing",
            "image": "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/multivitamin-general.png",
            "description": "We offer complete multivitamin tablet third party manufacturing services for nutraceutical brands, pharmaceutical companies, and healthcare startups. Custom formulations, private label manufacturing, FSSAI and GMP certified.",
            "brand": { "@type": "Brand", "name": "Gomzilifesciences" },
            "manufacturer": {
                "@type": "Organization",
                "name": "Gomzilifesciences",
                "logo": "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
                "url": "https://www.gomzilifesciences.in/third-party-manufacturing/multivitamin-tablet"
            },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "28" },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is the minimum order quantity for multivitamin tablet manufacturing?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum order quantities depend on the formulation and packaging requirements. We offer flexible production options suitable for both startups and established supplement brands." } },
                { "@type": "Question", "name": "Do you provide private label multivitamin manufacturing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our services include complete private label supplement manufacturing, including formulation development, production, packaging, and labeling." } },
                { "@type": "Question", "name": "Can you create custom multivitamin formulations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our R&D team can develop customized multivitamin formulations based on the nutritional requirements and target market of your brand." } },
                { "@type": "Question", "name": "Are your supplements manufactured according to regulatory guidelines?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our manufacturing facility follows FSSAI guidelines and GMP quality standards to ensure product safety and compliance." } }
            ]
        }
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
        { vitamin: "Vitamin D3", benefit: "Supports bone health and calcium absorption" },
        { vitamin: "Vitamin E", benefit: "Protects cells from oxidative stress" },
        { vitamin: "Vitamin K2", benefit: "Supports bone and cardiovascular health" },
        { vitamin: "Vitamin B Complex", benefit: "Helps improve metabolism and energy production" },
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
        { ingredient: "Grape Seed Extract", benefit: "Powerful antioxidant support" },
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
            description1: "As a trusted multivitamin tablet manufacturer, we develop advanced formulations that combine essential vitamins, minerals, amino acids, herbal extracts, and antioxidants.",
            description2: "Our scientifically designed formulations help support immunity, energy metabolism, and overall wellness, produced using carefully selected raw materials and advanced manufacturing processes.",
            features: [
                { icon: faFlask,        label: "Custom nutraceutical formulation support" },
                { icon: faMicroscope,   label: "Scientifically designed compositions" },
                { icon: faShieldHalved, label: "Supports immunity and energy" },
                { icon: faLeaf,         label: "High-quality raw materials" },
            ],
        },
        {
            id: 2,
            title: "Complete Third Party Manufacturing Services",
            description1: "We provide complete multivitamin third party manufacturing services for nutraceutical brands, pharmaceutical companies, and healthcare startups.",
            description2: "Our company offers reliable contract manufacturing for multivitamin supplements, helping brands launch their own products in the market.",
            features: [
                { icon: faIndustry,     label: "Large-scale production capacity" },
                { icon: faTag,          label: "Private label supplement manufacturing" },
                { icon: faBoxOpen,      label: "Flexible packaging and labeling" },
                { icon: faCheckCircle,  label: "Regulatory documentation support" },
            ],
        },
        {
            id: 3,
            title: "General Wellness Multivitamin",
            description1: "Our general wellness multivitamin tablets are formulated with a comprehensive blend of essential vitamins, minerals, amino acids, antioxidants, and herbal extracts to support overall health.",
            description2: "Suitable for daily use, these tablets are designed for supplement brands targeting general wellness and preventive healthcare markets.",
            features: [
                { icon: faHeartPulse,   label: "Supports overall daily health" },
                { icon: faBolt,         label: "Improves energy and metabolism" },
                { icon: faStar,         label: "Comprehensive nutrient blend" },
                { icon: faUsers,        label: "Ideal for wellness supplement brands" },
            ],
        },
        {
            id: 4,
            title: "Immune Support & Active Lifestyle Multivitamin",
            description1: "Our immune support and active lifestyle multivitamin formulations are developed for supplement brands targeting fitness enthusiasts, athletes, and health-conscious consumers.",
            description2: "These formulations include carefully selected vitamins, minerals, and antioxidants to support immune defense and active daily nutrition requirements.",
            features: [
                { icon: faShieldHalved, label: "Targeted immune support formula" },
                { icon: faTrophy,       label: "Designed for active lifestyle brands" },
                { icon: faCapsules,     label: "High bioavailability formulation" },
                { icon: faCheckCircle,  label: "Suitable for fitness supplement brands" },
            ],
        },
    ];

    const productSpecs = [
        { specification: "Manufacturer",   details: "Gomzi Lifescience LLP" },
        { specification: "Form",           details: "Tablet" },
        { specification: "Packaging Size", details: "Customizable (30 tabs, 60 tabs, 90 tabs or as required)" },
        { specification: "Packaging Type", details: "HDPE Bottle / Blister Pack / Strip Packaging" },
        { specification: "Composition",    details: "As Per Brand Requirement" },
        { specification: "Shelf Life",     details: "24 Months" },
        { specification: "Delivery Time",  details: "15–20 Days" },
        { specification: "Branding",       details: "Private Label & White Labelling Available" },
        { specification: "Certifications", details: "FSSAI, GMP" },
        { specification: "Applications",   details: "General Wellness, Immunity, Daily Nutrition, Active Lifestyle" },
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

                    /* Nutrition Table */
                    .multivit-nutrition-table-wrap { overflow-x: auto; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); margin-bottom: 24px; }
                    .multivit-nutrition-table {
                        width: 100%; border-collapse: collapse;
                        font-family: 'Roboto', sans-serif; font-size: 15px;
                    }
                    .multivit-nutrition-table thead tr { background: #86c33a; color: #fff; }
                    .multivit-nutrition-table thead th { padding: 12px 18px; font-weight: 700; font-size: 15px; }
                    .multivit-nutrition-table tbody tr { border-bottom: 1px solid #e8f5e1; }
                    .multivit-nutrition-table tbody tr:nth-child(even) { background: #f4fbed; }
                    .multivit-nutrition-table tbody tr:last-child { border-bottom: none; }
                    .multivit-nutrition-table tbody td { padding: 10px 18px; color: #333; }
                    .multivit-nutrition-table tbody td:first-child { font-weight: 600; color: #555; }

                    /* Benefits grid styling */
                    .multivit-benefits-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 12px;
                        margin: 12px 0 20px;
                    }
                    .multivit-benefits-item {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 14px 16px;
                        background: #f4fbed;
                        border-left: 4px solid #86c33a;
                        border-radius: 6px;
                        font-family: 'Roboto', sans-serif;
                        font-size: 15px;
                        color: #333;
                        line-height: 1.4;
                    }
                    .multivit-benefits-check {
                        color: #86c33a;
                        font-weight: 700;
                        font-size: 18px;
                        flex-shrink: 0;
                    }
                    @media (max-width: 768px) {
                        .multivit-benefits-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                    @media (max-width: 480px) {
                        .multivit-benefits-grid { grid-template-columns: 1fr; }
                    }

                    /* 2-col grid for 4-item lists */
                    .multivit-2col-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                        margin: 12px 0 20px;
                    }
                    /* 3-col grid for 5-item lists */
                    .multivit-3col-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 12px;
                        margin: 12px 0 20px;
                    }
                    .multivit-grid-item {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 14px 16px;
                        background: #f4fbed;
                        border-left: 4px solid #86c33a;
                        border-radius: 6px;
                        font-family: 'Roboto', sans-serif;
                        font-size: 15px;
                        color: #333;
                        line-height: 1.4;
                    }
                    .multivit-grid-check {
                        color: #86c33a;
                        font-weight: 700;
                        font-size: 18px;
                        flex-shrink: 0;
                    }
                    @media (max-width: 768px) {
                        .multivit-2col-grid { grid-template-columns: 1fr; }
                        .multivit-3col-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                    @media (max-width: 480px) {
                        .multivit-3col-grid { grid-template-columns: 1fr; }
                    }
                `}</style>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <NutritionHeader />

            {/* Banner Section */}
            <div className="protein-powder-banner">
                <img
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
                    alt="Multivitamin Tablet Manufacturer Banner"
                    className="protein-powder-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="protein-powder-content protein-powder-container">
                <h1 className="protein-powder-page-title">
                    Multivitamin Tablet{" "}
                    <span className="primory-color">Manufacturer in India</span>{" "}
                    | Private Label Nutraceutical Manufacturing
                </h1>

                <h2 className="mb-2">Complete Multivitamin Tablet Manufacturing Solutions for Nutraceutical Brands</h2>

                <p className="protein-powder-page-description">
                    Multivitamin supplements are among the most popular nutraceutical products worldwide due to increasing awareness about preventive healthcare and nutritional deficiencies. Multivitamins provide a balanced combination of vitamins, minerals, antioxidants, and other essential nutrients that support overall wellness.
                </p>
                <p className="protein-powder-page-description">
                    Our company offers multivitamin third party manufacturing services for nutraceutical brands, pharmaceutical companies, healthcare startups, and supplement distributors looking to launch their own private label products.
                </p>
                <p className="protein-powder-page-description">
                    With advanced infrastructure, experienced R&D teams, and high-quality raw materials, we provide custom multivitamin formulation, manufacturing, packaging, and private label solutions for domestic and international markets.
                </p>

                {/* ── Product Categories ── */}
                <h2 className="mb-2">Our Multivitamin Manufacturing Solutions</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        We manufacture different multivitamin formulations depending on the target health segment, nutritional requirements, and intended application.
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

                {/* ── Nutritional Composition ── */}
                <h2 className="mb-2">Nutritional Composition of Multivitamin Tablets</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Our multivitamin tablets are formulated with a comprehensive blend of essential vitamins, minerals, amino acids, antioxidants, and herbal extracts to support overall health and wellness. The following table shows the nutritional composition per tablet.
                    </p>
                    <NutritionTableWithReadMore
                        data={nutritionData}
                        col1Key="nutrient"
                        col2Key="amount"
                        col1Label="Nutrient"
                        col2Label="Amount Per Tablet"
                        initialRows={10}
                    />

                    {/* Essential Vitamins */}
                    <h3 className="mb-2">Essential Vitamins</h3>
                    <div className="sub-indent">
                        <p className="protein-powder-page-description">
                            Our multivitamin tablets contain important vitamins that support daily nutritional needs and overall health.
                        </p>
                        <NutritionTableWithReadMore
                            data={vitaminsData}
                            col1Key="vitamin"
                            col2Key="benefit"
                            col1Label="Vitamin"
                            col2Label="Key Benefit"
                            initialRows={10}
                        />
                        <p className="protein-powder-page-description">
                            These essential vitamins make our product suitable for brands looking for high-quality multivitamin supplement manufacturing.
                        </p>
                    </div>

                    {/* Essential Minerals */}
                    <h3 className="mb-2">Essential Minerals</h3>
                    <div className="sub-indent">
                        <p className="protein-powder-page-description">
                            Minerals are equally important for maintaining metabolic balance, nerve function, and bone strength. Our formulations include carefully balanced mineral blends that complement the vitamin profile.
                        </p>
                        <NutritionTableWithReadMore
                            data={mineralsData}
                            col1Key="mineral"
                            col2Key="benefit"
                            col1Label="Mineral"
                            col2Label="Health Benefit"
                            initialRows={10}
                        />
                        <p className="protein-powder-page-description">
                            Balanced mineral composition ensures optimal nutrient absorption and nutritional effectiveness.
                        </p>
                    </div>

                    {/* Amino Acids and Antioxidants */}
                    <h3 className="mb-2">Amino Acids and Antioxidants</h3>
                    <div className="sub-indent">
                        <p className="protein-powder-page-description">
                            To improve the nutritional value of our multivitamin supplements, the formulation also includes amino acids and antioxidants.
                        </p>
                        <NutritionTableWithReadMore
                            data={aminoAcidsData}
                            col1Key="ingredient"
                            col2Key="benefit"
                            col1Label="Ingredient"
                            col2Label="Benefit"
                            initialRows={10}
                        />
                        <p className="protein-powder-page-description">
                            These ingredients enhance the effectiveness of the multivitamin formulation and support overall vitality.
                        </p>
                    </div>
                </div>

                {/* ── Benefits ── */}
                <h2 className="mb-2">Benefits of Multivitamin Tablets</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Our multivitamin tablets are designed to support daily nutritional needs and overall wellness.
                    </p>
                    <h3 className="mb-2">Key Benefits</h3>
                    <div className="sub-indent">
                        <div className="multivit-benefits-grid">
                            {keyBenefits.map((benefit, idx) => (
                                <div key={idx} className="multivit-benefits-item">
                                    <span className="multivit-benefits-check">✓</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <p className="protein-powder-page-description mt-3">
                            These benefits make our products ideal for brands looking for nutraceutical multivitamin supplement manufacturing.
                        </p>
                    </div>
                </div>

                {/* ── Manufacturing Services ── */}
                <h2 className="mb-2">Multivitamin Third Party Manufacturing Services</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        We provide complete multivitamin third party manufacturing services for nutraceutical brands, pharmaceutical companies, and healthcare startups.
                    </p>
                    <p className="protein-powder-page-description">
                        Our company offers reliable contract manufacturing for multivitamin supplements, helping brands launch their own products in the market.
                    </p>
                    <h3 className="mb-2">Our Services Include:</h3>
                    <div className="sub-indent">
                        <ul className="mfg-timeline">
                            {manufacturingServices.map((item, idx) => (
                                <li key={idx} className="mfg-timeline-item">
                                    <div className="mfg-timeline-number">{idx + 1}</div>
                                    <div className="mfg-timeline-content">{item}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="protein-powder-page-description">
                        As an experienced multivitamin tablet manufacturer, we help businesses develop high-quality dietary supplements under their own brand name.
                    </p>
                </div>

                {/* ── Packaging Options ── */}
                <h2 className="mb-2">Packaging Options</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        We provide flexible packaging solutions for multivitamin tablets and nutraceutical supplements.
                    </p>
                    <h3 className="mb-2">Available Packaging Options:</h3>
                    <div className="sub-indent">
                        <ul className="pl-3">
                            <li className="protein-powder-page-description">HDPE bottles</li>
                            <li className="protein-powder-page-description">Blister packs</li>
                            <li className="protein-powder-page-description">Strip packaging</li>
                        </ul>
                        <p className="protein-powder-page-description">
                            Our packaging solutions support brands looking for private label multivitamin supplements.
                        </p>
                    </div>
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

                {/* ── Quality Standards ── */}
                <h2 className="mb-2">Quality Standards</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        As a reliable nutraceutical manufacturing company, we follow strict quality control standards to ensure product safety and effectiveness.
                    </p>
                    {/* <h3 className="mb-2">Quality Standards:</h3> */}
                    <div className="sub-indent">
                        <div className="multivit-2col-grid">
                            {[
                                "FSSAI compliant manufacturing",
                                "GMP certified production facility",
                                "High-quality raw ingredients",
                                "Third-party quality testing",
                            ].map((item, idx) => (
                                <div key={idx} className="multivit-grid-item">
                                    <span className="multivit-grid-check">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="protein-powder-page-description">
                            These standards make us a trusted multivitamin tablet manufacturer in India.
                        </p>
                    </div>
                </div>

                {/* ── Applications ── */}
                <h2 className="mb-2">Applications of Multivitamin Tablets</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Multivitamin supplements are used across multiple health and wellness segments.
                    </p>
                    <h3 className="mb-2">Common applications include:</h3>
                    <div className="sub-indent">
                        <div className="multivit-2col-grid">
                            {[
                                "General wellness supplements",
                                "Daily nutrition products",
                                "Immune support formulations",
                                "Active lifestyle and fitness supplements",
                            ].map((item, idx) => (
                                <div key={idx} className="multivit-grid-item">
                                    <span className="multivit-grid-check">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Who Can Launch ── */}
                <h2 className="mb-2">Who Can Launch Multivitamin Brands</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        Our manufacturing solutions are suitable for a wide range of businesses entering the dietary supplement market.
                    </p>
                    <strong style={{ fontSize: "20px" }}>These include:</strong>
                    <div className="multivit-3col-grid mt-2">
                        {[
                            "Nutraceutical startups",
                            "Fitness and wellness brands",
                            "Pharmaceutical companies",
                            "Healthcare distributors",
                            "Online supplement businesses",
                        ].map((item, idx) => (
                            <div key={idx} className="multivit-grid-item">
                                <span className="multivit-grid-check">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Why Choose Us ── */}
                <h2 className="mb-2">Why Choose Us as Your Multivitamin Manufacturer</h2>
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

                {/* ── CTA ── */}
                <h2 className="mb-2">Start Your Multivitamin Brand with Our Manufacturing Services</h2>
                <div className="section-indent">
                    <p className="protein-powder-page-description">
                        If you are looking for a reliable multivitamin tablet manufacturer, our team provides complete nutraceutical manufacturing solutions designed to support new and established supplement brands.
                    </p>
                    <p className="protein-powder-page-description">
                        From product formulation and manufacturing to packaging and labeling, we help businesses develop high-quality dietary supplements ready for the market.
                    </p>
                    <p className="protein-powder-page-description">
                        Get in touch with our team to discuss your supplement manufacturing requirements and start building your nutraceutical brand.
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
                                    <Accordion.Header className="f-18 lp-2">What is the minimum order quantity for multivitamin tablet manufacturing?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Minimum order quantities depend on the formulation and packaging requirements. We offer flexible production options suitable for both startups and established supplement brands.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Do you provide private label multivitamin manufacturing?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Yes. Our services include complete private label supplement manufacturing, including formulation development, production, packaging, and labeling.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Can you create custom multivitamin formulations?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Yes. Our R&D team can develop customized multivitamin formulations based on the nutritional requirements and target market of your brand.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="mt-3 p-4">
                                    <Accordion.Header className="f-18 lp-2">Are your supplements manufactured according to regulatory guidelines?</Accordion.Header>
                                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                                        Yes. Our manufacturing facility follows FSSAI guidelines and GMP quality standards to ensure product safety and compliance.
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

export default MultivitaminTablet;