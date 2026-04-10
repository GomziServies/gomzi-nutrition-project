import React, { useState, useEffect, useRef } from "react";
import ModalVideo from "react-modal-video";
import "../../assets/css/nutrition.css";

const MainVideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `${process.env.PUBLIC_URL}/assets/images/nutrition/nutrition-review-${i + 1}.webp`,
    alt: `nutrition-review-${i + 1}`,
  }));

  const total = images.length;

  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);
  const next = () => setActiveIndex((p) => (p + 1) % total);

  useEffect(() => {
    if (isHovered) return;
    const next = () => setActiveIndex((p) => (p + 1) % total);
    autoPlayRef.current = setInterval(next, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, total]);

  const leftImg = images[activeIndex % total];
  const centerImg = images[(activeIndex + 1) % total];
  const rightImg = images[(activeIndex + 2) % total];

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <section className="happy-section">
        <div className="happy-inner">
          <div className="happy-header">
            <div>
              <div className="happy-deco-line" />
              <p className="happy-label">Testimonials</p>
              <h2 className="happy-title">
                Happy <span>Clients</span>
              </h2>
            </div>
            <div className="happy-counter">
              {String(activeIndex + 1).padStart(2, "0")} /&nbsp;
              {String(total).padStart(2, "0")}
            </div>
          </div>

          <div
            className="happy-carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="happy-carousel-track">
              <div className="happy-slide left">
                <img src={leftImg.src} alt={leftImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String((activeIndex % total) + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="happy-slide center">
                <img src={centerImg.src} alt={centerImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String(((activeIndex + 1) % total) + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="happy-slide right">
                <img src={rightImg.src} alt={rightImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String(((activeIndex + 2) % total) + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="happy-controls">
              <button
                className="happy-ctrl-btn"
                onClick={prev}
                aria-label="Previous"
              >
                <i className="fas fa-arrow-left" />
              </button>
              <button
                className="happy-ctrl-btn"
                onClick={next}
                aria-label="Next"
              >
                <i className="fas fa-arrow-right" />
              </button>

              <div className="happy-ctrl-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`happy-ctrl-dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="happy-ctrl-progress">
                <div
                  className={`happy-ctrl-progress-fill progress-${activeIndex + 1}`}
                />
              </div>
            </div>
          </div>

          <div className="happy-videos">
            <h3 className="happy-videos-title">
              Video <span>Reviews</span>
            </h3>
            <div className="happy-videos-grid">
              {[
                { id: "wuNtHkWxUXY", img: "nutri-review-video-1.webp" },
                { id: "K04q5L7E4S0", img: "nutri-review-video-2.webp" },
                { id: "-UhKGOkjDKQ", img: "nutri-review-video-3.webp" },
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="happy-video-card"
                  onClick={() => openVideoModal(video.id)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nutrition/${video.img}`}
                    alt={`review-video-${idx + 1}`}
                  />
                  <div className="happy-play-btn">
                    <button
                      className="happy-play-circle"
                      aria-label={`Play video ${idx + 1}`}
                    >
                      <i className="fas fa-play" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainVideoSection;
