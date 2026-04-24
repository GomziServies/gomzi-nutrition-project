import React from "react";
import "../../assets/css/nutrition.css";

const certificates = [
  { file: "nutri-certi-1.webp", name: "HACCP", sub: "Hazard Control Point" },
  {
    file: "nutri-certi-2.webp",
    name: "GMP",
    sub: "Good Manufacturing Practice",
  },
  { file: "nutri-certi-3.webp", name: "HALAL", sub: "Halal Certified" },
  { file: "nutri-certi-4.webp", name: "KOSHER", sub: "Kosher Certified" },
  { file: "nutri-certi-5.webp", name: "FSSAI", sub: "Licensed & Approved" },
];

const CertifiedProduct = () => {
  return (
    <>
      <section className="gym-cert-section">
        <div className="gym-cert-inner">
          <div className="certified-compliant-div">
            <h2 className="certified-compliant-div-h2 barlow-condensed-extra">
              CERTIFIED{" "}
              <span className="certified-compliant-div-hspan">COMPLIANT</span>{" "}
              TRUSTED
            </h2>
          </div>

          <div className="gym-cert-grid">
            {certificates.map((cert, index) => {
              const filePath =
                process.env.PUBLIC_URL +
                `/assets/images/nutrition/${cert.file}`;

              return (
                <div className="gym-cert-card" key={index}>
                  <div className="gym-cert-img-wrap">
                    <img
                      src={filePath}
                      alt={`${cert.name} Certificate`}
                      loading="lazy"
                    />
                  </div>

                  <div className="gym-cert-label-wrap">
                    <span className="gym-cert-label-name barlow-condensed-semi">
                      {cert.name}
                    </span>
                    <span className="gym-cert-label-sub inter-regular">
                      {cert.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertifiedProduct;
