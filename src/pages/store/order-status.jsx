import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faBagShopping,
  faCheck,
  faCircleExclamation,
  faCopy,
  faHeadset,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import { fetchStoreOrder, formatPrice } from "../../assets/js/store/storeApi";
import "../../assets/css/order-status.css";

const STEPS = [
  { key: "PLACED", label: "Order placed" },
  { key: "DISPATCHED", label: "Shipped" },
  { key: "DELIVERED", label: "Delivered" },
];

const POLL_MS = 4000;
const POLL_MAX = 30; // ~2 minutes of automatic re-checks while a payment is being confirmed
const DELIVERY_DAYS = 7;

const Hero = ({ tone, icon, title, children }) => (
  <div className={`gz-os-hero ${tone}`}>
    <div className="gz-os-badge" aria-hidden="true">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h1>{title}</h1>
    {children}
  </div>
);

const CopyNumber = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      toast.info(`Order number: ${value}`);
    }
  };
  return (
    <button type="button" className="gz-os-copy" onClick={copy} aria-label="Copy order number">
      <span>{value}</span>
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
    </button>
  );
};

const Summary = ({ order }) => (
  <section className="gz-os-card">
    <h2>Order summary</h2>
    <div className="gz-os-items">
      {order.items.map((item, i) => (
        <div className="gz-os-item" key={i}>
          <div className="gz-os-item-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div>
            <strong>{item.name}</strong>
            <span>Qty {item.quantity}</span>
          </div>
          <b>{formatPrice(item.line_total)}</b>
        </div>
      ))}
    </div>
    <dl className="gz-os-sum">
      <div><dt>Subtotal</dt><dd>{formatPrice(order.subtotal)}</dd></div>
      {order.discount > 0 && <div><dt>Coupon{order.coupon_code ? ` ${order.coupon_code}` : ""}</dt><dd className="free">− {formatPrice(order.discount)}</dd></div>}
      <div><dt>Shipping</dt><dd className={order.shipping_charge ? "" : "free"}>{order.shipping_charge ? formatPrice(order.shipping_charge) : "Free"}</dd></div>
      <div className="grand"><dt>Total</dt><dd>{formatPrice(order.total)}</dd></div>
    </dl>
  </section>
);

const Delivery = ({ order }) => {
  const a = order.shipping_address || {};
  const address = [a.address_line_1, a.address_line_2].filter(Boolean).join(", ");
  const city = [a.city, a.state, a.pin_code].filter(Boolean).join(", ");
  return (
    <section className="gz-os-card">
      <h2>Delivery details</h2>
      <div className="gz-os-delivery">
        <div>
          <span>Shipping to</span>
          <p>
            <strong>{order.customer?.name}</strong>
            <br />
            {address}
            <br />
            {city}
          </p>
        </div>
        <div>
          <span>Contact</span>
          <p>
            {order.customer?.mobile}
            <br />
            {order.customer?.email}
          </p>
        </div>
      </div>
    </section>
  );
};

const Tracker = ({ status, placedAt }) => {
  const idx = Math.max(0, STEPS.findIndex((s) => s.key === status));
  return (
    <ol className="gz-os-track" aria-label="Order progress">
      {STEPS.map((s, i) => (
        <li key={s.key} className={i <= idx ? "done" : ""}>
          <span>{i <= idx && <FontAwesomeIcon icon={faCheck} />}</span>
          <strong>{s.label}</strong>
          <small>{i === 0 ? dayjs(placedAt).format("D MMM, h:mm A") : i <= idx ? "Updated" : "Pending"}</small>
        </li>
      ))}
    </ol>
  );
};

const SupportLink = () => (
  <Link to="/help-center" className="gz-os-btn ghost">
    <FontAwesomeIcon icon={faHeadset} /> Contact support
  </Link>
);

