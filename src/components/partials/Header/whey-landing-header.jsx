import React, { useState, useEffect, useRef } from 'react'

const WheyLandingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')   // ← new

  const navLinks = [
    { label: "Who It's For", href: "#who",          id: "who" },
    { label: "Capabilities",  href: "#capabilities", id: "capabilities" },
    { label: "How It Works",  href: "#how",          id: "how" },
    { label: "Certifications",href: "#certifications",id: "certifications" },
  ]

  // ── SCROLL SPY ──────────────────────────────────────────
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.id)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px', // fires when section hits top 30% viewport
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()  // cleanup
  }, [])
  // ────────────────────────────────────────────────────────

  return (
    <>
      <header className="wh-header">
        <div className="wh-inner">

          <a href="/" className="wh-brand">
            <img src="../assets/images/logo/gomzi-life-science-logo.webp"
                 alt="Gomzi Life Science Logo"
                 className="wh-brand-img" />
          </a>

          <nav className="wh-nav">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="wh-cta desktop">
            Talk to Our Manufacturing Expert
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#ffffff"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            className={`wh-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`wh-drawer ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className={activeSection === link.id ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="wh-cta"
           onClick={() => setMenuOpen(false)}>
          Talk to Our Manufacturing Expert
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#ffffff"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </>
  )
}

export default WheyLandingHeader