import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faFileInvoice,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import AccountSidebar from "../../components/store/AccountSidebar";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import { formatPrice } from "../../assets/js/store/storeApi";
import { normalizeOrder } from "../../assets/js/store/orderUtils";
import "../../assets/css/account.css";
import "../../assets/css/invoice.css";

const FILE_BASE = "https://files.fggroup.in/";
const PAGE_SIZE = 8;
const hasAuth = () => !!localStorage.getItem("fg_group_user_authorization");

const FILTERS = [
  { id: "all", label: "All invoices" },
  { id: "order", label: "Product purchases" },
  { id: "tax", label: "Other invoices" },
];

const summarize = (items) => {
  if (!items.length) return "Order";
  const first = items[0].name;
  return items.length > 1 ? `${first} + ${items.length - 1} more` : first;
};

const Skeleton = () => (
  <div className="gz-acc-layout" aria-busy="true">
    <div className="gz-acc-side gz-skel" style={{ height: 320 }} />
    <div className="gz-acc-main">
      <div className="gz-acc-card gz-skel" style={{ height: 110 }} />
      <div className="gz-acc-card gz-skel" style={{ height: 320 }} />
    </div>
  </div>
);

export default function InvoicesList() {
  const [authed, setAuthed] = useState(hasAuth);
  const [showLogin, setShowLogin] = useState(false);
  const [state, setState] = useState("loading"); // loading | ready | error
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [person, setPerson] = useState({ name: "", contact: "", photo: "" });

  const load = useCallback(async () => {
    setState("loading");
    let unauthorized = false;
    let failed = 0;

    // Product purchases (paid website orders) and any other invoices issued to this customer
    const [purchases, issued] = await Promise.all([
      axiosInstance.get("/meals/get-product-tracking").then((r) => r.data?.data || []).catch((e) => {
        if (e?.response?.status === 401) unauthorized = true;
        failed += 1;
        return [];
      }),
      axiosInstance.get("/invoice/get").then((r) => r.data?.data || []).catch((e) => {
        if (e?.response?.status === 401) unauthorized = true;
        failed += 1;
        return [];
      }),
    ]);

    if (unauthorized) {
      localStorage.removeItem("fg_group_user_authorization");
      setAuthed(false);
      return;
    }
    if (failed === 2) return setState("error");

    const orderRows = purchases.map(normalizeOrder).map((o) => ({
      kind: "order",
      key: `o-${o.id}`,
      number: o.receipt,
      date: o.createdAt,
      title: summarize(o.items),
      count: o.items.reduce((n, i) => n + i.quantity, 0),
      amount: o.total,
      status: "Paid",
      view: `/invoice/order/${o.id}`,
      download: `/invoice/order/${o.id}?print=1`,
    }));

    const taxRows = issued.map((inv) => ({
      kind: "tax",
      key: `t-${inv._id}`,
      number: inv.invoice_number,
      date: inv.date,
      title: inv.items?.length ? summarize(inv.items.map((i) => ({ name: i.item_name }))) : inv.branch_name || "Invoice",
      count: inv.items?.reduce((n, i) => n + (Number(i.quantity) || 1), 0) || undefined,
      amount: inv.net_amount,
      status: inv.paid_amount >= inv.net_amount ? "Paid" : inv.paid_amount > 0 ? "Part paid" : "Unpaid",
      view: `/invoice/${inv._id}`,
    }));

    setRows([...orderRows, ...taxRows].sort((a, b) => new Date(b.date) - new Date(a.date)));
    setState("ready");
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
      /* sidebar details are optional */
    }
  }, [authed, load]);

  useEffect(() => setShown(PAGE_SIZE), [filter, search]);

  const counts = useMemo(
    () => ({ all: rows.length, order: rows.filter((r) => r.kind === "order").length, tax: rows.filter((r) => r.kind === "tax").length }),
    [rows],
  );

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter(
      (r) =>
        (filter === "all" || r.kind === filter) &&
        (!q || String(r.number).toLowerCase().includes(q) || String(r.title).toLowerCase().includes(q)),
    );
  }, [rows, filter, search]);

  const totalSpent = useMemo(() => rows.reduce((n, r) => n + (Number(r.amount) || 0), 0), [rows]);

  if (!authed) {
    return (
      <StoreLayout title="Invoices">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faFileInvoice} />
            </div>
            <h1>Log in to see your invoices</h1>
            <p>Log in to view and download invoices for the products you've bought.</p>
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
    <StoreLayout title="Invoices">
      <div className="gz-container">
        <div className="gz-acc-head">
          <h1>Invoices</h1>
          <p>View and download invoices for your purchases.</p>
        </div>

        {state === "loading" ? (
          <Skeleton />
        ) : (
          <div className="gz-acc-layout">
            <AccountSidebar active="/invoice" name={person.name} photo={person.photo} contact={person.contact} />

            <div className="gz-acc-main">
              {state === "error" && (
                <div className="gz-acc-card gz-empty">
                  <p>We couldn't load your invoices.</p>
                  <button className="gz-btn-cart gz-btn-sm gz-inline-btn" onClick={load}>
                    Try again
                  </button>
                </div>
              )}

              {state === "ready" && rows.length === 0 && (
                <div className="gz-acc-card gz-empty">
                  <div className="gz-empty-icon">
                    <FontAwesomeIcon icon={faFileInvoice} />
                  </div>
                  <h2>No invoices yet</h2>
                  <p>Invoices appear here after you buy a product, so you can view and download them.</p>
                  <Link to="/shop" className="gz-btn-cart gz-btn-sm gz-inline-btn">
                    Start shopping
                  </Link>
                </div>
              )}

              {state === "ready" && rows.length > 0 && (
                <>
                  <div className="gz-inv-stats">
                    <div>
                      <span>Invoices</span>
                      <strong>{rows.length}</strong>
                    </div>
                    <div>
                      <span>Total value</span>
                      <strong>{formatPrice(totalSpent)}</strong>
                    </div>
                    <div>
                      <span>Latest invoice</span>
                      <strong>{dayjs(rows[0].date).format("D MMM YYYY")}</strong>
                    </div>
                  </div>

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
                        placeholder="Search by invoice # or product"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>

                  {visible.length === 0 ? (
                    <div className="gz-acc-card gz-empty">
                      <p>No invoices match your search.</p>
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
                    <div className="gz-inv-list">
                      <div className="gz-inv-row gz-inv-headrow" aria-hidden="true">
                        <span>Invoice</span>
                        <span>Date</span>
                        <span>Products</span>
                        <span className="r">Amount</span>
                        <span>Status</span>
                        <span className="r">Actions</span>
                      </div>
                      {visible.slice(0, shown).map((r) => (
                        <div className="gz-inv-row" key={r.key}>
                          <div className="gz-inv-no" data-label="Invoice">
                            <span className="gz-inv-icon">
                              <FontAwesomeIcon icon={faFileInvoice} />
                            </span>
                            <div>
                              <strong>{r.number}</strong>
                              <small>{r.kind === "order" ? "Product purchase" : "Invoice"}</small>
                            </div>
                          </div>
                          <div data-label="Date">{dayjs(r.date).format("D MMM YYYY")}</div>
                          <div className="gz-inv-title" data-label="Products">
                            {r.title}
                            {r.count ? <small>{r.count} item{r.count === 1 ? "" : "s"}</small> : null}
                          </div>
                          <div className="r gz-inv-amount" data-label="Amount">{formatPrice(r.amount)}</div>
                          <div data-label="Status">
                            <span className={`gz-inv-status ${r.status === "Paid" ? "paid" : "due"}`}>{r.status}</span>
                          </div>
                          <div className="r gz-inv-actions">
                            <Link to={r.view} className="gz-btn-ghost" title="View invoice">
                              <FontAwesomeIcon icon={faEye} /> View
                            </Link>
                            {r.download && (
                              <Link to={r.download} className="gz-btn-ghost gz-icon-only" title="Download PDF" aria-label={`Download invoice ${r.number}`}>
                                <FontAwesomeIcon icon={faDownload} />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {visible.length > shown && (
                    <div className="text-center">
                      <button className="gz-btn-view gz-load-more" onClick={() => setShown((n) => n + PAGE_SIZE)}>
                        Show more invoices ({visible.length - shown})
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </StoreLayout>
  );
}
