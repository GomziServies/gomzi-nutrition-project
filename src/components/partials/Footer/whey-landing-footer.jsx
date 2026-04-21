import React from 'react'

const WheyLandingFooter = () => {
  React.useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
      document.head.appendChild(link)
    }
  }, [])

  return (
    <footer style={{
      background: '#1a1a1a',
      borderTop: '1px solid rgba(255,255,255,0.09)',
      fontFamily: "'Figtree', sans-serif",
      padding: '52px 40px 24px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="row g-4 g-md-5 justify-content-center">

          {/* Brand Column */}
          <div className="col-12 col-md-6 col-lg-2">
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: '#ffffff' }}>
              Gomzi Life Sciences
            </div>
            <p style={{ fontSize: 12, color: '#b0b0b0', lineHeight: 1.5, marginBottom: 16, maxWidth: 200 }}>
              Your brand, manufactured with care.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'nowrap' }}>
              {[
                { label: 'YouTube', href: '#', icon: 'fab fa-youtube' },
                { label: 'Instagram', href: '#', icon: 'fab fa-instagram' },
                { label: 'Facebook', href: '#', icon: 'fab fa-facebook' },
                { label: 'LinkedIn', href: '#', icon: 'fab fa-linkedin' }
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)', textDecoration: 'none',
                    transition: 'background 0.18s, border-color 0.18s, transform 0.15s',
                    color: '#ffffff'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(109,197,44,0.20)'
                    e.currentTarget.style.borderColor = '#6dc52c'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.color = '#6dc52c'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                >
                  <i className={icon} style={{ fontSize: '16px' }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-2">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, color: '#ffffff' }}>
              Quick Links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {["Who It's For", "Capabilities", "How It Works", "Certifications"].map(link => (
                <li key={link}>
                  <a href="#" style={{ textDecoration: 'none', fontSize: 13, color: '#b0b0b0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#6dc52c'}
                    onMouseLeave={e => e.currentTarget.style.color = '#b0b0b0'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-2">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, color: '#ffffff' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: '+91-XXXXXXXXXX', sub: 'WhatsApp' },
                { label: 'hello@gomzils.com', sub: 'Email' }
              ].map(({ label, sub }) => (
                <div key={sub}>
                  <div style={{ fontSize: 10, color: '#7a7a7a', marginBottom: 2, fontWeight: 600 }}>{sub}</div>
                  <div style={{ fontSize: 13, color: '#b0b0b0' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Us */}
          <div className="col-12 col-md-6 col-lg-2">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, color: '#ffffff' }}>
              Why Us
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'GMP Certified' },
                { label: 'Clear MOQ' },
                { label: 'No Hard Sell' },
                { label: 'Confidential' }
              ].map(item => (
                <div key={item.label} style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#b0b0b0'
                }}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="col-12 col-md-6 col-lg-3">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, color: '#ffffff' }}>
              Location
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5783752193686!2d72.83061!3d21.17043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sGomzi%20Life%20Sciences!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="140"
              style={{ border: 'none', borderRadius: '8px', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-4 pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
          <p style={{ fontSize: 13, color: '#b0b0b0', margin: 0 }}>
            © 2025 Gomzi Life Sciences. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            {["Privacy", "Terms", "Sitemap"].map(l => (
              <span key={l} style={{ fontSize: 13, color: '#b0b0b0', cursor: 'pointer' }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default WheyLandingFooter