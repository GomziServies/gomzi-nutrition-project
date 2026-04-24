import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { publicAxiosInstance } from "../../assets/js/config/api";

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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 20,
        borderRadius: 0,
      }}
    />
  );
}

// ─── Radio Option ─────────────────────────────────────────────────────────────
function RadioOption({ name, value, label, selected, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.65rem 0.9rem",
        border: `1.5px solid ${selected ? "#89c149" : "#e5e7eb"}`,
        borderRadius: "10px",
        marginBottom: "0.5rem",
        cursor: "pointer",
        background: selected ? "#f0f9e8" : "#fff",
        transition: "all 0.15s ease",
        fontSize: "0.88rem",
        color: "#1a1a1a",
        fontWeight: selected ? 600 : 400,
      }}
    >
      <span>{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(name, value)}
        style={{ display: "none" }}
      />
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: `2px solid ${selected ? "#89c149" : "#d1d5db"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: selected ? "#89c149" : "#fff",
          transition: "all 0.15s ease",
        }}
      >
        {selected && (
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        )}
      </div>
    </label>
  );
}

// ─── Budget Option ────────────────────────────────────────────────────────────
function BudgetOption({ value, selected, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.55rem 0.75rem",
        border: `1.5px solid ${selected ? "#89c149" : "#e5e7eb"}`,
        borderRadius: "8px",
        cursor: "pointer",
        background: selected ? "#f0f9e8" : "#fff",
        fontSize: "0.8rem",
        fontWeight: selected ? 600 : 400,
        transition: "all 0.15s",
      }}
      onClick={() => onChange("budget", value)}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: `2px solid ${selected ? "#89c149" : "#d1d5db"}`,
          background: selected ? "#89c149" : "#fff",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selected && (
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        )}
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

  const totalSteps = STEPS.length + 1;
  const progressPercent = (step / totalSteps) * 100;

  // ── Sidebar / external trigger via window event ──────────────────────────
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
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
        subject: "Quote Request",
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
      {/* ── Trigger button ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn fw-bold shadow-lg px-5 py-2 text-capitalize request-toggle"
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        style={{ transition: "transform 0.2s" }}
      >
        Request a Quote
      </button>

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
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                zIndex: 9999,
                animation: "fadeInOverlay 0.25s ease",
              }}
              onClick={handleClose}
            />

            {/* Sidebar Panel */}
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                maxWidth: "480px",
                height: "100vh",
                background: "#fff",
                overflowY: "auto",
                zIndex: 10000,
                animation: "slideInRight 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Progress Bar */}
              <div
                style={{ height: "4px", background: "#f0f0f0", flexShrink: 0 }}
              >
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
                  <div
                    style={{
                      padding: "1.5rem 1.5rem 0.5rem",
                      borderBottom: "0.5px solid #f0f0f0",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#8ab36a",
                        background: "#f0f9e8",
                        border: "1px solid #c5e49a",
                        borderRadius: "100px",
                        display: "inline-block",
                        padding: "3px 12px",
                        marginBottom: "0.6rem",
                      }}
                    >
                      Get a Quote
                    </div>
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        lineHeight: 1.2,
                      }}
                    >
                      Tell us about
                      <br />
                      <span style={{ color: "#89c149" }}>your needs.</span>
                    </h2>
                    <p
                      style={{
                        fontSize: "0.73rem",
                        color: "#aeaeb2",
                        marginTop: "0.25rem",
                      }}
                    >
                      Step {step + 1} of {totalSteps}
                    </p>
                    <button
                      onClick={handleClose}
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "none",
                        border: "none",
                        fontSize: "1.1rem",
                        color: "#aeaeb2",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Body — grows to fill available space */}
                  <div style={{ padding: "1.2rem 1.5rem", flex: 1 }}>
                    {/* Radio / Budget steps */}
                    {step < STEPS.length &&
                      (() => {
                        const s = STEPS[step];
                        return (
                          <>
                            <p
                              style={{
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                color: "#1a1a1a",
                                marginBottom: "1rem",
                              }}
                            >
                              {s.question}
                            </p>
                            {s.type === "budget" ? (
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "1fr 1fr",
                                  gap: "0.4rem",
                                }}
                              >
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
                              <span
                                style={{
                                  color: "#e24b4a",
                                  fontSize: "0.72rem",
                                }}
                              >
                                {errors[s.key]}
                              </span>
                            )}
                          </>
                        );
                      })()}

                    {/* Contact step */}
                    {step === STEPS.length && (
                      <>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#1a1a1a",
                            marginBottom: "0.3rem",
                          }}
                        >
                          Contact &amp; Product Details
                        </p>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#aeaeb2",
                            marginBottom: "1rem",
                          }}
                        >
                          Fill in your details below
                        </p>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0.75rem",
                            marginBottom: "0.75rem",
                          }}
                        >
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
                              <label
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: 600,
                                  color: "#555",
                                  display: "block",
                                  marginBottom: "0.3rem",
                                }}
                              >
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
                                <span
                                  style={{
                                    color: "#e24b4a",
                                    fontSize: "0.68rem",
                                  }}
                                >
                                  {errors[name]}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div style={{ marginBottom: "0.75rem" }}>
                          <label
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: "#555",
                              display: "block",
                              marginBottom: "0.3rem",
                            }}
                          >
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
                          <label
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: "#555",
                              display: "block",
                              marginBottom: "0.3rem",
                            }}
                          >
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
                  <div
                    style={{
                      padding: "1rem 1.5rem 1.5rem",
                      borderTop: "0.5px solid #f0f0f0",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ display: "flex", gap: "0.75rem" }}>
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
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "#aeaeb2",
                        textAlign: "center",
                        marginTop: "0.7rem",
                      }}
                    >
                      🔒 Your info is safe with us. No spam, ever.
                    </p>
                  </div>
                </>
              ) : (
                /* ── Success Screen ── */
                <>
                  <button
                    onClick={handleClose}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      zIndex: 30,
                      background: "none",
                      border: "none",
                      fontSize: "1.1rem",
                      color: "#aeaeb2",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>

                  {/* Fireworks Canvas */}
                  <FireworksCanvas />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      textAlign: "center",
                      padding: "2.5rem 1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "#f0f9e8",
                        border: "2px solid #c5e49a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.25rem",
                      }}
                    >
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

                    <div
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#3B6D11",
                        background: "#f0f9e8",
                        border: "1px solid #c5e49a",
                        borderRadius: "100px",
                        display: "inline-block",
                        padding: "4px 14px",
                        marginBottom: "0.9rem",
                      }}
                    >
                      Request Received
                    </div>

                    <h2
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: "0.4rem",
                      }}
                    >
                      You're all set! 🎉
                    </h2>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#6e6e73",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Thanks, <strong>{form.name}</strong>! Your quote request
                      has been submitted successfully.
                    </p>

                    <div
                      style={{
                        background: "#f9faf7",
                        border: "0.5px solid #ddeec8",
                        borderRadius: "12px",
                        padding: "1rem",
                        marginBottom: "1.4rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#8ab36a",
                          marginBottom: "0.5rem",
                        }}
                      >
                        We'll contact you on
                      </p>
                      <p
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          margin: 0,
                        }}
                      >
                        {form.phone}
                      </p>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                      <p
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#aeaeb2",
                          marginBottom: "0.6rem",
                        }}
                      >
                        What happens next
                      </p>
                      {[
                        "Our team reviews your request",
                        "We call you within 24 hours",
                        "Quotation & sample dispatch",
                      ].map((t, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: "#f0f9e8",
                              border: "1.5px solid #c5e49a",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#3B6D11",
                              flexShrink: 0,
                            }}
                          >
                            {i + 1}
                          </div>
                          <span
                            style={{ fontSize: "0.82rem", color: "#6e6e73" }}
                          >
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleClose}
                      style={{
                        width: "100%",
                        background: "#1a1a1a",
                        color: "#fff",
                        border: "none",
                        padding: "0.85rem",
                        borderRadius: "12px",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Done
                    </button>

                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "#aeaeb2",
                        marginTop: "0.75rem",
                      }}
                    >
                      🔒 Your data is safe with us
                    </p>
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
