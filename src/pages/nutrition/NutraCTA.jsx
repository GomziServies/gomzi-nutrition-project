export default function NutraceuticalSection() {
  return (
    <>
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        
      `}</style> */}

      <section className="ns-wrap">
        <div className="ns-container">

          {/* ── LEFT ── */}
          <div className="ns-left border-right">
            <h2 className="ns-h2">
              Start Your{" "}
              <span className="ns-green">Nutraceutical Brand</span> Today
            </h2>

            <p className="ns-subtitle">
              Partner with a trusted nutraceutical manufacturer in India offering
              quality, compliance, and scalability under one roof.
            </p>
          </div>

          {/* ── RIGHT ── */}
          <div className="ns-right">
            <div className="ns-quote-card">
              <div className="ns-quote-label">Why Us</div>
              <p className="ns-quote-text">
                Stop promoting {" "}
                <strong>other brands</strong> | Build your  .
                <strong>own</strong> legacy{" "}
                
              </p>
              
            </div>

            <div className="ns-btns">
              <button
                className="btn-p"
                onClick={() =>
                  window.open(
                    "https://wa.me/918320077993?text=Hello%20I%20want%20to%20start%20my%20nutraceutical%20brand",
                    "_blank"
                  )
                }
              >
                
    <i className="fa-brands fa-whatsapp me-2"></i> Request a Quote
                <span className="btn-arrow">→</span>
              </button>
              <a href="tel:+918320077993" className="btn-s">
                
    <i className="fa-solid fa-phone me-2"></i> Talk to Our Manufacturing Expert
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}