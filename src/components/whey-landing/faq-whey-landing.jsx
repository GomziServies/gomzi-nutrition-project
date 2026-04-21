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
    answer: 'You\'ll get clear pricing direction, MOQ context, and the variables that affect cost. Final commercials depend on formulation, packaging, and quantity.'
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

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: `1.5px solid ${isOpen ? 'rgba(109,197,44,0.35)' : 'rgba(0,0,0,0.09)'}`,
        borderRadius: 14,
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        marginBottom: 10
      }}
    >
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          cursor: 'pointer',
          fontSize: 15,
          fontWeight: 600,
          color: '#232323',
          gap: 12,
          userSelect: 'none',
          background: 'none',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          fontFamily: 'inherit'
        }}
      >
        <span>{question}</span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1.5px solid #6dc52c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? '#fff' : '#6dc52c',
            background: isOpen ? '#6dc52c' : 'transparent',
            fontSize: 18,
            fontWeight: 400,
            transition: 'transform 0.3s, background 0.2s, color 0.2s',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            lineHeight: 1
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? 200 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        <div
          style={{
            padding: '0 20px 16px',
            fontSize: 14,
            color: '#3d3d3d',
            lineHeight: 1.7
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Faqwheylanding = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      

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
                isOpen={!!openItems[item.id]}
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
                    {[1,2,3,4,5].map(star => (
                      <svg
                        key={star}
                        className="faq-star"
                        style={{ width: 20, height: 20, color: '#f5a623', fill: 'currentColor' }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <span className="faq-rating-text">4.8 Based on 500 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Faqwheylanding