import React, { useState, useEffect, useRef } from "react";
import ModalVideo from "react-modal-video";

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
    autoPlayRef.current = setInterval(next, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, activeIndex]);

  const leftImg   = images[(activeIndex) % total];
  const centerImg = images[(activeIndex + 1) % total];
  const rightImg  = images[(activeIndex + 2) % total];

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

      <style>{`
        
      `}</style>

      <section className="factory-section">
        <div className="factory-inner">

          {/* Header */}
          <div className="factory-header">
             <h2 style={{ fontWeight: "700",fontSize:"42px" }}>
                    MANUFACTURING{" "}
                    <span style={{ color: "#86c33a" }}>UNIT</span>{" "}
                  </h2>
          </div>

          {/* Carousel */}
          <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="carousel-track">
              {/* Left */}
              <div className="carousel-slide left">
                <img src={leftImg.src} alt={leftImg.alt} loading="lazy" />
                {/* <div className="slide-overlay" /> */}
                {/* <span className="slide-number">
                  {String(activeIndex % total + 1).padStart(2, "0")}
                </span> */}
              </div>

              {/* Center */}
              <div className="carousel-slide center">
                <img src={centerImg.src} alt={centerImg.alt} loading="lazy" />
                <div className="slide-overlay" />
                {/* <span className="slide-number">
                  {String((activeIndex + 1) % total + 1).padStart(2, "0")}
                </span> */}
              </div>

              {/* Right */}
              <div className="carousel-slide right">
                <img src={rightImg.src} alt={rightImg.alt} loading="lazy" />
                <div className="slide-overlay" />
                {/* <span className="slide-number">
                  {String((activeIndex + 2) % total + 1).padStart(2, "0")}
                </span> */}
              </div>
            </div>

            {/* Controls */}
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
                  className="ctrl-progress-fill"
                  style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
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