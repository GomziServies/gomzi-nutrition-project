import React, { useState } from 'react'

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqData = [
  {
    id: 'faq-1',
    question: 'Is this only for first-time founders?',
    answer: 'No. This fits first-time founders, active sellers looking to scale, and brands planning a manufacturer switch.'
  },
  {
    id: 'faq-2',
    question: 'Will I get pricing on the call?',
    answer: "You'll get clear pricing direction, MOQ context, and the variables that affect cost. Final commercials depend on formulation, packaging, and quantity."
  },
  {
    id: 'faq-3',
    question: "What if I don't know which formulation I need?",
    answer: "That's normal. We help you choose what fits your audience, position, and commercial logic."
  },
  {
    id: 'faq-4',
    question: 'Can I review the quality process before ordering?',
    answer: 'Yes. We cover certifications, batch documentation, and how the quality process works before you move ahead.'
  },
  {
    id: 'faq-5',
    question: 'Do I need to be ready to order now?',
    answer: 'No. The goal is clarity first. Move when the fit makes sense.'
  }
]

// ─── ARROW ICON ──────────────────────────────────────────────────────────────
function ArrowIcon({ isOpen }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`faq-arrow-icon ${isOpen ? 'faq-arrow-open' : ''}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        onClick={onToggle}
        className="faq-item-btn"
      >
        <span>{question}</span>
        <span className="faq-arrow-wrap">
          <ArrowIcon isOpen={isOpen} />
        </span>
      </button>

      <div className={`faq-answer-wrap ${isOpen ? 'faq-answer-wrap--open' : ''}`}>
        <div className="faq-answer-text">
          {answer}
        </div>
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Faqwheylanding = () => {
  // ✅ Single open item — string instead of object
  const [openId, setOpenId] = useState(null)

  const toggleItem = (id) => {
    // Same item click → close it; else open new one (prev closes automatically)
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className="faq-root">
      <div className="faq-layout">

        {/* ── LEFT ── */}
        <div>
          <h2 className="faq-left-heading">Know This Before You Move.</h2>

          {faqData.map(item => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* ── RIGHT ── */}
        <div className="faq-right">
          <div className="faq-right-inner">
            <div className="faq-img-box">
              <img
                className="product-img"
                src="/assets/images/whey-landing/faqimage.webp"
                alt="NARA Health Products"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #8cd7e1 0%, #7dd9d9 100%)'
                  e.target.style.minHeight = '500px'
                  e.target.style.display = 'block'
                }}
              />

              {/* Circle decoration */}
              <img
                className="faq-circle-deco"
                src="/assets/images/whey-landing/circle-1.webp"
                alt=""
              />

              {/* Rating card overlay */}
              <div className="faq-rating-card">
                <p className="faq-rating-title">Gomzi Life Sciences LLP is rated</p>
                <div className="faq-stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg
                      key={star}
                      className="faq-star"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="faq-rating-text">4.8 Based on 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Faqwheylanding