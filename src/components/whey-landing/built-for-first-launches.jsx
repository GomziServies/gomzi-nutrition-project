import React, { useEffect } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import $ from 'jquery'
import 'owl.carousel'

const cards = [
  {
    stat: '100 KG',
    title: 'Starting MOQ',
    desc: 'Test demand without overcommitting capital on batch one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    stat: 'WPC & WPI',
    title: 'Multiple formulation paths',
    desc: 'Blend, 100% Whey, WPC 80%, and WPI 90% across different positions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    stat: 'COA',
    title: 'Batch documentation',
    desc: 'Show proof when buyers ask what stands behind the product.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
  },
  {
    stat: '15-20 Days',
    title: 'Delivery timeline',
    desc: 'Move from approval to dispatch on a defined schedule.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    stat: 'Packaging',
    title: 'Label design & mockups',
    desc: 'Present your product like a brand, not a placeholder.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
  },
  {
    stat: 'Support',
    title: 'Compliance & launch guidance',
    desc: 'Get direction on documentation, approvals, and next steps.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
      </svg>
    ),
  },
]

const BuiltForFirstLaunches = () => {
  useEffect(() => {
    if ($('#mfg-owl').length) {
      $('#mfg-owl').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3200,
        autoplayHoverPause: true,
        center: true,
        navText: ['&#8592;', '&#8594;'],
        responsive: {
          0:    { items: 1, center: true,  margin: 14 },
          640:  { items: 2, center: false, margin: 16 },
          1024: { items: 3, center: false, margin: 20 },
        },
      })
    }
    return () => {
      if ($('#mfg-owl').data('owl.carousel')) {
        $('#mfg-owl').owlCarousel('destroy')
      }
    }
  }, [])

  return (
    <section className="mfg-section" id="capabilities">
      <div className="mfg-inner">

        <h2 className="mfg-headline pb-5">
          Built For First Launches<br />
          and <span>Serious Scale.</span>
        </h2>

        <div className="mfg-carousel-wrap">
          <div className="owl-carousel owl-theme pb-5" id="mfg-owl">
            {cards.map((card, i) => (
              <div className="item" key={i}>
                <div className="mfg-card">
                  <div className=" d-flex align-items-center gap-3 ">
                    <div className="mfg-icon-wrap">{card.icon}</div>
                  <div className="mfg-card-stat mt-2">{card.stat}</div>
                  </div>
                  <div className="mfg-card-title">{card.title}</div>
                  <div className="mfg-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default BuiltForFirstLaunches