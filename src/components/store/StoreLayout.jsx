import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faTicket,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SiteHeader from "../partials/Header/SiteHeader";
import NutritionFooter from "../partials/Footer/nutritionfooter";
import { offerDiscount, useCart } from "../../context/CartContext";
import { formatPrice } from "../../assets/js/store/storeApi";
import "../../assets/css/ecommerce.css";
import "../../assets/css/store-extra.css";
import "../../assets/css/store-shop.css";
import "../../assets/css/store-detail.css";
import "../../assets/css/order-status.css";

export const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    shippingCharge,
    cartTotal,
    freeShippingThreshold,
    couponCode,
    setCouponCode,
    offers,
    loadOffers,
    couponPreview,
  } = useCart();

  // Refresh the offers each time the cart opens (what you can use depends on your account and cart)
  useEffect(() => {
    if (isCartOpen) loadOffers();
  }, [isCartOpen, loadOffers]);

  // A coupon picked earlier that the customer has since used up (or that was switched off) is dropped
  useEffect(() => {
    if (!offers || !couponCode) return;
    const found = offers.find((o) => o.code === couponCode);
    if (found && found.used_by_you) setCouponCode("");
  }, [offers, couponCode, setCouponCode]);

  if (!isCartOpen) return null;

  const remaining = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="gz-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <aside
        className="gz-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Shopping cart"
      >
        <div className="gz-drawer-header">
          <h3 className="gz-drawer-title">Your Cart</h3>
          <button
            className="gz-drawer-close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {cart.length > 0 && (
          <div className="gz-free-shipping-bar">
            {remaining > 0
              ? `Add ${formatPrice(remaining)} more for FREE shipping`
              : "You've unlocked FREE shipping 🎉"}
            <div className="gz-progress-bg">
              <div className="gz-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="gz-drawer-body">
          {cart.length === 0 ? (
            <div className="gz-empty-cart">
              <p>Your cart is empty</p>
              <Link
                to="/shop"
                className="gz-btn-checkout"
                onClick={() => setIsCartOpen(false)}
              >
                Browse products
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div className="gz-cart-item" key={item.key}>
                <img className="gz-cart-item-img" src={item.image} alt={item.name} />
                <div className="gz-cart-item-info">
                  <div className="gz-cart-item-title">{item.name}</div>
                  {item.variationName && (
                    <div className="gz-cart-item-meta">{item.variationName}</div>
                  )}
                  <div className="gz-cart-item-bottom">
                    <div className="gz-qty-stepper">
                      <button
                        className="gz-qty-btn"
                        onClick={() => updateQuantity(item.key, -1)}
                        aria-label="Decrease quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="gz-qty-num">{item.quantity}</span>
                      <button
                        className="gz-qty-btn"
                        onClick={() => updateQuantity(item.key, 1)}
                        aria-label="Increase quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <span className="gz-cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      className="gz-cart-item-remove"
                      onClick={() => removeFromCart(item.key)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && offers && offers.length > 0 && (
            <section className="gz-offers" aria-label="Available offers">
              <h4>
                <FontAwesomeIcon icon={faTicket} /> Available offers
              </h4>
              {offers.map((o) => {
                const used = !!o.used_by_you;
                const unlocked = !used && cartSubtotal >= (o.min_order_amount || 0);
                const applied = couponCode === o.code;
                const saves = offerDiscount(o, cartSubtotal);
                const headline = o.discount_type === "PERCENT" ? `${o.discount_value}% off${o.max_discount ? ` up to ${formatPrice(o.max_discount)}` : ""}` : `${formatPrice(o.discount_value)} off`;
                return (
                  <div className={`gz-offer ${applied ? "applied" : ""} ${unlocked ? "" : "locked"}`} key={o.code}>
                    <div className="gz-offer-main">
                      <span className="gz-offer-code">{o.code}</span>
                      <strong>{o.title || headline}</strong>
                      <small>
                        {headline}
                        {o.min_order_amount ? ` · on orders above ${formatPrice(o.min_order_amount)}` : ""}
                        {o.expires_at ? ` · ends ${new Date(o.expires_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}` : ""}
                      </small>
                      {used && <em>You have already used this offer</em>}
                      {!used && !unlocked && (
                        <em>Add {formatPrice(o.min_order_amount - cartSubtotal)} more to unlock this offer</em>
                      )}
                      {unlocked && applied && saves > 0 && <em className="ok">You save {formatPrice(saves)}</em>}
                      {unlocked && !applied && saves > 0 && <em className="ok">Save {formatPrice(saves)} on this order</em>}
                    </div>
                    {applied ? (
                      <button type="button" className="gz-offer-btn remove" onClick={() => setCouponCode("")}>
                        Remove
                      </button>
                    ) : (
                      <button type="button" className="gz-offer-btn" disabled={!unlocked} onClick={() => setCouponCode(o.code)}>
                        {used ? "Used" : "Apply"}
                      </button>
                    )}
                  </div>
                );
              })}
              <p className="gz-offers-note">Coupons are verified at checkout.</p>
            </section>
          )}
        </div>

        {cart.length > 0 && (
          <div className="gz-drawer-footer">
            <div className="gz-summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(cartSubtotal)}</span>
            </div>
            {couponPreview > 0 && (
              <div className="gz-summary-row gz-summary-save">
                <span>Coupon {couponCode}</span>
                <span>− {formatPrice(couponPreview)}</span>
              </div>
            )}
            <div className="gz-summary-row">
              <span>Shipping</span>
              <span>{shippingCharge ? formatPrice(shippingCharge) : "Free"}</span>
            </div>
            <div className="gz-summary-row total">
              <span>Total</span>
              <span>{formatPrice(Math.max(0, cartTotal - couponPreview))}</span>
            </div>
            <button
              className="gz-btn-checkout"
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
            >
              Checkout securely
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

const StoreLayout = ({ title, description, children }) => {
  const { cartCount, setIsCartOpen } = useCart();
 const canonicalUrl = `${window.location.origin}/shop`;

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Gomzi Nutrition` : "Gomzi Nutrition Store"}</title>
        {description && <meta name="description" content={description} />}
                <link rel="canonical" href={canonicalUrl} />

      </Helmet>
      <SiteHeader />
      <div className="gz-store-wrapper">{children}</div>
      <NutritionFooter />

      <button
        className="gz-floating-cart-btn"
        onClick={() => setIsCartOpen(true)}
        aria-label={`Open cart, ${cartCount} items`}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {cartCount > 0 && <span className="gz-floating-badge">{cartCount}</span>}
      </button>
      <CartDrawer />
    </>
  );
};

export default StoreLayout;
