import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPrint } from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import { formatPrice } from "../../assets/js/store/storeApi";
import { normalizeOrder } from "../../assets/js/store/orderUtils";
import "../../assets/css/invoice.css";

const hasAuth = () => !!localStorage.getItem("fg_group_user_authorization");

const SELLER = {
  name: "Gomzi Lifesciences LLP",
  address: "443, 444, 445, RJD Textile Park, Ichchhapor, Hazira Road, Surat, Gujarat 394510",
  email: "info@gomzilifesciences.in",
  site: "www.gomzilifesciences.in",
};

/** Invoice for one paid website order. `?print=1` opens the print / save-as-PDF dialog straight away. */
export default function OrderInvoice() {
  const { orderId } = useParams();
  const wantsPrint = new URLSearchParams(useLocation().search).get("print") === "1";
  const [authed, setAuthed] = useState(hasAuth);
  const [showLogin, setShowLogin] = useState(false);
  const [state, setState] = useState("loading"); // loading | ready | missing | error
  const [order, setOrder] = useState(null);

  const load = useCallback(async () => {
    setState("loading");
    try {
      const response = await axiosInstance.get("/meals/get-product-tracking", { params: { order_id: orderId } });
      const found = (response.data?.data || [])[0];
      if (!found) return setState("missing");
      setOrder(normalizeOrder(found));
      setState("ready");
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("fg_group_user_authorization");
        setAuthed(false);
      } else if (error?.response?.status === 400) {
        setState("missing");
      } else {
        setState("error");
      }
    }
  }, [orderId]);

  useEffect(() => {
    if (authed) load();
  }, [authed, load]);

  useEffect(() => {
    if (state !== "ready" || !wantsPrint) return undefined;
    const t = setTimeout(() => window.print(), 600);
    return () => clearTimeout(t);
  }, [state, wantsPrint]);

  if (!authed) {
    return (
      <StoreLayout title="Invoice">
        <div className="gz-container">
          <div className="gz-login-gate">
            <h1>Log in to view this invoice</h1>
            <p>Invoices are only visible to the customer who placed the order.</p>
            <button className="gz-btn-checkout" onClick={() => setShowLogin(true)}>
              Login / Sign up
            </button>
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

  if (state !== "ready") {
    return (
      <StoreLayout title="Invoice">
        <div className="gz-container gz-state-box">
          {state === "loading" && "Loading invoice…"}
          {state === "missing" && (
            <>
              <p>We couldn't find this invoice.</p>
              <Link to="/invoice" className="gz-link-btn">← Back to invoices</Link>
            </>
          )}
          {state === "error" && (
            <>
              <p>Couldn't load this invoice.</p>
              <button className="gz-btn-ghost" onClick={load}>Try again</button>
            </>
          )}
        </div>
      </StoreLayout>
    );
  }

  const n = order.notes;
  const address = [n.address_line_1, n.address_line_2, n.landmark].filter(Boolean).join(", ");
  const cityLine = [n.city, n.state, n.pin_code].filter(Boolean).join(", ");
  const method = order.paymentMode && /cash/i.test(order.paymentMode) ? "Cash on delivery" : "Online (Razorpay)";

  return (
    <StoreLayout title={`Invoice ${order.receipt}`}>
      <div className="gz-container gz-inv-page">
        <div className="gz-inv-toolbar gz-no-print">
          <Link to="/invoice" className="gz-btn-ghost">
            <FontAwesomeIcon icon={faArrowLeft} /> All invoices
          </Link>
          <button type="button" className="gz-btn-cart gz-btn-sm" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print / Save as PDF
          </button>
        </div>

        <article className="gz-inv-doc" aria-label={`Invoice ${order.receipt}`}>
          <header className="gz-inv-top">
            <div className="gz-inv-brand">
              <img src={process.env.PUBLIC_URL + "/assets/images/logo/gomzi-life-science-logo.webp"} alt="Gomzi Life Science" />
              <div>
                <strong>{SELLER.name}</strong>
                <span>{SELLER.address}</span>
                <span>{SELLER.email} · {SELLER.site}</span>
              </div>
            </div>
            <div className="gz-inv-title-box">
              <h1>INVOICE</h1>
              <dl>
                <div><dt>Invoice no.</dt><dd>{order.receipt}</dd></div>
                <div><dt>Date</dt><dd>{dayjs(order.createdAt).format("D MMM YYYY")}</dd></div>
                <div><dt>Payment</dt><dd><span className="gz-inv-paid">PAID</span></dd></div>
              </dl>
            </div>
          </header>

          <section className="gz-inv-parties">
            <div>
              <h3>Billed to</h3>
              <p>
                <strong>{n.name || "Customer"}</strong>
                {n.email && <><br />{n.email}</>}
                {n.mobile && <><br />{n.mobile}</>}
              </p>
            </div>
            <div>
              <h3>Shipped to</h3>
              <p>
                {address}
                {cityLine && <><br />{cityLine}</>}
              </p>
            </div>
            <div>
              <h3>Payment details</h3>
              <p>
                Method: {method}
                {order.paymentId && <><br />Payment ID: <span className="gz-inv-mono">{order.paymentId}</span></>}
                <br />Paid on {dayjs(order.createdAt).format("D MMM YYYY")}
              </p>
            </div>
          </section>

          <table className="gz-inv-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th className="r">Qty</th>
                <th className="r">Rate</th>
                <th className="r">Amount</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, i) => (
                <tr key={`${item.productId}-${i}`}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td className="r">{item.quantity}</td>
                  <td className="r">{formatPrice(item.unitPrice)}</td>
                  <td className="r">{formatPrice(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="gz-inv-totals">
            <dl>
              <div><dt>Subtotal</dt><dd>{formatPrice(order.itemsTotal)}</dd></div>
              {order.discount > 0 && <div><dt>Coupon{order.couponCode ? ` (${order.couponCode})` : ""}</dt><dd>− {formatPrice(order.discount)}</dd></div>}
              <div><dt>Shipping</dt><dd>{order.shipping ? formatPrice(order.shipping) : "Free"}</dd></div>
              <div className="grand"><dt>Total paid</dt><dd>{formatPrice(order.total)}</dd></div>
            </dl>
          </div>

          <footer className="gz-inv-foot">
            <p>All prices are in Indian Rupees (₹) and inclusive of applicable taxes.</p>
            <p>This is a computer-generated invoice and does not need a signature. For help, write to {SELLER.email}.</p>
            <p className="thanks">Thank you for shopping with Gomzi Nutrition!</p>
          </footer>
        </article>
      </div>
    </StoreLayout>
  );
}
