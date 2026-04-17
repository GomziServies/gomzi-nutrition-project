import React, { useState, useEffect, useRef } from "react";
import ModalVideo from "react-modal-video";
import "../assets/css/thirdParty.css";

const FactoryPhotoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const images = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    src: `${process.env.PUBLIC_URL}/assets/images/nutrition/nutrition-factory-${i + 1}.webp`,
    alt: `nutrition-factory-${i + 1}`,
  }));

  const total = images.length;

  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);
  const next = () => setActiveIndex((p) => (p + 1) % total);

  useEffect(() => {
    if (isHovered) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % total);
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, total]);

  const leftImg = images[activeIndex % total];
  const centerImg = images[(activeIndex + 1) % total];
  const rightImg = images[(activeIndex + 2) % total];

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <section className="factory-section">
        <div className="factory-inner">
          <div className="factory-header">
            <h2 className="manufacturing-unit-title-fw-fs barlow-condensed-extra">
              MANUFACTURING{" "}
              <span className="manufacturing-unit-title">UNIT</span>{" "}
            </h2>
          </div>

          <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="carousel-track">
              <div className="carousel-slide left">
                <img src={leftImg.src} alt={leftImg.alt} loading="lazy" />
              </div>

              <div className="carousel-slide center">
                <img src={centerImg.src} alt={centerImg.alt} loading="lazy" />
                <div className="slide-overlay" />
              </div>

              <div className="carousel-slide right">
                <img src={rightImg.src} alt={rightImg.alt} loading="lazy" />
                <div className="slide-overlay" />
              </div>
            </div>

            <div className="carousel-controls">
              <button className="ctrl-btn" onClick={prev} aria-label="Previous">
                <i className="fas fa-arrow-left" />
              </button>
              <button className="ctrl-btn" onClick={next} aria-label="Next">
                <i className="fas fa-arrow-right" />
              </button>

              <div className="ctrl-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`ctrl-dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="ctrl-progress">
                <div
                  className={`ctrl-progress-fill progress-${activeIndex + 1}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FactoryPhotoSection;
