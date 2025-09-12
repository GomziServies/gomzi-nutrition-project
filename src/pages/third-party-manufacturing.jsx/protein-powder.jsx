import React from "react";
import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";

const ProteinPowder = () => {
    return (
        <>
            <PageMeta
                title="Third Party Protein Powder manufacturers in India, Surat"
                description="Third party protein powder manufacturers in India, Surat provide reliable bulk manufacturing, certified approved quality and flexible premium white labelling."
            />
            <NutritionHeader />

            {/* Banner Section */}
            <div className="protein-powder-banner">
                <img
                    src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                    alt="Protein Powder Banner"
                    className="protein-powder-banner-image"
                />
            </div>

            {/* Heading + Paragraph Section */}
            <section className="protein-powder-content protein-powder-container">
                <h1 className="protein-powder-page-title">
                    Third Party{" "}
                    <span className="primory-color">
                        Protein Powder Manufacturers
                    </span>{" "}
                    in India, Surat
                </h1>
                <p className="protein-powder-page-description">
                    Gomzilifesciences is one of the most reliable protein powder
                    manufacturers in Surat India, offering third party and white
                    label protein solutions with FSSAI, HACCP, GMP, HALAL, and
                    Kosher certifications.
                </p>

                <p className="protein-powder-page-description">
                    As a trusted partner in the nutrition industry,
                    Gomzilifesciences is recognized among established protein
                    powder manufacturers in Gujarat and across India. Our
                    expertise as protein powder third party manufacturers in
                    India ensures that businesses receive safe, innovative, and
                    scalable products tailored to their brand identity.
                </p>

                <p className="protein-powder-page-description">
                    Our protein product line includes{" "}
                    <strong>
                        Whey Protein, Whey Protein Blend, Whey Protein Isolate,
                        and Whey Concentrate
                    </strong>
                    . Each of these is carefully formulated to support muscle
                    growth, recovery, and overall health. Exciting flavors
                    include Chocolate, Mava Kulfi, Coffee, and Mango — packed in
                    hygienic jars of 500 gm, 1 kg, and 2 kg.
                </p>

                <p className="protein-powder-page-description">
                    At Gomzilifesciences, quality assurance is at the core of
                    everything we do. Every batch is produced under certified
                    facilities, reflecting our focus on safety, trust, and
                    global acceptance. As a recognized white label protein
                    manufacturer in India, we provide complete support from
                    formulation to packaging, enabling businesses to launch
                    their own protein supplement brands with confidence.
                </p>

                <p className="protein-powder-page-description">
                    Choose Gomzilifesciences to partner with a manufacturer that
                    blends expertise, compliance, and innovation.
                </p>
            </section>

            <NutritionFooter />
        </>
    );
};

export default ProteinPowder;
