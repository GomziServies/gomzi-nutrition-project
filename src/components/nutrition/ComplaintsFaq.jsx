import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/css/complaints.css";

const ComplaintsFaq = ({ faqs }) => {
  const scrollToQrSection = () => {
    const qrEl = document.getElementById("qr-section");
    if (qrEl) {
      qrEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen className="inter-regular">
      {faqs.map((faq, index) => (
        <Accordion.Item
          eventKey={String(index)}
          key={index}
          className="mt-3 p-4"
        >
          <Accordion.Header className="faq-question">
            {faq.question}
          </Accordion.Header>
          <Accordion.Body className="faq-answer">
            <div>{faq.answer}</div>
            <div className="d-flex justify-content-end mt-3">
              <button
                type="button"
                className="hc-faq-more-btn"
                onClick={scrollToQrSection}
              >
                For more
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ComplaintsFaq;
