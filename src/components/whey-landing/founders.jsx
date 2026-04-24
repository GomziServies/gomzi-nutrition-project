import { useState, useEffect, useRef } from "react";

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
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !imgRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const raw = (windowHeight - rect.top) / (windowHeight * 0.85);
      const progress = Math.min(Math.max(raw, 0), 1);

      const tx = -130 * (1 - progress);

      requestAnimationFrame(() => {
        if (!imgRef.current) return;
        imgRef.current.style.transform = `translateX(${tx}px)`;
        // imgRef.current.style.opacity = String(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(handleScroll, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* ══ SECTION 1 ══ */}
      <section className="founders-section">
        <div className="founders-inner">

          <div className="founders-content">
            <h1 className="hero-headline">
              Most Founders Get Stuck Before They Place the Order.
            </h1>
            <p className="hero-sub">
              They compare manufacturers. They collect vague quotes. They still don't
              know what to make, what it will cost, or what quality process backs the product.
            </p>
            <AccordionList items={checkItems1} />
          </div>

          <div className="founders-image">
            <img
              src="/assets/images/whey-landing/sad-owner.webp"
              alt="Sad founder"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

        </div>
      </section>

      {/* ══ SECTION 2 ══ */}
      <section className="twocol-section">
        <div className="twocol-inner">
          <div className="fl-wrap">

            {/* LEFT - Scroll-linked image */}
            <div className="scroll-img-wrapper" ref={wrapperRef}>
              <div
                ref={imgRef}
                className="scroll-img-inner"
                style={{
                  transform: "translateX(-130px)",
                  // opacity: 0,
                  willChange: "transform, opacity",
                  transition: "transform 0.08s ease-out, opacity 0.08s ease-out",
                }}
              >
                <img
                  src="/assets/images/whey-landing/website-product.webp"
                  alt="Product"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
            </div>

            {/* RIGHT - Content */}
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