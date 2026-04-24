import React from 'react'

const WheyLandingFooter = () => {
  const socialLinks = [
    { label: 'YouTube',   href: 'https://www.youtube.com/@Gomzilifesciences',              icon: 'fab fa-youtube'   },
    { label: 'Instagram', href: 'https://www.instagram.com/gomzi_lifesciences/',            icon: 'fab fa-instagram' },
    { label: 'Facebook',  href: 'https://www.facebook.com/Gomzilifesciences',               icon: 'fab fa-facebook'  },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/gomzi-lifesciences-423558312/', icon: 'fab fa-linkedin'  },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="row g-4 g-md-5 justify-content-center">

          {/* ── Brand Column ── */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer__logo-wrap">
              <img
                src="/assets/images/logo/gomzi-life-science-white-logo.webp"
                alt="Gomzi Life Sciences"
                className="footer__logo-img"
              />
            </div>
            <p className="footer__brand-tagline">
              Your Trusted Partner for Premium Nutraceutical Manufacturing.
            </p>
            <div className="footer__socials">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social-icon"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* ── Divider (vertical, desktop only) ── */}
          <div className="col-auto d-none d-lg-flex align-items-stretch">
            <div className="footer__divider-v"></div>
          </div>

          {/* ── Contact ── */}
          <div className="col-12 col-md-6 col-lg-2">
            <p className="footer__section-title mt-4 mt-lg-0">Contact</p>
            <div className="footer__contact-list">
              <div>
                <div className="footer__contact-label">WhatsApp</div>
                <a href="tel:+918320077993" className="footer__contact-link">
                  +91 8320077993
                </a>
              </div>
              <div>
                <div className="footer__contact-label">Email</div>
                <a href="mailto:info@gomzilifesciences.in" className="footer__contact-link">
                  info@gomzilifesciences.in
                </a>
              </div>
            </div>
          </div>

          {/* ── Location ── */}
          <div className="col-12 col-md-8 col-lg-4">
            <p className="footer__section-title mt-4 mt-lg-0">Location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.7645179984486!2d72.74206676818852!3d21.1922215000045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d6049b09c4b%3A0x2b5491773a2ee8f3!2sGomzi%20Life%20Sciences%20LLP!5e1!3m2!1sen!2sin!4v1776946031710!5m2!1sen!2sin"
              className="footer__map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gomzi Life Sciences Location"
            />
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer__bottom">
          <p className="footer__copyright text-center mx-auto">
            © 2026 Gomzi Life Sciences. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default WheyLandingFooter