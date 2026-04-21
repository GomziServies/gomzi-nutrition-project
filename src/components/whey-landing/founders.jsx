import { useState } from "react";


const checkItems1 = [
  { title: "Choose the right product.", desc: "Not every formulation fits your audience or your price point." },
  { title: "Understand the numbers.", desc: "MOQ, pricing direction, and packaging all affect your margin." },
  { title: "Reduce brand risk.", desc: "Quality process, documentation, and consistency protect your reputation." },
];

const checkItems2 = [
  { title: "Right formulation recommendation.", desc: "For your audience and stage -not a generic suggestion." },
  { title: "Clear MOQ and realistic pricing direction.", desc: "Understand numbers before you commit to an order." },
  { title: "Delivery timeline from approval to dispatch.", desc: "No more guessing when your product will be ready." },
  { title: "Visibility into certifications and quality checks.", desc: "Batch documentation that protects your brand reputation." },
];

// const trustItems = ["No credit card needed", "Free to start", "500+ founders helped"];

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M2.5 8L5.8 11.5L12.5 4" stroke="#6dc52c" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="acc-chevron" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionItem({ title, desc, isOpen, onToggle }) {
  return (
    <div className={`acc-item${isOpen ? " open" : ""}`}>
      <button className="acc-trigger" onClick={onToggle}>
        <div className="acc-icon"><CheckIcon /></div>
        <span className="acc-trigger-title">{title}</span>
        <ChevronIcon />
      </button>
      <div className="acc-body">
        <div className="acc-body-inner">{desc}</div>
      </div>
    </div>
  );
}

function AccordionList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="acc-list">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          desc={item.desc}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

export default function FoundersLanding() {
  return (
    <>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" /> */}

      {/* ══ SECTION 1 ══ */}
      <section className="founders-section">
        <div className="founders-inner">

          {/* Content Column */}
          <div className="founders-content">
            
            <h1 className="hero-headline">
              Most Founders Get Stuck Before They Place the Order.
            </h1>

            <p className="hero-sub">
              They compare manufacturers. They collect vague quotes. They still don't
              know what to make, what it will cost, or what quality process backs the product.
            </p>

            {/* <div className="divider" /> */}

            <AccordionList items={checkItems1} />


           
          </div>

          {/* Image Column */}
          <div className="founders-image">
            <div className="image-placeholder">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect width="52" height="52" rx="12" fill="#6dc52c" fillOpacity="0.18" />
                <path d="M14 36L21 27L27 33L33 24L40 36H14Z" fill="#6dc52c" fillOpacity="0.5" />
                <circle cx="20" cy="21" r="4" fill="#6dc52c" fillOpacity="0.6" />
              </svg>
              <span>Your image here</span>
            </div>
          </div>

        </div>
      </section>

      {/* ══ SECTION 2 ══ */}
      <section className="twocol-section">
        <div className="twocol-inner">
          <div className="fl-wrap">

            {/* LEFT -Image */}
            <div className="fl-image-col">
              <div className="fl-img-placeholder">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <rect width="52" height="52" rx="12" fill="#6dc52c" fillOpacity="0.18" />
                  <path d="M14 36L21 27L27 33L33 24L40 36H14Z" fill="#6dc52c" fillOpacity="0.5" />
                  <circle cx="20" cy="21" r="4" fill="#6dc52c" fillOpacity="0.6" />
                </svg>
                <span>Your image here</span>
              </div>
              <div className="img-corner-badge">Product photo</div>
            </div>

            {/* RIGHT -Content */}
            <div className="fl-content-col">
              <h2 className="hero-headline-2">Clear Answers You Can Use.</h2>
              <p className="hero-sub-2">
                Right formulation, realistic pricing, and quality documentation -all in one session.
              </p>
              <AccordionList items={checkItems2} />
              
            </div>

          </div>
        </div>
      </section>
    </>
  );
}