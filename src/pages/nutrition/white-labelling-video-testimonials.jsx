import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/1.mp4`,
    name: "Rahul Sharma",
  },
  {
    id: 2,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/2.mp4`,
    name: "Priya Patel",
  },
  {
    id: 3,
    videoSrc: `${process.env.PUBLIC_URL}/assets/video/3.mp4`,
    name: "Arjun Mehta",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  if (!video) return null;

  return (
    <div className="vmodal-overlay" onClick={handleClose}>
      <div className="vmodal-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="vmodal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <video
          ref={videoRef}
          src={video.videoSrc}
          controls
          autoPlay
          muted
          preload="auto"
          playsInline
          className="vmodal-video"
        />
      </div>
    </div>
  );
};

const CardVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      className="vtesti-card-video"
    />
  );
};

const GymVideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <section className="vtesti-section">
        <div className="vtesti-inner">
          <div className="certified-compliant-div">
            <h2 className="certified-compliant-div-h2 barlow-condensed-extra">
              TRUSTED BY{" "}
              <span className="certified-compliant-div-hspan">
                BRAND FOUNDERS
              </span>
            </h2>
          </div>

          <div className="vtesti-grid">
            {testimonials.map((t) => (
              <div
                className="vtesti-card"
                key={t.id}
                onClick={() => setActiveVideo(t)}
              >
                <div className="vtesti-thumb">
                  <CardVideo src={t.videoSrc} />
                  <div className="vtesti-thumb-overlay" />
                  <div className="vtesti-play">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GymVideoTestimonials;
