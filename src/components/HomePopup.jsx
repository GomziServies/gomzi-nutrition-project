import React, { useState, useEffect } from "react";
import "./../assets/css/HomePopup.css";

const HomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      setIsOpen(true);
    };

    // Initial popup after 5 seconds
    const initialTimer = setTimeout(() => {
      showPopup();
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    let recurringTimer;
    // When popup is closed, set a timer to open it again after 2 minutes (120000 ms)
    if (!isOpen) {
      recurringTimer = setTimeout(() => {
        setIsOpen(true);
      }, 120000);
    }
    return () => clearTimeout(recurringTimer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="home-popup-overlay">
      <div className="home-popup-content">
        <button className="home-popup-close-left" onClick={handleClose}>
          &times;
        </button>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/popup-image.webp"}
          alt="Celebrate Together"
          className="home-popup-image"
        />
        <h2 className="home-popup-tagline">
          A Healthier way to Celebrate Together💪🏼
        </h2>
        <h3 className="home-popup-sub-tagline">Make your own gift box 🎁</h3>
        <a
          href="https://wa.me/918320077993?text=Hi!%20I%20would%20like%20to%20inquire%20about%20gift%20box.%20I%20found%20it%20via%20the%20Gomzi%20Lifesciences%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="home-popup-inquire-btn"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
};

export default HomePopup;
