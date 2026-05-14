import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { publicAxiosInstance } from "../../assets/js/config/api";
import "../../assets/css/nutrition.css";

// ─── Fireworks Canvas ─────────────────────────────────────────────────────────
function FireworksCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const W = parent ? parent.offsetWidth : 480;
    const H = parent ? parent.offsetHeight : 700;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const timeouts = [];

    function randomColor() {
      const colors = [
        "#89c149",
        "#f9c74f",
        "#f94144",
        "#43aa8b",
        "#f8961e",
        "#ffffff",
        "#74c0fc",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createBurst(x, y) {
      const count = 70;
      for (let i = 0; i < count; i++) {
        const angle = ((Math.PI * 2) / count) * i + Math.random() * 0.15;
        const speed = 1.5 + Math.random() * 3;
        const isTrail = Math.random() > 0.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          alpha: 1,
          color: randomColor(),
          radius: isTrail ? 1 + Math.random() * 1.2 : 2.5 + Math.random() * 2,
          decay: 0.008 + Math.random() * 0.006,
          gravity: 0.04,
          trail: isTrail,
        });
      }
    }

    const bursts = [
      [W * 0.25, H * 0.28, 0],
      [W * 0.75, H * 0.22, 200],
      [W * 0.5, H * 0.18, 420],
      [W * 0.15, H * 0.45, 640],
      [W * 0.85, H * 0.4, 860],
      [W * 0.5, H * 0.32, 1100],
    ];

    bursts.forEach(([x, y, delay]) => {
      const t = setTimeout(() => createBurst(x, y), delay);
      timeouts.push(t);
    });

    let rafId;
    let running = true;

    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.985;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (p.trail) {
          ctx.strokeStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 3;
          ctx.lineWidth = p.radius;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
          ctx.stroke();
        } else {
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      rafId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="request-modal-canvas" />;
}

// ─── Radio Option ─────────────────────────────────────────────────────────────
function RadioOption({ name, value, label, selected, onChange }) {
  return (
    <label className={`custom-label-radio ${selected ? "active" : ""}`}>
      <span>{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(name, value)}
        className="d-none"
      />
      <div className={`custom-radio ${selected ? "active" : ""}`}>
        {selected && <div className="custom-radio-div" />}
      </div>
    </label>
  );
}

// ─── Budget Option ────────────────────────────────────────────────────────────
function BudgetOption({ value, selected, onChange }) {
  return (
    <label
      className={`custom-budget-label ${selected ? "active" : ""}`}
      onClick={() => onChange("budget", value)}
    >
      <div className={`custom-radio-sm ${selected ? "active" : ""}`}>
        {selected && <div className="custom-radio-sm-div" />}
      </div>
      {value}
    </label>
  );
}

// ─── Steps Config ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    key: "productCategory",
    question: "What product category are you interested in?",
    options: [
      "Sports Nutrition",
      "Whey Protein",
      "Multivitamin Tablets",
      "Mass Gainer",
      "Other",
    ],
  },
  {
    key: "customType",
    question: "What type of solution are you looking for?",
    options: ["White Label", "Custom Formulation", "Not Sure Yet"],
  },
  {
    key: "timeline",
    question: "What is your expected launch timeline?",
    options: ["Immediate", "Within 30 days", "1–3 months", "Exploring"],
  },
  {
    key: "budget",
    question: "What is your estimated budget?",
    type: "budget",
    options: [
      "Under ₹50,000",
      "₹50,000–₹1,00,000",
      "₹1,00,000–₹2,50,000",
      "₹2,50,000–₹5,00,000",
      "₹5,00,000+",
      "Need guidance",
    ],
  },
];

