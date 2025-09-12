import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";

const PeanutButter = () => {
    return (
        <>
            <PageMeta
                title="Crunchy Peanut Butter manufacturer in Surat, India"
                description="Peanut butter manufacturer in Surat, India offers reliable third party manufacturing, certified safety, and flexible white label peanut butter services."
            />

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
            </section>

            <NutritionFooter />
        </>
    );
};

export default PeanutButter;
