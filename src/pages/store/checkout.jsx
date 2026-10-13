import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCheck,
  faChevronDown,
  faCircleCheck,
  faTicket,
  faLock,
  faMinus,
  faPlus,
  faRotateLeft,
  faShieldHalved,
  faTrashCan,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import StoreLayout from "../../components/store/StoreLayout";
import LoginModal from "../../assets/js/popup/login";
import "../../assets/css/store-checkout.css";
import "../../assets/css/addresses.css";
import { useCart } from "../../context/CartContext";
import {
  createStoreCheckout,
  fetchAddresses,
  formatPrice,
  loadRazorpay,
  saveAddress,
  validateStoreCoupon,
  verifyStorePayment,
} from "../../assets/js/store/storeApi";
import { INDIAN_STATES } from "../../assets/js/store/indianStates";

const STATES = INDIAN_STATES;

const isLoggedIn = () => !!localStorage.getItem("fg_group_user_authorization");

// Profile saved by the login popup; the placeholder "FG USER" name is not a real name
const savedProfile = () => {
  try {
    const data = JSON.parse(localStorage.getItem("user_info") || "null");
    const u = data?.user || data || {};
    const first = (u.first_name || "").trim();
    const last = (u.last_name || "").trim();
    const real = first && first.toLowerCase() !== "fg";
    return {
      name: real ? `${first} ${last && last.toLowerCase() !== "user" && last !== "-" ? last : ""}`.trim() : "",
      email: (u.email || "").trim(),
      mobile: String(u.mobile || "").replace(/\D/g, "").slice(-10),
    };
  } catch (e) {
    return { name: "", email: "", mobile: "" };
  }
};

const EMPTY = {
  name: "", email: "", mobile: "", address_line_1: "", address_line_2: "",
  landmark: "", city: "", state: "", pin_code: "", customer_note: "",
};

const validate = (f) => {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter your full name";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email";
  if (!/^[6-9]\d{9}$/.test(f.mobile.trim())) e.mobile = "Enter a valid 10 digit mobile number";
  if (f.address_line_1.trim().length < 3) e.address_line_1 = "Enter your address";
  if (f.city.trim().length < 2) e.city = "Enter your city";
  if (!f.state) e.state = "Select your state";
  if (!/^[1-9]\d{5}$/.test(f.pin_code.trim())) e.pin_code = "Enter a valid 6 digit PIN code";
  return e;
};

