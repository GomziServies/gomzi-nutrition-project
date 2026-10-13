import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCheck,
  faMagnifyingGlass,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import AccountSidebar from "../../components/store/AccountSidebar";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import { createOrderRequest, fetchOrderRequests, fetchStoreProducts, formatPrice } from "../../assets/js/store/storeApi";
import Modal from "../../components/store/Modal";
import { normalizeOrder as normalize } from "../../assets/js/store/orderUtils";
import { useCart } from "../../context/CartContext";
import "../../assets/css/account.css";
import "../../assets/css/store-modal.css";

const FILE_BASE = "https://files.fggroup.in/";
const PAGE_SIZE = 5;
const STEPS = [
  { key: "PLACED", label: "Order placed" },
  { key: "DISPATCHED", label: "Shipped" },
  { key: "DELIVERED", label: "Delivered" },
];

const FILTERS = [
  { id: "all", label: "All orders" },
  { id: "active", label: "In progress" },
  { id: "delivered", label: "Delivered" },
  { id: "closed", label: "Cancelled / Returned" },
];

const STATUS_STYLE = {
  PLACED: { label: "Order placed", tone: "blue" },
  DISPATCHED: { label: "Shipped", tone: "amber" },
  DELIVERED: { label: "Delivered", tone: "green" },
  CANCELLED: { label: "Cancelled", tone: "red" },
  RETURN: { label: "Returned", tone: "orange" },
};

const hasAuth = () => !!localStorage.getItem("fg_group_user_authorization");
const fmtDate = (d) => dayjs(d).format("D MMM YYYY");
const fmtDateTime = (d) => dayjs(d).format("D MMM, h:mm A");

const RETURN_WINDOW_DAYS = 7;
const REASONS = {
  CANCEL: ["Ordered by mistake", "Found a better price elsewhere", "Delivery is taking too long", "Want to change the products or address", "Other"],
  RETURN: ["Damaged product", "Wrong product delivered", "Product quality issue", "Product expired or near expiry", "Not as described", "Other"],
};

/** What the customer may ask for right now: cancel before shipping, return within 7 days of delivery */
const requestOptions = (order) => {
  if (order.status === "PLACED") return { type: "CANCEL", label: "Cancel order" };
  if (order.status === "DELIVERED") {
    const delivered = [...order.tracking].reverse().find((t) => t.shipment_status === "DELIVERED");
    const days = delivered ? RETURN_WINDOW_DAYS - dayjs().diff(dayjs(delivered.updatedAt), "day", true) : 0;
    if (days > 0) return { type: "RETURN", label: "Return / refund", daysLeft: Math.ceil(days) };
  }
  return null;
};

const requestNote = (req) => {
  const what = req.type === "CANCEL" ? "Cancellation" : "Return";
  switch (req.status) {
    case "PENDING":
      return { tone: "amber", text: `${what} requested. We'll review it and update you within 1-2 working days.` };
    case "APPROVED":
      return { tone: "blue", text: req.type === "CANCEL" ? "Cancellation approved. Your refund will be issued shortly." : "Return approved. Our team will contact you to arrange the pickup." };
    case "REFUNDED":
      return { tone: "green", text: `Refund of ${formatPrice(req.refund?.amount)} issued. It reaches your original payment method in 5-7 working days.` };
    case "REJECTED":
      return { tone: "red", text: `${what} request not approved${req.admin_note ? `: ${req.admin_note}` : "."}` };
    default:
      return null;
  }
};

const Skeleton = () => (
  <div className="gz-acc-layout" aria-busy="true">
    <div className="gz-acc-side gz-skel" style={{ height: 320 }} />
    <div className="gz-acc-main">
      {[0, 1].map((i) => (
        <div key={i} className="gz-acc-card gz-skel" style={{ height: 260 }} />
      ))}
    </div>
  </div>
);

const Tracker = ({ order }) => {
  const reached = (key) => order.tracking.find((t) => t.shipment_status === key);
  const done = STEPS.filter((s) => reached(s.key) || s.key === "PLACED").length;
  return (
    <ol className="gz-track" aria-label="Order progress">
      {STEPS.map((s, i) => {
        const hit = reached(s.key) || (s.key === "PLACED" && order.status !== "CANCELLED");
        return (
          <li key={s.key} className={hit ? "done" : ""} data-current={i === done - 1 ? "true" : undefined}>
            <span className="gz-track-dot">{hit && <FontAwesomeIcon icon={faCheck} />}</span>
            <strong>{s.label}</strong>
            <small>{reached(s.key) ? fmtDateTime(reached(s.key).updatedAt) : s.key === "PLACED" ? fmtDateTime(order.createdAt) : "—"}</small>
          </li>
        );
      })}
    </ol>
  );
};

