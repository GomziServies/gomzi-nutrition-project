import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";

const EnergyDrink = () => {
    return (
        <>
            <PageMeta
                title="Third party energy drink manufacturers in India, Surat"
                description="Energy drink manufacturers in India ensure premium high-quality, certified production with white labelling, bulk supply and custom energy drink solutions."
            />
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

            <NutritionFooter />
        </>
    );
};

export default EnergyDrink;