const Field = ({ label, name, form, errors, onChange, onBlur, full, children, ...rest }) => (
  <div className={full ? "full" : ""}>
    <label className="gz-form-label fw-bold mb-1" htmlFor={name}>{label}</label>
    {children || (
      <input
        id={name}
        name={name}
        value={form[name]}
        onChange={onChange}
        onBlur={onBlur}
        className={`gz-form-input ${errors[name] ? "invalid" : ""}`}
        {...rest}
      />
    )}
    {errors[name] && <div className="gz-field-error">{errors[name]}</div>}
  </div>
);

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartSubtotal, shippingCharge, cartTotal, freeShippingThreshold, clearCart, refreshCart, updateQuantity, removeFromCart, couponCode: pickedCoupon, setCouponCode: setPickedCoupon } = useCart();
  const [form, setForm] = useState(() => {
    try {
      return { ...EMPTY, ...JSON.parse(localStorage.getItem("gomzi_checkout_details") || "{}") };
    } catch (e) {
      return EMPTY;
    }
  });
  const [errors, setErrors] = useState({});
  const [paying, setPaying] = useState(false);
  const [syncing, setSyncing] = useState(true);
  const [authed, setAuthed] = useState(isLoggedIn);
  const [showLogin, setShowLogin] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  // Saved addresses: "new" = typing a new one, otherwise the id of the chosen saved address
  const [addresses, setAddresses] = useState([]);
  const [addrChoice, setAddrChoice] = useState("new");
  const [saveNew, setSaveNew] = useState(true);

  // Coupon
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState(null); // { code, title, discount }
  const [couponError, setCouponError] = useState("");
  const [couponBusy, setCouponBusy] = useState(false);

  const cartItemsPayload = useMemo(
    () => cart.map((i) => ({ product_id: i.productId, variation_id: i.variationId, quantity: i.quantity })),
    [cart],
  );
  const discount = coupon?.discount || 0;
  const payable = Math.max(0, Math.round((cartTotal - discount) * 100) / 100);

  // Load the address book and use the default address when nothing was typed yet
  useEffect(() => {
    if (!authed) return;
    fetchAddresses()
      .then(({ data }) => {
        const list = data || [];
        setAddresses(list);
        const preferred = list.find((a) => a.is_default) || list[0];
        if (preferred) chooseAddress(preferred);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  const chooseAddress = (a) => {
    setAddrChoice(a._id);
    setErrors({});
    setForm((f) => ({
      ...f,
      name: a.name || f.name,
      mobile: a.mobile || f.mobile,
      address_line_1: a.address_line_1 || "",
      address_line_2: a.address_line_2 || "",
      landmark: a.landmark || "",
      city: a.city || "",
      state: a.state || "",
      pin_code: a.pin_code || "",
    }));
  };

  const useNewAddress = () => {
    setAddrChoice("new");
    setForm((f) => ({ ...f, address_line_1: "", address_line_2: "", landmark: "", city: "", state: "", pin_code: "" }));
  };

  // Apply / re-check the coupon whenever the cart changes (the server recalculates the exact discount)
  const applyCoupon = async (code, { silent } = {}) => {
    const value = String(code || "").trim();
    if (!value) return;
    setCouponBusy(true);
    setCouponError("");
    try {
      const { data } = await validateStoreCoupon(value, cartItemsPayload);
      setCoupon({ code: data.code, title: data.title, discount: data.discount });
      setPickedCoupon(data.code);
      setCouponInput("");
      if (!silent) toast.success(`Coupon ${data.code} applied`);
    } catch (e) {
      setCoupon(null);
      setPickedCoupon("");
      // Always show the reason next to the coupon box, so a coupon never disappears silently
      setCouponError(silent ? `${value.toUpperCase()} could not be applied: ${e.message}` : e.message);
      if (silent) toast.info(`Coupon ${value.toUpperCase()}: ${e.message}`);
    } finally {
      setCouponBusy(false);
    }
  };

  const cartSignature = cartItemsPayload.map((i) => `${i.product_id}:${i.variation_id || ""}:${i.quantity}`).join("|");
  useEffect(() => {
    if (coupon && cart.length) applyCoupon(coupon.code, { silent: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartSignature]);

  const removeCoupon = () => {
    setCoupon(null);
    setPickedCoupon("");
    setCouponError("");
  };

  // A coupon picked in the cart panel is applied as soon as the customer is logged in and the cart is known
  // Keep checkout in step with the cart panel: a newly picked coupon is applied, a removed one is dropped
  useEffect(() => {
    if (!authed || syncing || !cart.length) return;
    if (pickedCoupon && pickedCoupon !== coupon?.code) applyCoupon(pickedCoupon, { silent: true });
    else if (!pickedCoupon && coupon) setCoupon(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, syncing, pickedCoupon]);

  // Fill contact details from the logged-in account (never overwrites what the customer typed)
  useEffect(() => {
    if (!authed) return;
    const p = savedProfile();
    setForm((f) => ({ ...f, name: f.name || p.name, email: f.email || p.email, mobile: f.mobile || p.mobile }));
  }, [authed]);

  const onLoginSuccess = () => {
    setShowLogin(false);
    setAuthed(true);
    window.dispatchEvent(new Event("user-info-updated"));
    toast.success("Logged in. You can now place your order.");
  };

  useEffect(() => {
    refreshCart()
      .then(({ removed, changed }) => {
        if (removed.length) toast.warn(`No longer available and removed: ${removed.join(", ")}`);
        else if (changed) toast.info("Some prices or quantities were updated.");
      })
      .catch(() => {})
      .finally(() => setSyncing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  // Validate a single field when the customer leaves it
  const onBlur = (e) => {
    const { name } = e.target;
    const message = validate(form)[name];
    setErrors((er) => ({ ...er, [name]: message }));
  };

  const pay = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    if (paying || !cart.length) return;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      toast.error("Please fix the highlighted fields");
      return;
    }

    setPaying(true);
    try {
      // A new address is saved to the address book in the background (never blocks the payment)
      if (addrChoice === "new" && saveNew) {
        saveAddress({
          label: "Home", name: form.name.trim(), mobile: form.mobile.trim(), address_line_1: form.address_line_1.trim(),
          address_line_2: form.address_line_2.trim(), landmark: form.landmark.trim(), city: form.city.trim(),
          state: form.state, pin_code: form.pin_code.trim(), is_default: addresses.length === 0,
        }).catch(() => {});
      }

      const sdkReady = await loadRazorpay();
      if (!sdkReady) throw new Error("Could not load the payment window. Check your connection and retry.");

      const { data: order } = await createStoreCheckout({
        customer: { name: form.name, email: form.email, mobile: form.mobile },
        shipping_address: {
          address_line_1: form.address_line_1, address_line_2: form.address_line_2,
          landmark: form.landmark, city: form.city, state: form.state, pin_code: form.pin_code,
        },
        items: cartItemsPayload,
        customer_note: form.customer_note,
        coupon_code: coupon?.code,
      });

      try {
        localStorage.setItem("gomzi_checkout_details", JSON.stringify({ ...form, customer_note: "" }));
      } catch (err) { /* ignore */ }

      const goToStatus = () =>
        navigate("/order-status", {
          state: { order_number: order.order_number, email: form.email.trim().toLowerCase(), justPaid: true },
        });

      // Set when Razorpay reports a failed attempt; if the customer then closes the window we show the "Payment failed" screen
      let failureReason = null;

      const rzp = new window.Razorpay({
        key: order.razorpay_key_id,
        amount: order.amount,
        currency: order.currency,
        order_id: order.razorpay_order_id,
        name: "Gomzi Nutrition",
        description: `Order ${order.order_number}`,
        prefill: { name: form.name, email: form.email, contact: form.mobile },
        theme: { color: "#8dc63f" },
        modal: {
          ondismiss: () => {
            setPaying(false);
            if (failureReason) {
              navigate("/order-status", {
                state: { order_number: order.order_number, email: form.email.trim().toLowerCase(), failed: true, reason: failureReason },
              });
            } else {
              toast.info("Payment cancelled. Your cart is saved.");
            }
          },
        },
        handler: async (response) => {
          try {
            await verifyStorePayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            clearCart();
            goToStatus();
          } catch (err) {
            // Money was taken; the Razorpay webhook will still confirm the order server-side.
            clearCart();
            toast.warn("Payment received. Confirmation is taking a moment - check your order status shortly.");
            goToStatus();
          }
        },
      });
      rzp.on("payment.failed", (r) => {
        failureReason = r?.error?.description || "The payment could not be completed.";
        toast.error(failureReason);
      });
      rzp.open();
    } catch (err) {
      if (err.status === 400 && coupon && /coupon/i.test(err.message || "")) {
        setCoupon(null);
        setCouponError(err.message);
        toast.error(err.message);
      } else if (err.status === 401) {
        // Session expired: ask the customer to log in again, cart is kept
        localStorage.removeItem("fg_group_user_authorization");
        setAuthed(false);
        toast.info("Your session expired. Please log in again to continue.");
      } else {
        toast.error(err.message || "Something went wrong");
      }
      setPaying(false);
    }
  };

  if (!syncing && cart.length === 0) {
    return (
      <StoreLayout title="Checkout">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <h1>Your cart is empty</h1>
            <p>Add a few products to your cart and they will show up here, ready to check out.</p>
            <Link to="/shop" className="gz-btn-checkout gz-inline-btn" style={{ width: "100%" }}>
              Browse products
            </Link>
          </div>
        </div>
      </StoreLayout>
    );
  }

  if (!authed) {
    return (
      <StoreLayout title="Checkout">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h1>Log in to place your order</h1>
            <p>
              Log in or create an account to continue. Your orders are saved in your account so you can
              track them anytime.
            </p>
            <button className="gz-btn-checkout" onClick={() => setShowLogin(true)}>
              Login / Sign up
            </button>
            <ul className="gz-login-points">
              <li>Your cart ({cart.length} item{cart.length === 1 ? "" : "s"}, {formatPrice(payable)}) is saved</li>
              <li>You will come straight back to checkout after logging in</li>
            </ul>
            <Link to="/shop" className="gz-link-btn">← Continue shopping</Link>
          </div>
        </div>
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLoginSuccess={onLoginSuccess} />}
      </StoreLayout>
    );
  }

  const fp = { form, errors, onChange, onBlur };
  const remaining = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const itemCount = cart.reduce((n, i) => n + i.quantity, 0);
  const account = savedProfile();

  const summary = (
    <>
      <div className="gz-co-items">
        {cart.map((item) => (
          <div className="gz-co-item" key={item.key}>
            <div className="gz-co-thumb">
              {item.image ? <img src={item.image} alt="" /> : <FontAwesomeIcon icon={faBagShopping} />}
              <span className="gz-co-qty-badge">{item.quantity}</span>
            </div>
            <div className="gz-co-item-info">
              <strong>{item.name}</strong>
              {item.variationName && <span>{item.variationName}</span>}
              <div className="gz-co-stepper">
                <button type="button" onClick={() => updateQuantity(item.key, -1)} aria-label={`Decrease ${item.name}`}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <b>{item.quantity}</b>
                <button type="button" onClick={() => updateQuantity(item.key, 1)} aria-label={`Increase ${item.name}`}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button type="button" className="rm" onClick={() => removeFromCart(item.key)} aria-label={`Remove ${item.name}`}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
            <div className="gz-co-item-price">{formatPrice(item.price * item.quantity)}</div>
          </div>
        ))}
      </div>

      <div className="gz-co-ship">
        {remaining > 0 ? (
          <span>
            Add <b>{formatPrice(remaining)}</b> more for <b>free shipping</b>
          </span>
        ) : (
          <span className="ok">
            <FontAwesomeIcon icon={faCheck} /> You've got <b>free shipping</b>
          </span>
        )}
        <div className="gz-co-bar">
          <div style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="gz-co-coupon">
        {coupon ? (
          <div className="gz-co-coupon-applied">
            <FontAwesomeIcon icon={faTicket} />
            <div>
              <strong>{coupon.code}</strong>
              <span>{coupon.title}</span>
            </div>
            <button type="button" onClick={removeCoupon} aria-label="Remove coupon">Remove</button>
          </div>
        ) : (
          <>
            <div className="gz-co-coupon-form">
              <input
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value.toUpperCase());
                  setCouponError("");
                }}
                placeholder="Have a coupon code?"
                aria-label="Coupon code"
                maxLength={40}
                autoComplete="off"
                onKeyDown={(e) => {
                  // Enter applies the coupon, it must never submit the checkout form
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyCoupon(couponInput);
                  }
                }}
              />
              <button type="button" onClick={() => applyCoupon(couponInput)} disabled={couponBusy || !couponInput.trim()}>
                {couponBusy ? "Checking…" : "Apply"}
              </button>
            </div>
            {couponError && <div className="gz-field-error">{couponError}</div>}
          </>
        )}
      </div>

      <dl className="gz-co-totals">
        <div>
          <dt>Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})</dt>
          <dd>{formatPrice(cartSubtotal)}</dd>
        </div>
        {discount > 0 && (
          <div>
            <dt>Coupon discount</dt>
            <dd className="free">− {formatPrice(discount)}</dd>
          </div>
        )}
        <div>
          <dt>Shipping</dt>
          <dd className={shippingCharge ? "" : "free"}>{shippingCharge ? formatPrice(shippingCharge) : "Free"}</dd>
        </div>
        <div className="grand">
          <dt>Total</dt>
          <dd>{formatPrice(payable)}</dd>
        </div>
      </dl>
    </>
  );

  return (
    <StoreLayout title="Checkout">
      <div className="gz-container gz-co">
        <div className="gz-co-head">
          <h1>Checkout</h1>
          <ol className="gz-co-steps" aria-label="Checkout steps">
            <li className="done">
              <span><FontAwesomeIcon icon={faCheck} /></span> Cart
            </li>
            <li className="current">
              <span>2</span> Details
            </li>
            <li>
              <span>3</span> Payment
            </li>
          </ol>
        </div>

        <button type="button" className="gz-co-toggle" onClick={() => setSummaryOpen((o) => !o)} aria-expanded={summaryOpen}>
          <span>
            <FontAwesomeIcon icon={faBagShopping} /> {summaryOpen ? "Hide" : "Show"} order summary
            <FontAwesomeIcon icon={faChevronDown} className={summaryOpen ? "open" : ""} />
          </span>
          <strong>{formatPrice(payable)}</strong>
        </button>
        {summaryOpen && <div className="gz-co-card gz-co-mobile-summary">{summary}</div>}

        <form className="gz-co-layout" onSubmit={pay} noValidate>
          <div className="gz-co-main">
            <section className="gz-co-card">
              <div className="gz-co-card-head">
                <span className="gz-co-num">1</span>
                <div>
                  <h2>Contact details</h2>
                  <p>We'll send your order updates here.</p>
                </div>
                {account.name || account.email || account.mobile ? (
                  <span className="gz-co-chip">
                    <FontAwesomeIcon icon={faCircleCheck} /> Logged in
                  </span>
                ) : null}
              </div>
              <div className="gz-form-grid">
                <Field label="Full name" name="name" autoComplete="name" placeholder="As on your ID" {...fp} />
                <Field label="Mobile number" name="mobile" inputMode="numeric" maxLength={10} autoComplete="tel-national" placeholder="10 digit number" {...fp} />
                <Field label="Email" name="email" type="email" full autoComplete="email" placeholder="you@example.com" {...fp} />
              </div>
            </section>

            <section className="gz-co-card">
              <div className="gz-co-card-head">
                <span className="gz-co-num">2</span>
                <div>
                  <h2>Shipping address</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>
              {addresses.length > 0 && (
                <div className="gz-pick" role="radiogroup" aria-label="Saved addresses">
                  {addresses.map((a) => (
                    <button type="button" key={a._id} role="radio" aria-checked={addrChoice === a._id} className={`gz-pick-card ${addrChoice === a._id ? "selected" : ""}`} onClick={() => chooseAddress(a)}>
                      <span className="gz-pick-radio" aria-hidden="true" />
                      <span className="gz-pick-body">
                        <strong>
                          {a.name}
                          <span className="gz-addr-tag">{a.label}</span>
                          {a.is_default && <span className="gz-addr-default">Default</span>}
                        </strong>
                        <span>{[a.address_line_1, a.address_line_2, a.landmark].filter(Boolean).join(", ")}</span>
                        <span>{[a.city, a.state, a.pin_code].filter(Boolean).join(", ")}</span>
                        <span>Mobile: {a.mobile}</span>
                      </span>
                    </button>
                  ))}
                  <button type="button" className={`gz-pick-new ${addrChoice === "new" ? "selected" : ""}`} onClick={useNewAddress}>
                    <FontAwesomeIcon icon={faPlus} /> Deliver to a new address
                  </button>
                </div>
              )}

              {(addresses.length === 0 || addrChoice === "new") && (
              <div className="gz-form-grid">
                <Field label="Address line 1" name="address_line_1" full autoComplete="address-line1" placeholder="House / flat no., building, street" {...fp} />
                <Field label="Address line 2 (optional)" name="address_line_2" full autoComplete="address-line2" placeholder="Area, colony" {...fp} />
                <Field label="Landmark (optional)" name="landmark" full placeholder="Near…" {...fp} />
                <Field label="City" name="city" autoComplete="address-level2" {...fp} />
                <Field label="PIN code" name="pin_code" inputMode="numeric" maxLength={6} autoComplete="postal-code" placeholder="6 digit PIN" {...fp} />
                <Field label="State" name="state" full {...fp}>
                  <select
                    id="state" name="state" value={form.state} onChange={onChange} onBlur={onBlur}
                    autoComplete="address-level1"
                    className={`gz-form-input ${errors.state ? "invalid" : ""}`}
                  >
                    <option value="">Select state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              </div>
              )}

              {(addresses.length === 0 || addrChoice === "new") && (
                <label className="gz-check gz-save-addr">
                  <input type="checkbox" checked={saveNew} onChange={(e) => setSaveNew(e.target.checked)} />
                  <span>Save this address for next time</span>
                </label>
              )}

              <div className="gz-form-grid" style={{ marginTop: 18 }}>
                <Field label="Delivery note (optional)" name="customer_note" full maxLength={300} placeholder="Any instructions for the delivery partner" {...fp} />
              </div>
            </section>

            <section className="gz-co-card">
              <div className="gz-co-card-head">
                <span className="gz-co-num">3</span>
                <div>
                  <h2>Payment</h2>
                  <p>You'll complete the payment in a secure Razorpay window.</p>
                </div>
              </div>
              <div className="gz-co-pay">
                <div className="gz-co-pay-top">
                  <span className="gz-co-radio" aria-hidden="true" />
                  <strong>Pay online</strong>
                  <span className="gz-pay-badge-rzp">Razorpay</span>
                </div>
                <div className="gz-co-methods">
                  {["UPI", "Cards", "Netbanking", "Wallets"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="gz-co-secure">
                  <FontAwesomeIcon icon={faShieldHalved} /> 100% secure. We never see or store your card details.
                </p>
              </div>
            </section>
          </div>

          <aside className="gz-co-aside">
            <div className="gz-co-card gz-co-summary">
              <div className="gz-co-sum-head">
                <h2>Order summary</h2>
                <Link to="/shop" className="gz-link-btn">Add more</Link>
              </div>
              {summary}
              <button className="gz-co-pay-btn" type="submit" disabled={paying || syncing}>
                <FontAwesomeIcon icon={faLock} /> {paying ? "Processing…" : `Pay ${formatPrice(payable)}`}
              </button>
              <ul className="gz-co-trust">
                <li><FontAwesomeIcon icon={faShieldHalved} /> Secure payment</li>
                <li><FontAwesomeIcon icon={faTruckFast} /> Fast delivery</li>
                <li><FontAwesomeIcon icon={faRotateLeft} /> Easy returns</li>
              </ul>
              <p className="gz-co-legal">
                By placing your order you agree to our <Link to="/nutrition/terms-condition-customer">Terms</Link> and{" "}
                <Link to="/nutrition/return-and-refund-policy-customer">Refund policy</Link>.
              </p>
            </div>
          </aside>
        </form>
      </div>

      <div className="gz-co-bar-mobile">
        <div>
          <span>Total</span>
          <strong>{formatPrice(payable)}</strong>
        </div>
        <button className="gz-co-pay-btn" type="button" disabled={paying || syncing} onClick={pay}>
          <FontAwesomeIcon icon={faLock} /> {paying ? "Processing…" : "Pay now"}
        </button>
      </div>
    </StoreLayout>
  );
};

export default Checkout;