const OrderCard = ({ order, onBuyAgain, busy, request, onRequest }) => {
  const st = STATUS_STYLE[order.status] || STATUS_STYLE.PLACED;
  const closed = order.status === "CANCELLED" || order.status === "RETURN";
  const n = order.notes;
  const options = requestOptions(order);
  const address = [n.address_line_1, n.address_line_2, n.landmark, [n.city, n.state].filter(Boolean).join(", "), n.pin_code].filter(Boolean).join(", ");

  return (
    <article className="gz-order">
      <header className="gz-order-head">
        <div>
          <span>Order placed</span>
          <strong>{fmtDate(order.createdAt)}</strong>
        </div>
        <div>
          <span>Total</span>
          <strong>{formatPrice(order.total)}</strong>
        </div>
        {n.name && (
          <div className="gz-hide-sm">
            <span>Ship to</span>
            <strong>{n.name}</strong>
          </div>
        )}
        <div className="gz-order-no">
          <span>Order #</span>
          <strong>{order.receipt}</strong>
        </div>
        <span className={`gz-status ${st.tone}`}>{st.label}</span>
      </header>

      <div className="gz-order-body">
        <div className="gz-order-items">
          {order.items.map((item, i) => (
            <div className="gz-order-item" key={`${item.productId}-${i}`}>
              <Link to={`/shop/${item.productId}`} className="gz-order-img">
                {item.image ? <img src={item.image} alt="" loading="lazy" /> : <FontAwesomeIcon icon={faBagShopping} />}
              </Link>
              <div className="gz-order-item-info">
                <Link to={`/shop/${item.productId}`}>{item.name}</Link>
                <span>Qty {item.quantity}</span>
              </div>
              <strong>{formatPrice(item.amount)}</strong>
            </div>
          ))}
        </div>

        <aside className="gz-order-side">
          {!closed ? <Tracker order={order} /> : <div className="gz-closed-note">This order was {st.label.toLowerCase()}.</div>}

          <dl className="gz-order-sum">
            <div>
              <dt>Items</dt>
              <dd>{formatPrice(order.itemsTotal)}</dd>
            </div>
            {order.discount > 0 && (
              <div>
                <dt>Coupon {order.couponCode}</dt>
                <dd className="gz-save-text">− {formatPrice(order.discount)}</dd>
              </div>
            )}
            <div>
              <dt>Shipping</dt>
              <dd>{order.shipping ? formatPrice(order.shipping) : "Free"}</dd>
            </div>
            <div className="total">
              <dt>Total paid</dt>
              <dd>{formatPrice(order.total)}</dd>
            </div>
          </dl>
        </aside>
      </div>

      {request && requestNote(request) && (
        <div className={`gz-req-note ${requestNote(request).tone}`}>
          <strong>{request.type === "CANCEL" ? "Cancellation" : "Return"}: {request.status.charAt(0) + request.status.slice(1).toLowerCase()}</strong>
          <span>{requestNote(request).text}</span>
        </div>
      )}

      <footer className="gz-order-foot">
        {address && (
          <p>
            <span>Delivering to</span> {address}
          </p>
        )}
        <div className="gz-order-actions">
          <button type="button" className="gz-btn-ghost" disabled={busy} onClick={() => onBuyAgain(order)}>
            <FontAwesomeIcon icon={faRotateRight} /> {busy ? "Adding…" : "Buy again"}
          </button>
          {options && (!request || request.status === "REJECTED") && (
            <button type="button" className="gz-btn-ghost gz-btn-warn" onClick={() => onRequest(order, options)}>
              {options.label}
            </button>
          )}
          <Link to="/help-center" className="gz-btn-ghost">
            Need help?
          </Link>
        </div>
      </footer>
    </article>
  );
};

