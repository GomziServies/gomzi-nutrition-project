import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCartShopping,
  faChevronRight,
  faDownload,
  faFilePdf,
  faFlask,
  faImage,
  faMinus,
  faPlus,
  faRotateLeft,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import ProductCard from "../../components/store/ProductCard";
import Stars from "../../components/store/Stars";
import { useCart } from "../../context/CartContext";
import ReviewDialog from "../../components/store/ReviewDialog";
import LoginModal from "../../assets/js/popup/login";
import {
  fetchProductReviews,
  fetchReviewEligibility,
  fetchStoreProduct,
  fetchStoreProducts,
  formatPrice,
} from "../../assets/js/store/storeApi";

const REVIEWS_PAGE = 5;

const reviewerName = (u) => {
  const first = (u?.first_name || "").trim();
  const last = (u?.last_name || "").trim();
  if (!first || /^fg$/i.test(first)) return "Verified customer";
  return last && last !== "-" && !/^user$/i.test(last) ? `${first} ${last[0].toUpperCase()}.` : first;
};

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const ReviewSummary = ({ reviews, rating, count }) => {
  const dist = [5, 4, 3, 2, 1].map((n) => ({
    n,
    c: reviews.filter((r) => r.feedback_point === n).length,
  }));
  const total = reviews.length || 1;
  return (
    <div className="gz-review-summary">
      <div className="gz-review-score">
        <div className="gz-score-num">{rating ? rating.toFixed(1) : "—"}</div>
        <Stars value={rating || 0} size={20} />
        <div className="gz-score-count">
          Based on {count} review{count === 1 ? "" : "s"}
        </div>
      </div>
      <div className="gz-review-bars">
        {dist.map((d) => (
          <div className="gz-bar-row" key={d.n}>
            <span>{d.n} ★</span>
            <div className="gz-bar">
              <div style={{ width: `${(d.c / total) * 100}%` }} />
            </div>
            <span className="gz-bar-count">{d.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const reviewsRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [state, setState] = useState("loading");
  const [variationId, setVariationId] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [tab, setTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const [reviewsShown, setReviewsShown] = useState(REVIEWS_PAGE);
  const [eligibility, setEligibility] = useState(null); // null = unknown / logged out
  const [reviewOpen, setReviewOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem("fg_group_user_authorization"));
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setState("loading");
    setTab("description");
    setReviews([]);
    setReviewsShown(REVIEWS_PAGE);
    window.scrollTo(0, 0);

    fetchStoreProduct(id)
      .then(({ data }) => {
        setProduct(data);
        setVariationId(data.variations.find((v) => v.in_stock)?.id || data.variations[0]?.id || null);
        setQty(1);
        setActiveImage(0);
        setState("ready");

        if (localStorage.getItem("fg_group_user_authorization")) {
          fetchReviewEligibility(id)
            .then(({ data: info }) => setEligibility(info))
            .catch(() => setEligibility(null));
        } else {
          setEligibility(null);
        }

        fetchProductReviews(id)
          .then(({ data: list }) =>
            setReviews([...(list || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))),
          )
          .catch(() => setReviews([]));

        fetchStoreProducts()
          .then(({ data: all }) => {
            const others = (all || []).filter((p) => p.id !== data.id);
            const same = others.filter((p) => data.category && p.category === data.category);
            const rest = others.filter((p) => !same.includes(p));
            setRelated([...same, ...rest].slice(0, 4));
          })
          .catch(() => setRelated([]));
      })
      .catch((e) => setState(e.status === 404 ? "missing" : "error"));
  }, [id]);

  const variation = useMemo(
    () => product?.variations.find((v) => v.id === variationId) || null,
    [product, variationId],
  );

  if (state !== "ready") {
    return (
      <StoreLayout title="Product">
        <div className="gz-container gz-state-box">
          {state === "loading" && "Loading…"}
          {state === "missing" && (
            <>
              This product isn't available. <Link to="/shop">Back to shop</Link>
            </>
          )}
          {state === "error" && "Couldn't load this product. Please try again."}
        </div>
      </StoreLayout>
    );
  }

  const current = variation || product;
  const images = [...(variation?.images || []), ...product.images].filter(
    (v, i, arr) => arr.indexOf(v) === i,
  );
  // Gallery = photos first, then videos
  const media = [
    ...images.map((src) => ({ type: "image", src })),
    ...(product.videos || []).map((src) => ({ type: "video", src })),
  ];
  const activeMedia = media[activeImage] || media[0];
  const stock = typeof current.stock === "number" ? current.stock : null;
  const needsOption = product.variations.length > 0 && !variation;
  const canBuy = current.in_stock !== false && !needsOption;
  const maxQty = stock !== null ? Math.max(1, Math.min(stock, 20)) : 20;
  const description = variation?.description || product.description;
  const original = variation ? variation.original_price : product.original_price;
  const save = original > current.price ? original - current.price : 0;
  const reviewCount = product.rating_count || reviews.length;
  const rating = product.rating || 0;

  const add = () => addToCart(product, variation, qty);
  const labReports = product.lab_reports || [];
  const goTab = (name) => {
    setTab(name);
    setTimeout(() => reviewsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };
  const goReviews = () => goTab("reviews");

  return (
    <StoreLayout title={product.name} description={product.description?.slice(0, 150)}>
      <div className="gz-container">
        <nav className="gz-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to="/shop">Shop</Link>
          {product.category && (
            <>
              <FontAwesomeIcon icon={faChevronRight} />
              <span>{product.category}</span>
            </>
          )}
          <FontAwesomeIcon icon={faChevronRight} />
          <span className="current">{product.name}</span>
        </nav>

        <div className="gz-pd">
          <div className="gz-pd-gallery">
            {media.length > 1 && (
              <div className="gz-pd-thumbs">
                {media.map((m, i) => (
                  <button
                    key={m.src}
                    className={`gz-pd-thumb ${i === activeImage ? "active" : ""}`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show ${m.type} ${i + 1}`}
                  >
                    {m.type === "video" ? (
                      <>
                        <video src={m.src} muted preload="metadata" />
                        <span className="gz-thumb-play">▶</span>
                      </>
                    ) : (
                      <img src={m.src} alt="" />
                    )}
                  </button>
                ))}
              </div>
            )}
            <div className="gz-pd-main">
              {original > current.price && (
                <span className="gz-card-discount">{Math.round((save / original) * 100)}% OFF</span>
              )}
              {activeMedia?.type === "video" ? (
                <video key={activeMedia.src} src={activeMedia.src} controls playsInline preload="metadata" />
              ) : activeMedia ? (
                <img src={activeMedia.src} alt={product.name} />
              ) : (
                <div className="gz-img-placeholder" />
              )}
            </div>
          </div>

          <div className="gz-pd-info">
            <div className="gz-pd-badges">
              {product.category && <span className="gz-pd-cat">{product.category}</span>}
              {product.is_best_seller && <span className="gz-label best">Best Seller</span>}
              {product.is_new_arrival && <span className="gz-label new">New</span>}
              {product.is_featured && <span className="gz-label featured">Featured</span>}
            </div>

            <h1 className="gz-pd-title">{product.name}</h1>

            <button className="gz-pd-rating" onClick={goReviews}>
              <Stars value={rating} size={17} />
              <span className="gz-rating-num">{rating ? rating.toFixed(1) : "No ratings"}</span>
              <span className="gz-rating-count">
                ({reviewCount} review{reviewCount === 1 ? "" : "s"})
              </span>
            </button>

            <div className="gz-pd-price">
              <span className="now">{formatPrice(current.price)}</span>
              {save > 0 && (
                <>
                  <span className="was">{formatPrice(original)}</span>
                  <span className="gz-price-save">You save {formatPrice(save)}</span>
                </>
              )}
            </div>
            <div className="gz-pd-tax">Inclusive of all taxes</div>

            <div className={`gz-pd-stock ${current.in_stock === false ? "out" : "in"}`}>
              {current.in_stock === false
                ? "Out of stock"
                : stock !== null && stock <= 5
                  ? `Only ${stock} left in stock`
                  : "In stock"}
            </div>

            {labReports.length > 0 && (
              <button type="button" className="gz-pd-lab-chip" onClick={() => goTab("lab")}>
                <span className="gz-lab-ico" aria-hidden="true">
                  <FontAwesomeIcon icon={faFlask} />
                </span>
                <span className="gz-lab-txt">
                  <strong>Lab tested</strong>
                  <small>
                    {labReports.length} lab report{labReports.length === 1 ? "" : "s"} available · View reports
                  </small>
                </span>
                <FontAwesomeIcon icon={faChevronRight} className="gz-lab-arrow" />
              </button>
            )}

            {description && <p className="gz-pd-short">{description.slice(0, 220)}{description.length > 220 ? "…" : ""}</p>}

            {product.variations.length > 0 && (
              <div className="gz-pd-options">
                <div className="gz-pd-label">
                  Option: <strong>{variation?.name || "Select"}</strong>
                </div>
                <div className="gz-pill-selector">
                  {product.variations.map((v) => (
                    <button
                      key={v.id}
                      disabled={!v.in_stock}
                      className={`gz-pill ${v.id === variationId ? "active" : ""}`}
                      onClick={() => {
                        setVariationId(v.id);
                        setQty(1);
                        setActiveImage(0);
                      }}
                    >
                      {v.name}
                      <small>{formatPrice(v.price)}</small>
                      {!v.in_stock && <em>Sold out</em>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="gz-pd-buy">
              <div className="gz-pd-qty" aria-label="Quantity">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => Math.min(maxQty, q + 1))} aria-label="Increase quantity">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <button className="gz-pd-add" disabled={!canBuy} onClick={add}>
                <FontAwesomeIcon icon={faCartShopping} /> Add to cart
              </button>
              <button
                className="gz-pd-now"
                disabled={!canBuy}
                onClick={() => {
                  add();
                  navigate("/checkout");
                }}
              >
                <FontAwesomeIcon icon={faBolt} /> Buy now
              </button>
            </div>

            <ul className="gz-pd-perks">
              <li>
                <FontAwesomeIcon icon={faTruckFast} />
                <span>Free shipping on orders above ₹999</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faShieldHalved} />
                <span>Secure payment via Razorpay (UPI, cards, netbanking)</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faRotateLeft} />
                <span>
                  <Link to="/nutrition/return-and-refund-policy-customer">Easy return &amp; refund policy</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <section className="gz-pd-tabs" ref={reviewsRef}>
          <div className="gz-pd-tabbar" role="tablist">
            <button role="tab" aria-selected={tab === "description"} className={tab === "description" ? "active" : ""} onClick={() => setTab("description")}>
              Description
            </button>
            {labReports.length > 0 && (
              <button role="tab" aria-selected={tab === "lab"} className={tab === "lab" ? "active" : ""} onClick={() => setTab("lab")}>
                Lab Reports <span className="gz-tab-count">{labReports.length}</span>
              </button>
            )}
            <button role="tab" aria-selected={tab === "reviews"} className={tab === "reviews" ? "active" : ""} onClick={() => setTab("reviews")}>
              Reviews <span className="gz-tab-count">{reviewCount}</span>
            </button>
          </div>

          {tab === "description" && (
            <div className="gz-pd-panel">
              {description ? (
                <p className="gz-detail-desc">{description}</p>
              ) : (
                <p className="text-muted">No description available for this product.</p>
              )}
            </div>
          )}

          {tab === "lab" && (
            <div className="gz-pd-panel">
              <p className="gz-lab-intro">
                Independent lab test reports and certificates for this product. Open a report to read it, or download a copy.
              </p>
              <div className="gz-lab-grid">
                {labReports.map((r, i) => {
                  const isPdf = /\.pdf($|\?)/i.test(r.url);
                  return (
                    <div className="gz-lab-card" key={`${r.url}-${i}`}>
                      <div className="gz-lab-icon">
                        <FontAwesomeIcon icon={isPdf ? faFilePdf : faImage} />
                      </div>
                      <div className="gz-lab-info">
                        <strong>{r.name}</strong>
                        <span>{isPdf ? "PDF document" : "Image"}</span>
                      </div>
                      <div className="gz-lab-actions">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="gz-lab-view">
                          View report
                        </a>
                        <a href={r.url} download target="_blank" rel="noopener noreferrer" className="gz-lab-dl" aria-label={`Download ${r.name}`} title="Download">
                          <FontAwesomeIcon icon={faDownload} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "reviews" && (
            <div className="gz-pd-panel">
              <div className="gz-rv-cta">
                <div>
                  <strong>Share your experience</strong>
                  <span>
                    {!loggedIn
                      ? "Log in to review products you've bought."
                      : eligibility?.reviewed
                        ? "Thanks for reviewing this product."
                        : eligibility && !eligibility.purchased
                          ? "Only customers who bought this product can review it."
                          : "Help other customers by rating this product."}
                  </span>
                </div>
                {!loggedIn && (
                  <button type="button" className="gz-btn-cart gz-btn-sm" onClick={() => setLoginOpen(true)}>
                    Log in
                  </button>
                )}
                {loggedIn && eligibility?.purchased && !eligibility.reviewed && (
                  <button type="button" className="gz-btn-cart gz-btn-sm" onClick={() => setReviewOpen(true)}>
                    Write a review
                  </button>
                )}
              </div>

              {reviews.length === 0 && reviewCount === 0 ? (
                <div className="gz-state-box" style={{ padding: "24px 0" }}>
                  <p className="mb-1 fw-bold">No reviews yet</p>
                  <span>Reviews from customers who bought this product will appear here.</span>
                </div>
              ) : (
                <div className="gz-reviews-layout">
                  <ReviewSummary reviews={reviews} rating={rating} count={reviewCount} />
                  <div className="gz-review-list">
                    {reviews.slice(0, reviewsShown).map((r) => (
                      <article className="gz-review" key={r._id}>
                        <div className="gz-avatar" aria-hidden="true">
                          {reviewerName(r.user)[0].toUpperCase()}
                        </div>
                        <div className="gz-review-body">
                          <div className="gz-review-top">
                            <strong>{reviewerName(r.user)}</strong>
                            <span className="gz-verified">Verified buyer</span>
                            <time>{formatDate(r.createdAt)}</time>
                          </div>
                          <Stars value={r.feedback_point} size={14} />
                          {r.feedback_comment && <p>{r.feedback_comment}</p>}
                          {r.images?.length > 0 && (
                            <div className="gz-rv-gallery">
                              {r.images.map((img) => {
                                const url = /^https?:/i.test(img) ? img : `https://files.fggroup.in/${img}`;
                                return (
                                  <a key={img} href={url} target="_blank" rel="noopener noreferrer" aria-label="Open review photo">
                                    <img src={url} alt="Customer review" loading="lazy" />
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                    {reviews.length > reviewsShown && (
                      <button className="gz-btn-view gz-load-more" onClick={() => setReviewsShown((n) => n + REVIEWS_PAGE)}>
                        Show more reviews ({reviews.length - reviewsShown})
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {related.length > 0 && (
          <section className="gz-related">
            <h2>You may also like</h2>
            <div className="gz-product-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      {reviewOpen && (
        <ReviewDialog
          product={product}
          onClose={() => setReviewOpen(false)}
          onSubmitted={() => {
            setReviewOpen(false);
            setEligibility((e) => ({ ...(e || {}), purchased: true, reviewed: true, review_status: "APPROVED" }));
            fetchProductReviews(id)
              .then(({ data: list }) =>
                setReviews([...(list || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))),
              )
              .catch(() => {});
            fetchStoreProduct(id)
              .then(({ data }) => setProduct(data))
              .catch(() => {});
          }}
        />
      )}
      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onLoginSuccess={() => {
            setLoginOpen(false);
            setLoggedIn(true);
            window.dispatchEvent(new Event("user-info-updated"));
            fetchReviewEligibility(id)
              .then(({ data: info }) => setEligibility(info))
              .catch(() => {});
          }}
        />
      )}
    </StoreLayout>
  );
};

export default ProductDetail;