const EMPTY_FORM = {
  productCategory: "",
  customType: "",
  timeline: "",
  budget: "",
  name: "",
  company: "",
  phone: "",
  email: "",
  qty: "",
  flavor: "",
  packaging: "",
  message: "",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RequestQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("Quote Request");

  const totalSteps = STEPS.length + 1;
  const progressPercent = (step / totalSteps) * 100;

  // ── Sidebar / external trigger via window event ──────────────────────────
  useEffect(() => {
    const handleOpen = () => {
      // Get subject from window if set by button
      if (window.quoteSubject) {
        setSubject(window.quoteSubject);
      }
      setIsOpen(true);
    };
    window.addEventListener("open-quote", handleOpen);
    return () => window.removeEventListener("open-quote", handleOpen);
  }, []);

  // ── Validation ────────────────────────────────────────────────────────────
  const validateContact = useCallback(() => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email address";
    return errs;
  }, [form]);

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = useCallback(async () => {
    const errs = validateContact();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await publicAxiosInstance.post("/contact-inquiry", {
        subject: subject,
        name: form.name,
        email: form.email,
        mobile: form.phone,
        message: [
          `Company: ${form.company}`,
          `Product Category: ${form.productCategory}`,
          `Solution Type: ${form.customType}`,
          `Timeline: ${form.timeline}`,
          `Budget: ${form.budget}`,
          `Expected Quantity: ${form.qty}`,
          `Flavor/Variant: ${form.flavor}`,
          `Packaging: ${form.packaging}`,
          `Message: ${form.message}`,
        ].join("\n"),
        source: window.location.href,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Quote submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [form, validateContact]);

  // ── Form handlers ─────────────────────────────────────────────────────────
  const handleRadioChange = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleNext = () => {
    const key = STEPS[step]?.key;
    if (!form[key]) {
      setErrors({ [key]: "Please select an option to continue" });
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setStep(0);
      setErrors({});
      setForm(EMPTY_FORM);
    }, 350);
  };

  // ── Shared styles ─────────────────────────────────────────────────────────
  const btnGreen = {
    flex: 3,
    background: "#9bc028",
    color: "#1c1d1f",
    border: "none",
    padding: "0.85rem 1rem",
    fontSize: "1rem",
    fontWeight: 700,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.15s",
    fontFamily: "'Comfortaa', cursive",
  };
  const btnBack = {
    flex: 1,
    background: "#f5f5f5",
    color: "#1a1a1a",
    border: "1.5px solid #e5e7eb",
    padding: "0.85rem",
    borderRadius: "12px",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  };
  const inputStyle = (hasErr) => ({
    width: "100%",
    padding: "0.6rem 0.8rem",
    border: `1.5px solid ${hasErr ? "#e24b4a" : "#e5e7eb"}`,
    borderRadius: "8px",
    fontSize: "0.87rem",
    color: "#1a1a1a",
    background: hasErr ? "#fff5f5" : "#fff",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  });

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Right Sidebar Drawer ── */}
      {isOpen &&
        createPortal(
          <>
            <style>{`
            @keyframes slideInRight {
              from { transform: translateX(100%); }
              to   { transform: translateX(0);    }
            }
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
          `}</style>

            {/* Backdrop */}
            <div className="backdrop" onClick={handleClose} />

            {/* Sidebar Panel */}
            <div className="sidebar-panel">
              {/* Progress Bar */}
              <div className="progess-bar">
                <div
                  style={{
                    height: "100%",
                    background: "#89c149",
                    width: `${progressPercent}%`,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>

              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="requestmodal-header">
                    <div className="requestmodal-get-quote">Get a Quote</div>
                    <h2 className="tell-us">
                      Tell us about
                      <br />
                      <span>your needs.</span>
                    </h2>
                    <p className="step-p">
                      Step {step + 1} of {totalSteps}
                    </p>
                    <button
                      onClick={handleClose}
                      className="requestmodal-close"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Body — grows to fill available space */}
                  <div className="Body-grows">
                    {/* Radio / Budget steps */}
                    {step < STEPS.length &&
                      (() => {
                        const s = STEPS[step];
                        return (
                          <>
                            <p className="s-question">{s.question}</p>
                            {s.type === "budget" ? (
                              <div className="s-type-budget">
                                {s.options.map((o) => (
                                  <BudgetOption
                                    key={o}
                                    value={o}
                                    selected={form[s.key] === o}
                                    onChange={handleRadioChange}
                                  />
                                ))}
                              </div>
                            ) : (
                              s.options.map((o) => (
                                <RadioOption
                                  key={o}
                                  name={s.key}
                                  value={o}
                                  label={o}
                                  selected={form[s.key] === o}
                                  onChange={handleRadioChange}
                                />
                              ))
                            )}
                            {errors[s.key] && (
                              <span className="error-key">{errors[s.key]}</span>
                            )}
                          </>
                        );
                      })()}

                    {/* Contact step */}
                    {step === STEPS.length && (
                      <>
                        <p className="contact-step-title">
                          Contact &amp; Product Details
                        </p>
                        <p className="contact-step-para">
                          Fill in your details below
                        </p>
                        <div className="contact-form-div">
                          {[
                            {
                              label: "Full Name",
                              name: "name",
                              placeholder: "Your name",
                              type: "text",
                            },
                            {
                              label: "Company Name",
                              name: "company",
                              placeholder: "Brand / company",
                              type: "text",
                            },
                            {
                              label: "Phone Number",
                              name: "phone",
                              placeholder: "+91 ...",
                              type: "tel",
                            },
                            {
                              label: "Email Address",
                              name: "email",
                              placeholder: "you@example.com",
                              type: "email",
                            },
                            {
                              label: "Expected Quantity",
                              name: "qty",
                              placeholder: "50 KG / 500 units",
                              type: "text",
                            },
                            {
                              label: "Flavor / Variant",
                              name: "flavor",
                              placeholder: "Chocolate, mango…",
                              type: "text",
                            },
                          ].map(({ label, name, placeholder, type }) => (
                            <div key={name}>
                              <label className="contact-form-label">
                                {label}
                              </label>
                              <input
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                value={form[name]}
                                onChange={handleInput}
                                style={inputStyle(!!errors[name])}
                              />
                              {errors[name] && (
                                <span className="error-key">
                                  {errors[name]}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="mb-rem">
                          <label className="contact-form-label">
                            Packaging Requirement
                          </label>
                          <input
                            name="packaging"
                            type="text"
                            value={form.packaging}
                            placeholder="Jar, pouch, bottle, or need guidance"
                            onChange={handleInput}
                            style={inputStyle(false)}
                          />
                        </div>
                        <div>
                          <label className="contact-form-label">
                            Additional Message
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={form.message}
                            placeholder="Tell us your goal, target market, or any special requirement…"
                            onChange={handleInput}
                            style={{ ...inputStyle(false), resize: "none" }}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="requestmodal-footer">
                    <div className="requestmodal-footer-div">
                      {step > 0 && (
                        <button onClick={handleBack} style={btnBack}>
                          ← Back
                        </button>
                      )}
                      {step < STEPS.length ? (
                        <button
                          onClick={handleNext}
                          style={btnGreen}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#6aaa1e";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#9bc028";
                            e.currentTarget.style.color = "#1c1d1f";
                          }}
                        >
                          Next →
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          disabled={loading}
                          style={{ ...btnGreen, opacity: loading ? 0.7 : 1 }}
                          onMouseEnter={(e) => {
                            if (!loading) {
                              e.currentTarget.style.background = "#6aaa1e";
                              e.currentTarget.style.color = "#fff";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#9bc028";
                            e.currentTarget.style.color = "#1c1d1f";
                          }}
                        >
                          {loading ? "Submitting…" : "Submit Request →"}
                        </button>
                      )}
                    </div>
                    <p className="info-safe">
                      🔒 Your info is safe with us. No spam, ever.
                    </p>
                  </div>
                </>
              ) : (
                /* ── Success Screen ── */
                <>
                  <button onClick={handleClose} className="requestmodal-close ">
                    ✕
                  </button>

                  {/* Fireworks Canvas */}
                  <FireworksCanvas />

                  <div className="fireworks-canvas-div">
                    <div className="fireworks-canvas-div-svg">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <circle cx="18" cy="18" r="18" fill="#89c149" />
                        <polyline
                          points="10,18 16,24 26,13"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="request-received">Request Received</div>

                    <h2 className="all-set">You're all set! 🎉</h2>
                    <p className="all-set-para ">
                      Thanks, <strong>{form.name}</strong>! Your request has
                      been submitted successfully.
                    </p>

                    <div className="contact-you-div">
                      <p className="contact-you-div-para">
                        We'll contact you on
                      </p>
                      <p className="form-phone">{form.phone}</p>
                    </div>

                    <div className="happens-div">
                      <p>What happens next</p>
                      {[
                        "Our team reviews your request",
                        "We call you within 24 hours",
                        "Quotation & sample dispatch",
                      ].map((t, i) => (
                        <div key={i} className="happens-div-map">
                          <div className="index-1">{i + 1}</div>
                          <span className="index-t">{t}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={handleClose} className="done-btn ">
                      Done
                    </button>

                    <p className="data-safe-p ">🔒 Your data is safe with us</p>
                  </div>
                </>
              )}
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
