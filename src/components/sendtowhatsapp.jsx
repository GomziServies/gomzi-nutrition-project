import React from "react";
import "../assets/css/nutrition.css";

function sendToWhatsApp(text, option) {
  if (!text) {
    text = `Hi, I have come across ${window.location.href}. Can you provide more information about this?`;
  }

  if (option) {
    if (option.pageRef) {
      text += `\n\nI found your contact details from ${
        window.location.origin + window.location.pathname
      }`;
    }
  }

  let url = `https://api.whatsapp.com/send?phone=+918320077993&text=${encodeURIComponent(
    text,
  )}`;
  window.open(url, "_blank");
}

function WhatsAppAnchor({ message, options }) {
  const handleClick = () => {
    sendToWhatsApp(message, options);
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-started mt-2 whatsApp-btn-fts-16 "
    >
      <i className="fab fa-whatsapp mr-2 whatsApp-btn-fts-16-i"></i>
      WhatsApp
    </button>
  );
}

export default WhatsAppAnchor;
