import React, { useState, useEffect, useRef } from "react";
import ModalVideo from "react-modal-video";

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
    autoPlayRef.current = setInterval(next, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, activeIndex]);

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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .happy-section {
          background: #ffffff;
          padding: 80px 0;
          font-family: 'DM Sans', sans-serif;
        }

        .happy-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .happy-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
        }

        .happy-deco-line {
          width: 40px;
          height: 2px;
          background: #86c33a;
          margin-bottom: 12px;
        }

        .happy-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #86c33a;
          margin-bottom: 10px;
        }

        .happy-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 6vw, 72px);
          color: #111111;
          line-height: 1;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .happy-title span {
          color: #86c33a;
        }

        .happy-counter {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          color: rgba(0,0,0,0.08);
          line-height: 1;
          user-select: none;
        }

        /* Carousel */
        .happy-carousel-wrapper {
          position: relative;
        }

        .happy-carousel-track {
          display: grid;
          grid-template-columns: 1fr 1.8fr 1fr;
          gap: 16px;
          align-items: center;
        }

        .happy-slide {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #f0f0f0;
          aspect-ratio: 3/4;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .happy-slide.center {
          aspect-ratio: 4/4;
          transform: scale(1.06);
          box-shadow: 0 16px 48px rgba(0,0,0,0.18);
          border-radius: 10px;
          z-index: 2;
        }

        .happy-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
          filter: brightness(0.9) saturate(0.95);
        }

        .happy-slide:hover img {
          transform: scale(1.06);
          filter: brightness(1) saturate(1.1);
        }

        .happy-slide.center img {
          filter: brightness(1) saturate(1.05);
        }

        .happy-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .happy-slide:hover .happy-slide-overlay {
          opacity: 1;
        }

        .happy-slide.center .happy-slide-overlay {
          opacity: 0.4;
        }

        .happy-slide-number {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.1em;
        }

        .happy-slide.center::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          border: 2px solid rgba(134, 195, 58, 0.5);
          pointer-events: none;
        }

        /* Controls */
        .happy-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
        }

        .happy-ctrl-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(134, 195, 58, 0.5);
          background: transparent;
          color: #86c33a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          font-size: 16px;
        }

        .happy-ctrl-btn:hover {
          background: #86c33a;
          color: #ffffff;
          border-color: #86c33a;
          transform: scale(1.08);
        }

        .happy-ctrl-btn:active {
          transform: scale(0.96);
        }

        .happy-ctrl-dots {
          display: flex;
          gap: 6px;
          margin-left: 4px;
        }

        .happy-ctrl-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .happy-ctrl-dot.active {
          background: #86c33a;
          width: 22px;
          border-radius: 3px;
        }

        .happy-ctrl-progress {
          flex: 1;
          height: 1px;
          background: rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          border-radius: 1px;
        }

        .happy-ctrl-progress-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: #86c33a;
          transition: width 0.4s ease;
        }

        /* Video Section */
        .happy-videos {
          margin-top: 72px;
        }

        .happy-videos-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          color: #111;
          letter-spacing: 0.03em;
          margin-bottom: 32px;
        }

        .happy-videos-title span {
          color: #86c33a;
        }

        .happy-videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .happy-video-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          cursor: pointer;
          group: true;
        }

        .happy-video-card img {
          width: 100%;
          display: block;
          transition: transform 0.5s ease, filter 0.4s ease;
          filter: brightness(0.85);
        }

        .happy-video-card:hover img {
          transform: scale(1.05);
          filter: brightness(0.7);
        }

        .happy-play-btn {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .happy-play-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(134, 195, 58, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 4px 20px rgba(134,195,58,0.5);
          border: none;
          cursor: pointer;
          padding-left: 4px;
        }

        .happy-video-card:hover .happy-play-circle {
          transform: scale(1.15);
          background: #86c33a;
        }

        @media (max-width: 768px) {
          .happy-inner { padding: 0 20px; }
          .happy-carousel-track {
            grid-template-columns: 0.5fr 1fr 0.5fr;
            gap: 10px;
          }
          .happy-header { flex-direction: column; align-items: flex-start; gap: 8px; }
          .happy-counter { font-size: 40px; }
          .happy-videos-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      <section className="happy-section">
        <div className="happy-inner">

          {/* Header */}
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

          {/* Image Slider */}
          <div
            className="happy-carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="happy-carousel-track">
              {/* Left */}
              <div className="happy-slide left">
                <img src={leftImg.src} alt={leftImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String(activeIndex % total + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Center - BIG */}
              <div className="happy-slide center">
                <img src={centerImg.src} alt={centerImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String((activeIndex + 1) % total + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Right */}
              <div className="happy-slide right">
                <img src={rightImg.src} alt={rightImg.alt} loading="lazy" />
                <div className="happy-slide-overlay" />
                <span className="happy-slide-number">
                  {String((activeIndex + 2) % total + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="happy-controls">
              <button className="happy-ctrl-btn" onClick={prev} aria-label="Previous">
                <i className="fas fa-arrow-left" />
              </button>
              <button className="happy-ctrl-btn" onClick={next} aria-label="Next">
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
                  className="happy-ctrl-progress-fill"
                  style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Video Reviews */}
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