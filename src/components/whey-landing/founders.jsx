import { useState, useEffect, useRef } from "react";

const checkItems1 = [
  {
    title: "Choose the right product.",
    desc: "Not every formulation fits your audience or your price point.",
  },
  {
    title: "Understand the numbers.",
    desc: "MOQ, pricing direction, and packaging all affect your margin.",
  },
  {
    title: "Reduce brand risk.",
    desc: "Quality process, documentation, and consistency protect your reputation.",
  },
];

const checkItems2 = [
  {
    title: "Right formulation recommendation.",
    desc: "For your audience and stage -not a generic suggestion.",
  },
  {
    title: "Clear MOQ and realistic pricing direction.",
    desc: "Understand numbers before you commit to an order.",
  },
  {
    title: "Delivery timeline from approval to dispatch.",
    desc: "No more guessing when your product will be ready.",
  },
  {
    title: "Visibility into certifications and quality checks.",
    desc: "Batch documentation that protects your brand reputation.",
  },
];

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M2.5 8L5.8 11.5L12.5 4"
        stroke="#6dc52c"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="acc-chevron" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({ title, desc, isOpen, onToggle }) {
  return (
    <div className={`acc-item${isOpen ? " open" : ""}`}>
      <button className="acc-trigger" onClick={onToggle}>
        <div className="acc-icon">
          <CheckIcon />
        </div>
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
            <h2 class="ws-heading text-center">
              Start Your Suppliment Brand With the <br />
              <em> Right Formula, Sample, and Manufacturing</em>{" "}
            </h2>

            <div className="row justify-center">
              <div className="col-lg-7 col-md-7 col-12">
                <section class="protein-brand-landing-cards-section">
                  <div class="protein-brand-landing-cards-wrapper">
                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 3v5l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"
                          />
                        </svg>
                      </div>

                      <h3>Choose the Right Formula</h3>

                      <p>
                        Select whey concentrate, whey isolate, whey blend, or a
                        custom formulation based on your customer's needs and
                        price point.
                      </p>
                    </div>

                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12h6m-3-3v6m5 4H7a2 2 0 01-2-2V7a2 2 0 012-2h3l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      <h3>Request Sample Before Production</h3>

                      <p>
                        Test taste, mixability, texture, and quality before
                        committing to manufacturing. Don't go blind into
                        production.
                      </p>
                    </div>

                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3
            3-1.343 3-3-1.343-3-3-3zm0-5v2m0 14v2m9-9h-2M5 12H3"
                          />
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      </div>

                      <h3>Understand MOQ and Pricing</h3>

                      <p>
                        Get clear quantity-wise pricing and starting batch
                        guidance so you can plan your investment and margins
                        properly.
                      </p>
                    </div>

                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <rect x="3" y="4" width="18" height="16" rx="2" />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 10h18M10 20V10"
                          />
                        </svg>
                      </div>

                      <h3>Plan Packaging and Labeling</h3>

                      <p>
                        Finalize jar, pouch, label, and branding options. Your
                        packaging is your first impression — get it right.
                      </p>
                    </div>

                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.5 12.5l1.5 1.5 3-3"
                          />
                        </svg>
                      </div>

                      <h3>Review Quality Checks</h3>

                      <p>
                        Check certifications, test reports, and product quality
                        standards before dispatch. Every batch comes documented.
                      </p>
                    </div>

                    <div class="protein-brand-landing-cards">
                      <div class="protein-brand-landing-cards-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <circle cx="12" cy="12" r="9" />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 7v5l3 3"
                          />
                        </svg>
                      </div>

                      <h3>Know Production Timeline</h3>

                      <p>
                        Get a clear timeline from formulation to delivery so you
                        can plan your launch, inventory, and marketing
                        accordingly.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="protein-brand-sticky-image">
                  <img
                    src="/assets/images/whey-landing/start-brand-img.webp"
                    alt="Sad founder"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="founders-image">
            <img
              src="/assets/images/whey-landing/sad-owner.webp"
              alt="Sad founder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