function UserOrder() {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [authed, setAuthed] = useState(hasAuth);
  const [showLogin, setShowLogin] = useState(false);
  const [state, setState] = useState("loading"); // loading | ready | error
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [buyingId, setBuyingId] = useState(null);
  const [requests, setRequests] = useState([]);
  const [dialog, setDialog] = useState(null); // { order, type, label }
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [person, setPerson] = useState({ name: "", contact: "", photo: "" });

  const load = useCallback(async () => {
    setState("loading");
    try {
      const response = await axiosInstance.get("/meals/get-product-tracking");
      const list = (response.data?.data || []).map(normalize).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(list);
      setState("ready");
      fetchOrderRequests().then(({ data }) => setRequests(Array.isArray(data) ? data : [])).catch(() => {});
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("fg_group_user_authorization");
        setAuthed(false);
      } else {
        setState("error");
      }
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    load();
    try {
      const data = JSON.parse(localStorage.getItem("user_info") || "null");
      const u = data?.user || data || {};
      const first = (u.first_name || "").trim();
      const last = (u.last_name || "").trim();
      const real = first && first.toLowerCase() !== "fg";
      setPerson({
        name: real ? `${first} ${last && last.toLowerCase() !== "user" ? last : ""}`.trim() : "",
        contact: u.mobile ? `${u.country_code || ""} ${u.mobile}`.trim() : u.email || "",
        photo: u.profile_image ? FILE_BASE + u.profile_image : "",
      });
    } catch (e) {
      /* header details are optional */
    }
  }, [authed, load]);

  useEffect(() => setShown(PAGE_SIZE), [filter, search]);

  const counts = useMemo(
    () => ({
      all: orders.length,
      active: orders.filter((o) => ["PLACED", "DISPATCHED"].includes(o.status)).length,
      delivered: orders.filter((o) => o.status === "DELIVERED").length,
      closed: orders.filter((o) => ["CANCELLED", "RETURN"].includes(o.status)).length,
    }),
    [orders],
  );

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return orders.filter((o) => {
      const byFilter =
        filter === "all" ||
        (filter === "active" && ["PLACED", "DISPATCHED"].includes(o.status)) ||
        (filter === "delivered" && o.status === "DELIVERED") ||
        (filter === "closed" && ["CANCELLED", "RETURN"].includes(o.status));
      const bySearch = !q || String(o.receipt).toLowerCase().includes(q) || o.items.some((i) => i.name.toLowerCase().includes(q));
      return byFilter && bySearch;
    });
  }, [orders, filter, search]);

  const openRequest = (order, options) => {
    setDialog({ order, ...options });
    setReason("");
    setComment("");
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    if (!reason) return toast.error("Please choose a reason");
    setSending(true);
    try {
      await createOrderRequest({ order_id: dialog.order.id, type: dialog.type, reason, comment: comment.trim() });
      toast.success(dialog.type === "CANCEL" ? "Cancellation requested" : "Return requested");
      setDialog(null);
      const { data } = await fetchOrderRequests();
      setRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error(err.message || "Couldn't send your request");
    } finally {
      setSending(false);
    }
  };

  const requestFor = (order) => requests.find((r) => String(r.order_id) === String(order.id));

  const buyAgain = async (order) => {
    setBuyingId(order.id);
    try {
      const { data: catalog } = await fetchStoreProducts();
      let added = 0;
      order.items.forEach((item) => {
        const product = catalog.find((p) => p.id === item.productId);
        const variation = item.variationId ? product?.variations.find((v) => v.id === item.variationId) : null;
        const available = product && (item.variationId ? variation?.in_stock : !product.variations.length && product.in_stock);
        if (available) {
          addToCart(product, variation, item.quantity);
          added += 1;
        }
      });
      if (!added) toast.info("These products are no longer available.");
      else {
        if (added < order.items.length) toast.info("Some items are no longer available and were skipped.");
        setIsCartOpen(false);
        navigate("/checkout");
      }
    } catch (e) {
      toast.error("Couldn't add these items. Please try again.");
    } finally {
      setBuyingId(null);
    }
  };

  if (!authed) {
    return (
      <StoreLayout title="My Orders">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">📦</div>
            <h1>Log in to see your orders</h1>
            <p>Log in to view your order history and track deliveries.</p>
            <button className="gz-btn-checkout" onClick={() => setShowLogin(true)}>
              Login / Sign up
            </button>
            <Link to="/shop" className="gz-link-btn mt-3 d-inline-block">
              ← Continue shopping
            </Link>
          </div>
        </div>
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLoginSuccess={() => {
              setShowLogin(false);
              setAuthed(true);
              window.dispatchEvent(new Event("user-info-updated"));
            }}
          />
        )}
      </StoreLayout>
    );
  }

  return (
    <StoreLayout title="My Orders">
      <div className="gz-container">
        <div className="gz-acc-head">
          <h1>My Orders</h1>
          <p>Track, review and re-order your purchases.</p>
        </div>

        {state === "loading" ? (
          <Skeleton />
        ) : (
          <div className="gz-acc-layout">
            <AccountSidebar active="/user/order" name={person.name} photo={person.photo} contact={person.contact} />

            <div className="gz-acc-main">
              {state === "error" && (
                <div className="gz-acc-card gz-empty">
                  <p>We couldn't load your orders.</p>
                  <button className="gz-btn-cart gz-btn-sm" onClick={load}>
                    Try again
                  </button>
                </div>
              )}

              {state === "ready" && orders.length === 0 && (
                <div className="gz-acc-card gz-empty">
                  <div className="gz-empty-icon">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </div>
                  <h2>No orders yet</h2>
                  <p>When you place an order, it will show up here so you can track it.</p>
                  <Link to="/shop" className="gz-btn-cart gz-btn-sm gz-inline-btn">
                    Start shopping
                  </Link>
                </div>
              )}

              {state === "ready" && orders.length > 0 && (
                <>
                  <div className="gz-orders-toolbar">
                    <div className="gz-tabs" role="tablist">
                      {FILTERS.filter((f) => f.id === "all" || counts[f.id] > 0).map((f) => (
                        <button
                          key={f.id}
                          role="tab"
                          aria-selected={filter === f.id}
                          className={`gz-tab ${filter === f.id ? "active" : ""}`}
                          onClick={() => setFilter(f.id)}
                        >
                          {f.label}
                          <span className="gz-tab-count">{counts[f.id]}</span>
                        </button>
                      ))}
                    </div>
                    <div className="gz-search-input-wrap">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                      <input
                        className="gz-search-input"
                        placeholder="Search by order # or product"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>

                  {visible.length === 0 ? (
                    <div className="gz-acc-card gz-empty">
                      <p>No orders match your search.</p>
                      <button
                        className="gz-btn-ghost"
                        onClick={() => {
                          setFilter("all");
                          setSearch("");
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  ) : (
                    visible.slice(0, shown).map((o) => <OrderCard key={o.id} order={o} onBuyAgain={buyAgain} busy={buyingId === o.id} request={requestFor(o)} onRequest={openRequest} />)
                  )}

                  {visible.length > shown && (
                    <div className="text-center">
                      <button className="gz-btn-view gz-load-more" onClick={() => setShown((n) => n + PAGE_SIZE)}>
                        Show more orders ({visible.length - shown})
                      </button>
                    </div>
                  )}
                </>
              )}

              <p className="gz-acc-legal">
                By ordering you agree to our <Link to="/nutrition/terms-condition-customer">Terms</Link>,{" "}
                <Link to="/nutrition/shipping-policy-customer">Shipping policy</Link> and{" "}
                <Link to="/nutrition/return-and-refund-policy-customer">Return &amp; refund policy</Link>.
              </p>
            </div>
          </div>
        )}
      </div>
      {dialog && (
        <Modal title={dialog.type === "CANCEL" ? "Cancel this order?" : "Return / refund request"} onClose={() => setDialog(null)} width={520}>
          <form onSubmit={sendRequest}>
            <p className="gz-req-intro">
              {dialog.type === "CANCEL"
                ? `Order ${dialog.order.receipt} has not shipped yet. If we approve the cancellation, you get a full refund.`
                : `Order ${dialog.order.receipt} was delivered. You can return it within ${RETURN_WINDOW_DAYS} days of delivery${dialog.daysLeft ? ` (${dialog.daysLeft} day${dialog.daysLeft === 1 ? "" : "s"} left)` : ""}. Refunds are issued after we receive the product.`}
            </p>
            <label className="gz-form-label fw-bold mb-1" htmlFor="req_reason">Reason</label>
            <select id="req_reason" className="gz-form-input" value={reason} onChange={(e) => setReason(e.target.value)} required>
              <option value="">Select a reason</option>
              {REASONS[dialog.type].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <label className="gz-form-label fw-bold mb-1 mt-3" htmlFor="req_comment">Anything else we should know? (optional)</label>
            <textarea id="req_comment" className="gz-form-input" rows={3} maxLength={500} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add details to help us process this faster" />
            <div className="gz-dialog-actions">
              <button type="button" className="gz-btn-ghost" onClick={() => setDialog(null)} disabled={sending}>Keep my order</button>
              <button type="submit" className="gz-btn-cart" disabled={sending}>{sending ? "Sending…" : dialog.type === "CANCEL" ? "Request cancellation" : "Request return"}</button>
            </div>
          </form>
        </Modal>
      )}
    </StoreLayout>
  );
}

export default UserOrder;
