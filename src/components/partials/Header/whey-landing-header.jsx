import React, { useState, useEffect } from 'react'

const WheyLandingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')   // ← new

  const navLinks = [
    { label: "Who It's For", href: "#who",          id: "who" },
    { label: "Capabilities",  href: "#capabilities", id: "capabilities" },
    { label: "How It Works",  href: "#how",          id: "how" },
    { label: "Certifications",href: "#certifications",id: "certifications" },
  ]

  const handleSectionClick = (event, href) => {
    if (!href || !href.startsWith('#')) {
      return
    }

    event.preventDefault()

    const sectionId = href.slice(1)
    const targetElement = document.getElementById(sectionId)
    if (!targetElement) {
      return
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
    setActiveSection(sectionId)
    setMenuOpen(false)
  }

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

          <a href="/Whey-landing" className="wh-brand">
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
                onClick={(event) => handleSectionClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="wh-cta desktop"
            onClick={(event) => handleSectionClick(event, '#contact')}
          >
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
            onClick={(event) => handleSectionClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="wh-cta"
          onClick={(event) => handleSectionClick(event, '#contact')}
        >
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