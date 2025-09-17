import "../../assets/css/thirdParty.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import PageMeta from "../../components/PageMeta";
import { Helmet } from "react-helmet";

const ProteinPowder = () => {
    const phoneNumber = "8866842520";
    const baseMessage =
        "Hello, I have an inquiry about third-party manufacturing for ";

    const products = [
        {
            id: 1,
            imageSrc:
                "/assets/images/third-party-manufacturing/concentrate.png",
            productName: "Whey Protein Concentrate",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Whey Protein Concentrate"
            )}`,
        },
        {
            id: 2,
            imageSrc: "/assets/images/third-party-manufacturing/isolate.png",
            productName: "Whey Protein Isolate",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Whey Protein Isolate"
            )}`,
        },
        {
            id: 3,
            imageSrc: "/assets/images/third-party-manufacturing/protein.png",
            productName: "Whey Protein 100%",
            productLink: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                baseMessage + "Whey Protein 100%"
            )}`,
        },
    ];

    const schemaData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Third Party Protein Powder in India, Surat",
        image: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/protein.png",
        description:
            "Third party protein powder manufacturers in India, Surat provide reliable bulk manufacturing, certified approved quality and flexible premium white labelling.",
        brand: {
            "@type": "Brand",
            name: "Gomzilifesciences",
        },
        manufacturer: {
            "@type": "Organization",
            name: "Gomzilifesciences",
            logo: "https://www.gomzilifesciences.in/assets/images/logo/nutrition-logo.webp",
            url: "https://www.gomzilifesciences.in/third-party-manufacturing/protein-powder",
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
                    name: "KotadiyaPrakash mohanb",
                },
                datePublished: "2025-01-01",
                reviewBody:
                    "All type of protein available. Very Good Hygiene maintain.",
                name: "Trusted White Label Protein Powder",
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
                title="Third Party Protein Powder manufacturers in India, Surat"
                description="Third party protein powder manufacturers in India, Surat provide reliable bulk manufacturing, certified approved quality and flexible premium white labelling."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
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
            {/* Products Section */}
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

export default ProteinPowder;
