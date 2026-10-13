import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { fetchStoreBanners } from "../../assets/js/store/storeApi";

const AUTOPLAY_MS = 5000;

const Slide = ({ banner, eager }) => {
  // Full-width banner. A 1920 x 600 image fits the 16:5 frame exactly, so nothing is cropped.
  const img = (
    <img
      className="gz-slide-img"
      src={banner.image}
      alt={banner.title}
      loading={eager ? "eager" : "lazy"}
      draggable={false}
    />
  );
  if (!banner.link) return img;
  if (banner.link.external) {
    return (
      <a href={banner.link.href} target="_blank" rel="noopener noreferrer" aria-label={banner.title}>
        {img}
      </a>
    );
  }
  return (
    <Link to={banner.link.href} aria-label={banner.title}>
      {img}
    </Link>
  );
};

/**
 * Shop hero. Shows the banners managed in the admin panel
 * (Gomzi Nutrition > Website Banners). With no banners it renders `children` (the default hero).
 */
const BannerSlider = ({ children }) => {
  const [banners, setBanners] = useState(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetchStoreBanners()
      .then(({ data }) => setBanners(data || []))
      .catch(() => setBanners([]));
  }, []);

  const count = banners?.length || 0;
  const go = useCallback((n) => setIndex((n + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [count, paused]);

  if (banners === null) {
    return (
      <div className="gz-slider-shell">
        <div className="gz-slider gz-slider-loading" aria-hidden="true" />
      </div>
    );
  }
  if (count === 0) return children;

  return (
    <div className="gz-slider-shell">
    <section
      className="gz-slider"
      aria-roledescription="carousel"
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gz-slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {banners.map((b, i) => (
          <div className="gz-slide" key={b.id} aria-hidden={i !== index} role="group" aria-label={`${i + 1} of ${count}`}>
            <Slide banner={b} eager={i === 0} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button className="gz-slider-arrow prev" onClick={() => go(index - 1)} aria-label="Previous banner">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="gz-slider-arrow next" onClick={() => go(index + 1)} aria-label="Next banner">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="gz-slider-dots">
            {banners.map((b, i) => (
              <button key={b.id} className={i === index ? "active" : ""} onClick={() => go(i)} aria-label={`Go to banner ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </section>
    </div>
  );
};

export default BannerSlider;
