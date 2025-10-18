import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";

const PeanutButter = () => {
    const phoneNumber = "+918866842520";
    const baseMessage =
        "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc:
                "/assets/images/third-party-manufacturing/peanut-butter.png",
            productName: "Peanut Butter",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Peanut Butter"
            )}`,
        },
    ];

    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: " Crunchy Peanut Butter in Surat, India ",
        image: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/peanut-butter.png",
        description:
            "Peanut butter manufacturer in Surat, India offers reliable third party manufacturing, certified safety, and flexible white label peanut butter services.",
        brand: {
            "@type": "Brand",
            name: "Gomzilifesciences",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Gomzilifesciences",
            logo: "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
            url: "https://www.gomzilifesciences.in/third-party-manufacturing/peanut-butter",
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
                    "Best suppliment manufacturers in India....best quality and affordable pricing !!",
                name: "Trusted White Label Peanut Butter",
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
                title="Crunchy Peanut Butter manufacturer in Surat, India"
                description="Peanut butter manufacturer in Surat, India offers reliable third party manufacturing, certified safety, and flexible white label peanut butter services."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <NutritionHeader />

            {/* Banner Section */}
            <div className="peanut-butter-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Protein Powder Banner"
                    className="peanut-butter-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="peanut-butter-content peanut-butter-container">
                <h1 className="peanut-butter-page-title">
                    Bulk{" "}
                    <span className="primory-color">
                        Peanut Butter Manufacturer
                    </span>{" "}
                    in Surat, India
                </h1>
                <p className="peanut-butter-page-description">
                    Gomzilifesciences is one of the most reliable peanut butter
                    manufacturers in India, offering third party and white label
                    peanut butter solutions with global certifications,
                    including FSSAI, HACCP, GMP, HALAL, and Kosher.
                </p>

                <p className="peanut-butter-page-description">
                    As a leading manufacturer of peanut butter, we specialize in
                    producing high-quality, nutritious spreads designed for both
                    B2B and consumer markets. Recognized among trusted third
                    party peanut butter manufacturers in India, our facility
                    ensures every product meets strict safety and hygiene
                    standards. Positioned strongly as one of the top peanut
                    butter manufacturers in Gujarat, we combine innovation with
                    consistency to serve both local and international markets.
                </p>

                <p className="peanut-butter-page-description">
                    Our product range includes{" "}
                    <strong>
                        Natural Crunchy and Smooth Peanut Butter, Chocolate
                        Crunchy and Smooth Peanut Butter, and Mango Chia Seed
                        Crunchy and Smooth Peanut Butter
                    </strong>
                    . Each variant is crafted to deliver rich taste with high
                    protein and essential nutrients, making them a favorite
                    choice for health-conscious consumers. Available in
                    convenient jars of 250 gm, 500 gm, and 1 kg, these products
                    cater to diverse customer preferences and retail
                    requirements.
                </p>

                <p className="peanut-butter-page-description">
                    Gomzilifesciences is widely regarded as the best peanut
                    butter third party manufacturer in India because of our
                    commitment to quality, taste innovation, and flexible
                    manufacturing. As an experienced white label products
                    manufacturer, we support brands in creating customized
                    peanut butter solutions with attractive packaging and strong
                    market appeal.
                </p>

                <p className="peanut-butter-page-description">
                    Partner with Gomzilifesciences to build your peanut butter
                    brand with certified quality, trust, and innovation.
                </p>

                <p className="energy-drinks-page-description">
                    Our Peanut Butter Sample Range To help our clients experience product quality before bulk orders, we provide 100 gm <a href="https://best-supplement-manufacturer.gomzilifesciences.in/" target="_blank">Peanut Butter sample packs </a>in a variety of flavors:
                    <ul className="pl-3">
                        <li>
                            Natural Peanut Butter (100 gm) - Pure, smooth, and protein-rich.
                        </li>
                        <li>
                            Chocolate Peanut Butter (100 gm) - A delightful mix of taste and nutrition. 
                        </li>
                        <li>
                            Mango Peanut Butter (100 gm) - Unique and refreshing for innovative brand launches. 
                        </li>
                    </ul>
                </p>

                <p className="energy-drinks-page-description">
                    Each sample pack is designed to help clients test taste, consistency, and market acceptance before scaling up production. If you are comparing options, our competitive peanut butter price 100gm makes it easy to evaluate both quality and affordability. 
                </p>

                <h4>Customization Options for Brands</h4>

                <p className="energy-drinks-page-description">
                    At Gomzilifesciences, we understand that every brand has unique requirements. That's why we offer:
                    <ul className="pl-3">
                        <li>
                            Customized protein percentages to suit different market segments.
                        </li>
                        <li>
                            Flexibility in flavors and textures.
                        </li>
                        <li>
                            The cheapest and best bulk pricing without compromising quality.
                        </li>
                    </ul>
                </p>
                <p className="energy-drinks-page-description">
                    Whether you are a startup looking to launch your own peanut butter brand or an established company expanding your product line, Gomzilifesciences offers the perfect white label and third party peanut butter manufacturing solutions in Surat, India.
                </p>
            </section>
            <section className="third-party-manufacturing-card-container ">
                <div className="row mt-3 justify-content-center">
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

export default PeanutButter;
