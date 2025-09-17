import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";

const EnergyDrink = () => {
    const products = [
        {
            id: 1,
            imageSrc:
                "/assets/images/third-party-manufacturing/energy-drink.png",
            productLink: `https://api.whatsapp.com/send?phone=8866842520&text=Hello, I have an inquiry about third-party manufacturing for Performance EAA Drink`,
            productName: "Performance EAA Drink",
        },
        {
            id: 2,
            imageSrc:
                "/assets/images/third-party-manufacturing/energy-drink-cola.png",
            productLink: `https://api.whatsapp.com/send?phone=8866842520&text=Hello, I have an inquiry about third-party manufacturing for Performance Creatine Drink`,
            productName: "Performance Creatine Drink",
        },
        {
            id: 3,
            imageSrc:
                "/assets/images/third-party-manufacturing/energy-drink-green-apple.png",
            productLink: `https://api.whatsapp.com/send?phone=8866842520&text=Hello, I have an inquiry about third-party manufacturing for Performance Pre-Workout Drink`,
            productName: "Performance Pre-Workout Drink",
        },
    ];

    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Third party energy drink in India, Surat",
        image: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/energy-drink.png",
        description:
            "Energy drink manufacturers in India ensure premium high-quality, certified production with white labelling, bulk supply and custom energy drink solutions.",
        brand: {
            "@type": "Brand",
            name: "Gomzilifesciences",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Gomzilifesciences",
            logo: "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
            url: "https://www.gomzilifesciences.in/third-party-manufacturing/energy-drinks",
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
                    name: "Fenil Vadaliya",
                },
                datePublished: "2024-01-11",
                reviewBody:
                    "Product quality is Good and Recommended to Purchase. Highly recommended.",
                name: "Trusted White Label Energy Drinks",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
            },
        ],
    };
    return (
        <div className="tpm-bg">
            <PageMeta
                title="Third party energy drink manufacturers in India, Surat"
                description="Energy drink manufacturers in India ensure premium high-quality, certified production with white labelling, bulk supply and custom energy drink solutions."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <NutritionHeader />

            {/* Banner Section */}
            <div className="energy-drinks-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Protein Powder Banner"
                    className="energy-drinks-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="energy-drinks-content energy-drinks-container">
                <h1 className="energy-drinks-page-title">
                    Third Party{" "}
                    <span className="primory-color">
                        Energy Drink Manufacturers
                    </span>{" "}
                    in Surat, India
                </h1>

                <p className="energy-drinks-page-description">
                    Gomzilifesciences is one of the leading energy drinks
                    manufacturers in India, trusted for third party energy drink
                    manufacturing, beverage solutions, and white label products
                    with certifications from FSSAI, HACCP, GMP, HALAL, and
                    Kosher.
                </p>

                <p className="energy-drinks-page-description">
                    As an experienced energy drink manufacturer, we specialize
                    in delivering high-performance beverages that meet
                    international safety and quality standards. Recognized among
                    the best energy drinks manufacturers in India, we provide
                    complete support for brands looking to expand in the growing
                    sports and fitness segment. Whether you need third party
                    energy drink manufacturers in India or expert third party
                    beverage manufacturers in India, Gomzilifesciences ensures
                    scalable, innovative, and market-ready solutions.
                </p>

                <p className="energy-drinks-page-description">
                    Our product portfolio includes{" "}
                    <strong>Creatine, Ignite Workout, EAA, and BCAA</strong>,
                    crafted to support energy, recovery, and endurance. Creatine
                    is available in unflavored, lemon, and cola; Ignite Workout
                    comes in refreshing fruits and green apple; EAA offers
                    watermelon and guava; while BCAA delivers tangy orange for a
                    delicious boost. These performance drinks are packaged in
                    hygienic 220 ml bottles and tins, designed for convenience
                    and mass appeal.
                </p>

                <p className="energy-drinks-page-description">
                    As a trusted white label products manufacturer, we provide
                    end-to-end services from formulation to attractive
                    packaging, helping businesses launch their own energy drink
                    brand with confidence. Our certified processes ensure
                    safety, innovation, and long-term consumer trust, making us
                    the preferred partner for B2B companies and health-focused
                    brands.
                </p>

                <p className="energy-drinks-page-description">
                    Choose Gomzilifesciences to power your brand with energy
                    drinks that combine taste, performance, and certified
                    quality.
                </p>
            </section>
            <section className="third-party-manufacturing-card-container ">
                <div className="row mt-3">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 col-6 mb-4">
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
                                    >
                                        Enquiry Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <NutritionFooter />
        </div>
    );
};

export default EnergyDrink;
