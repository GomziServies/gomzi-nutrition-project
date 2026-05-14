import RequestQuoteButton from "../../components/nutrition/RequestQuoteButton";

export default function NutraceuticalSection() {
  return (
    <>
      <section className="ns-wrap">
        <div className="ns-container">
          <div className="ns-left border-right">
            <h2 className="ns-h2 barlow-condensed-semi">
              Start Your <span className="ns-green">Nutraceutical Brand</span>{" "}
              Today
            </h2>

            <p className="ns-subtitle inter-regular">
              Partner with a trusted nutraceutical End-to-end brand launch
              partner, in India offering quality, compliance, and scalability
              under one roof.
            </p>
          </div>

          <div className="ns-right">
            <div className="ns-quote-card">
              <div className="ns-quote-label barlow-condensed-semi">Why Us</div>
              <p className="ns-quote-text inter-500">
                Stop promoting <strong>other brands</strong> | Build your{" "}
                <strong>own</strong> legacy{" "}
              </p>
            </div>

            <div className="ns-btns">
              <RequestQuoteButton
                className="btn-p barlow-condensed-semi"
                text={"Request a Quote →"}
                subject={"request a quote"}
              />

              <a href="tel:+918320077993" className="btn-s inter-500">
                <i className="fa-solid fa-phone me-2"></i> Talk to Our
                Manufacturing Expert
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
