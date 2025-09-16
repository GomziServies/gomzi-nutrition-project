import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";

const SportsNutritionSupplements = () => {
    const phoneNumber = "8866842520";
    const baseMessage =
        "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc: "/assets/images/third-party-manufacturing/creatine.png",
            productName: "Creatine",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Creatine"
            )}`,
        },
        {
            id: 2,
            imageSrc: "/assets/images/third-party-manufacturing/eaa.png",
            productName: "Eaa",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Eaa"
            )}`,
        },
        {
            id: 3,
            imageSrc:
                "/assets/images/third-party-manufacturing/pre-workout.png",
            productName: "Pre Workout",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Pre Workout"
            )}`,
        },
    ];

    return (
        <div className="tpm-bg">
            <PageMeta
                title="Top Sports Nutrition Manufacturers in India, Surat"
                description="Best sports nutrition manufacturers in India, Surat provide GMP certified products, white label solutions and bulk sports supplement manufacturing products."
            />
            <NutritionHeader />

            {/* Banner Section */}
            <div className="sports-nutrition-supplements-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Protein Powder Banner"
                    className="sports-nutrition-supplements-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="sports-nutrition-supplements-content sports-nutrition-supplements-container">
                <h1 className="sports-nutrition-supplements-page-title">
                    Top Sports{" "}
                    <span className="primory-color">
                        Nutrition Manufacturers
                    </span>{" "}
                    in India, Surat
                </h1>

                <p className="sports-nutrition-supplements-page-description">
                    Gomzilifesciences is one of the most trusted third party
                    sports supplement manufacturers in India, offering private
                    label and white label solutions for brands with FSSAI,
                    HACCP, GMP, HALAL, and Kosher certifications.
                </p>

                <p className="sports-nutrition-supplements-page-description">
                    As leading sports nutrition supplement manufacturers, we
                    provide innovative and science-backed formulations for
                    athletes, fitness enthusiasts, and health-conscious
                    consumers. Whether you are searching for private label
                    sports nutrition manufacturers or need reliable white label
                    products manufacturer support, Gomzilifesciences ensures
                    your brand receives safe, effective, and market-ready
                    solutions.
                </p>

                <p className="sports-nutrition-supplements-page-description">
                    Our expertise also extends to being recognized among trusted
                    Energy drinks manufacturers in India, giving us a strong
                    position across the sports nutrition and performance drinks
                    industry. With years of experience, we help B2B partners
                    build successful supplement brands without heavy investment
                    in infrastructure or R&D.
                </p>

                <p className="sports-nutrition-supplements-page-description">
                    We specialize in premium products such as{" "}
                    <strong>Creatine, Ignite Workout, EAA, and BCAA</strong>.
                    Creatine is available in unflavored, lemon, and cola
                    options; Ignite Workout comes in fruits and green apple
                    flavors; EAA is available in watermelon and guava; while
                    BCAA features tangy orange. All products are offered in
                    hygienic jars of 500 gm, 1 kg, and 2 kg, making them
                    suitable for a wide range of market demands.
                </p>

                <p className="sports-nutrition-supplements-page-description">
                    Backed by internationally recognized certifications and
                    modern facilities, Gomzilifesciences delivers consistent
                    quality and innovation. As both a white label sports
                    nutrition supplements provider and a contract partner for
                    growing brands, we ensure your products stand out with
                    safety, compliance, and consumer appeal.
                </p>

                <p className="sports-nutrition-supplements-page-description">
                    Choose Gomzilifesciences to grow your sports supplement
                    brand with expertise, trust, and global certification.
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

export default SportsNutritionSupplements;
