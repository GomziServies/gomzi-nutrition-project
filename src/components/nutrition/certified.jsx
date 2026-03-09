import React from "react";

const certificates = [
  { file: "nutri-certi-1.webp", name: "HACCP", sub: "Hazard Control Point" },
  { file: "nutri-certi-2.webp", name: "GMP", sub: "Good Manufacturing Practice" },
  { file: "nutri-certi-3.webp", name: "HALAL", sub: "Halal Certified" },
  { file: "nutri-certi-4.webp", name: "KOSHER", sub: "Kosher Certified" },
  { file: "nutri-certi-5.webp", name: "FSSAI", sub: "Licensed & Approved" },
];



const CertifiedProduct = () => {
  return (
    <>
      <section className="gym-cert-section">
        <div className="gym-cert-inner">

        
            
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                  <h2 style={{ fontWeight: "700",fontSize:"42px" }}>
                    CERTIFIED{" "}
                    <span style={{ color: "#86c33a" }}>COMPLIANT</span>{" "}
                    TRUSTED
                  </h2>
                </div>
            {/* <div className="gym-cert-count" aria-hidden="true">0{certificates.length}</div> */}
        

          <div className="gym-cert-grid">
            {certificates.map((cert, index) => (
              <div className="gym-cert-card" key={index}>
                {/* <span className="gym-cert-num">0{index + 1}</span> */}
                <div className="gym-cert-img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/images/nutrition/${cert.file}`}
                    alt={`${cert.name} Certificate`}
                    loading="lazy"
                  />
                </div>
                <div className="gym-cert-label-wrap">
                  <span className="gym-cert-label-name">{cert.name}</span>
                  <span className="gym-cert-label-sub">{cert.sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default CertifiedProduct;