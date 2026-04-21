import React from 'react'
// import './Herosection.css'

const Herosection = () => {
  return (
    <>
      <div className="hs-wrap">

        <video
          className="hs-video-bg"
          autoPlay
          muted
          loop
          playsInline
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
        />

        <div className="hs-overlay" />
        <div className="hs-grid" />

        <div className="hs-content">

          {/* ── LEFT ── */}
          <div className="hs-left">
            <h1 className="hs-title">
              Launch Your Own <span className="hs-accent">Protein</span> Brand
            </h1>

            <p className="hs-body">
              You built the audience. Now build the product. Get clear answers on
              formulation, pricing, quality, and timelines before you place your
              first order, your next order, or your switch order.
            </p>

            <div className="hs-cta-group">
              <a href="#contact" className="hs-btn hs-btn-primary">
                Talk to Our Manufacturing Expert
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Herosection