const LookupForm = ({ lookup, setLookup, onSubmit, loading, error }) => (
  <div className="gz-login-gate" style={{ maxWidth: 520 }}>
    <div className="gz-login-icon" aria-hidden="true">
      <FontAwesomeIcon icon={faBagShopping} />
    </div>
    <h1>Track your order</h1>
    <p>Enter the order number and the email you used at checkout.</p>
    <form onSubmit={onSubmit} className="gz-os-lookup">
      <label htmlFor="order_number">Order number</label>
      <input id="order_number" className="gz-form-input" placeholder="GN-12345678" required value={lookup.order_number} onChange={(e) => setLookup({ ...lookup, order_number: e.target.value })} />
      <label htmlFor="email">Email used at checkout</label>
      <input id="email" type="email" className="gz-form-input" placeholder="you@example.com" required value={lookup.email} onChange={(e) => setLookup({ ...lookup, email: e.target.value })} />
      {error && <div className="gz-field-error">{error}</div>}
      <button className="gz-btn-checkout" disabled={loading}>{loading ? "Searching…" : "Track order"}</button>
    </form>
  </div>
);

export default function OrderStatus() {
  const location = useLocation();
  const initial = location.state || {};
  const [lookup, setLookup] = useState({ order_number: initial.order_number || "", email: initial.email || "" });
  const [identity, setIdentity] = useState(initial.order_number && initial.email ? { order_number: initial.order_number, email: initial.email } : null);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(!!identity);
  const [error, setError] = useState("");
  const [polls, setPolls] = useState(0);
  const timer = useRef();

  const load = useCallback(async (id, { silent } = {}) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      const { data } = await fetchStoreOrder(id.order_number.trim(), id.email.trim());
      setOrder(data);
      return data;
    } catch (e) {
      if (!silent) {
        setOrder(null);
        setIdentity(null);
        setError(e.status === 404 ? "No order found with these details." : e.message);
      }
    } finally {
      if (!silent) setLoading(false);
    }
    return null;
  }, []);

  // Load the order; while a fresh payment is still being confirmed, keep re-checking automatically.
  useEffect(() => {
    if (!identity) return undefined;
    let cancelled = false;
    load(identity).then((data) => {
      if (cancelled || !data) return;
      if (data.payment_status === "PENDING" && initial.justPaid && !initial.failed) schedule(0);
    });

    function schedule(n) {
      if (n >= POLL_MAX) return;
      timer.current = setTimeout(async () => {
        const data = await load(identity, { silent: true });
        setPolls(n + 1);
        if (!cancelled && data?.payment_status === "PENDING") schedule(n + 1);
      }, POLL_MS);
    }
    return () => {
      cancelled = true;
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identity]);

  const submitLookup = (e) => {
    e.preventDefault();
    setIdentity({ ...lookup });
  };

  const reset = () => {
    setOrder(null);
    setIdentity(null);
    setError("");
  };

  // ---- Which screen? ----
  const paid = order?.payment_status === "SUCCESS";
  const failed = !paid && (order?.payment_status === "FAILED" || initial.failed);
  const confirming = !paid && !failed && order?.payment_status === "PENDING" && initial.justPaid;
  const stillConfirming = confirming && polls >= POLL_MAX;

  let body;

  if (!identity || (!order && !loading)) {
    body = (
      <div className="gz-container">
        <LookupForm lookup={lookup} setLookup={setLookup} onSubmit={submitLookup} loading={loading} error={error} />
      </div>
    );
  } else if (loading && !order) {
    body = (
      <div className="gz-container">
        <div className="gz-os-hero loading" aria-busy="true">
          <span className="gz-os-spinner" />
          <h1>Loading your order…</h1>
        </div>
      </div>
    );
  } else if (paid) {
    const eta = dayjs(order.createdAt).add(DELIVERY_DAYS, "day").format("ddd, D MMM");
    body = (
      <div className="gz-container gz-os">
        <Hero tone="success" icon={faCheck} title="Order confirmed!">
          <p className="gz-os-sub">
            Thank you{order.customer?.name ? `, ${order.customer.name.split(" ")[0]}` : ""}! Your payment was received and your order is being prepared. A confirmation has been sent to <b>{order.customer?.email}</b>.
          </p>
          <div className="gz-os-meta">
            <div><span>Order number</span><CopyNumber value={order.order_number} /></div>
            <div><span>Amount paid</span><strong>{formatPrice(order.total)}</strong></div>
            <div><span>Estimated delivery</span><strong>by {eta}</strong></div>
          </div>
        </Hero>

        <div className="gz-os-grid">
          <div className="gz-os-col">
            <section className="gz-os-card">
              <h2>Delivery status</h2>
              <Tracker status={order.shipment_status || "PLACED"} placedAt={order.createdAt} />
            </section>
            <Delivery order={order} />
          </div>
          <div className="gz-os-col">
            <Summary order={order} />
          </div>
        </div>

        <div className="gz-os-actions">
          <Link to="/user/order" className="gz-os-btn primary">View my orders</Link>
          <Link to="/invoice" className="gz-os-btn ghost">Get invoice</Link>
          <Link to="/shop" className="gz-os-btn ghost">Continue shopping</Link>
        </div>
      </div>
    );
  } else if (failed) {
    body = (
      <div className="gz-container gz-os gz-os-narrow">
        <Hero tone="failed" icon={faXmark} title="Payment failed">
          <p className="gz-os-sub">
            {initial.reason || "We couldn't complete your payment, so your order was not placed."} Don't worry, your cart is saved and you can try again.
          </p>
          {order?.order_number && (
            <div className="gz-os-meta single">
              <div><span>Reference</span><CopyNumber value={order.order_number} /></div>
            </div>
          )}
        </Hero>
        <div className="gz-os-note warn">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p>
            If money was deducted from your account, it will be refunded automatically to the same account in 5–7 working days. You don't need to do anything.
          </p>
        </div>
        <div className="gz-os-actions center">
          <Link to="/checkout" className="gz-os-btn primary">
            <FontAwesomeIcon icon={faArrowRotateRight} /> Try payment again
          </Link>
          <SupportLink />
        </div>
        {order && <Summary order={order} />}
      </div>
    );
  } else if (confirming) {
    body = (
      <div className="gz-container gz-os gz-os-narrow">
        <Hero tone="pending" icon={faCircleExclamation} title={stillConfirming ? "Still confirming your payment" : "Confirming your payment…"}>
          {!stillConfirming && <span className="gz-os-spinner" aria-hidden="true" />}
          <p className="gz-os-sub">
            {stillConfirming
              ? "Your bank is taking longer than usual. If money was deducted, your order will be confirmed automatically and you'll get an email. You can safely close this page."
              : "Please don't close or refresh this page. This usually takes a few seconds."}
          </p>
          <div className="gz-os-meta single">
            <div><span>Order number</span><CopyNumber value={order.order_number} /></div>
          </div>
        </Hero>
        <div className="gz-os-actions center">
          <button type="button" className="gz-os-btn primary" onClick={() => load(identity)}>
            <FontAwesomeIcon icon={faArrowRotateRight} /> Check status now
          </button>
          <SupportLink />
        </div>
        <Summary order={order} />
      </div>
    );
  } else {
    // Order exists but was never paid (e.g. looked up later, or the customer closed the payment window)
    body = (
      <div className="gz-container gz-os gz-os-narrow">
        <Hero tone="pending" icon={faCircleExclamation} title="Payment not completed">
          <p className="gz-os-sub">This order is waiting for payment and hasn't been placed yet. Your cart is saved, so you can complete your purchase any time.</p>
          <div className="gz-os-meta single">
            <div><span>Order number</span><CopyNumber value={order.order_number} /></div>
          </div>
        </Hero>
        <div className="gz-os-actions center">
          <Link to="/checkout" className="gz-os-btn primary">Go to checkout</Link>
          <SupportLink />
        </div>
        <Summary order={order} />
      </div>
    );
  }

  return (
    <StoreLayout title="Order status">
      {body}
      {identity && order && (
        <p className="gz-os-track-another">
          <button type="button" className="gz-link-btn" onClick={reset}>
            Track a different order
          </button>
        </p>
      )}
    </StoreLayout>
  );
}
