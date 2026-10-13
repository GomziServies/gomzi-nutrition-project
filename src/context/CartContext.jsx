import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_CHARGE,
  fetchStoreCoupons,
  fetchStoreProducts,
} from "../assets/js/store/storeApi";

const CartContext = createContext(null);
const COUPON_KEY = "gomzi_store_coupon_v1";

/**
 * Discount an offer gives on this subtotal (0 when the minimum order isn't reached).
 * Preview only: the server recalculates it when the coupon is applied at checkout.
 */
export const offerDiscount = (offer, subtotal) => {
  if (!offer || subtotal <= 0 || subtotal < (offer.min_order_amount || 0)) return 0;
  let d = offer.discount_type === "PERCENT" ? (subtotal * offer.discount_value) / 100 : offer.discount_value;
  if (offer.discount_type === "PERCENT" && offer.max_discount) d = Math.min(d, offer.max_discount);
  return Math.round(Math.min(d, subtotal) * 100) / 100;
};
const CART_STORAGE_KEY = "gomzi_store_cart_v2";
const MAX_QTY = 20;

const readCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (e) {
    return [];
  }
};

const itemKey = (productId, variationId) =>
  `${productId}_${variationId || "base"}`;

/**
 * Cart items hold display data only. Prices shown here are indicative -
 * the server recalculates every amount from the admin catalog at checkout.
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(readCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Coupon the customer picked in the cart (verified by the server at checkout)
  const [couponCode, setCouponCodeState] = useState(() => {
    try {
      return localStorage.getItem(COUPON_KEY) || "";
    } catch (e) {
      return "";
    }
  });
  const setCouponCode = useCallback((code) => {
    setCouponCodeState(code || "");
    try {
      if (code) localStorage.setItem(COUPON_KEY, code);
      else localStorage.removeItem(COUPON_KEY);
    } catch (e) {
      // storage unavailable: the choice stays in memory
    }
  }, []);

  // Public offers (loaded the first time the cart opens)
  const [offers, setOffers] = useState(null);
  const loadOffers = useCallback(async () => {
    try {
      const { data } = await fetchStoreCoupons();
      setOffers(Array.isArray(data) ? data : []);
    } catch (e) {
      setOffers([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      // storage unavailable (private mode) - cart stays in memory
    }
  }, [cart]);

  const addToCart = useCallback((product, variation, quantity = 1) => {
    const key = itemKey(product.id, variation?.id);
    const stock = variation ? variation.stock : product.stock;

    setCart((prev) => {
      const existing = prev.find((i) => i.key === key);
      const nextQty = Math.min(
        MAX_QTY,
        (existing?.quantity || 0) + Math.max(1, quantity),
        typeof stock === "number" ? Math.max(stock, 1) : MAX_QTY,
      );

      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: nextQty } : i));
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          variationId: variation?.id,
          name: product.name,
          variationName: variation?.name,
          image: variation?.images?.[0] || product.images?.[0],
          price: variation ? variation.price : product.price,
          originalPrice: variation ? variation.original_price : product.original_price,
          stock: typeof stock === "number" ? stock : null,
          quantity: nextQty,
        },
      ];
    });

    toast.success(`${product.name} added to cart`, { autoClose: 1800 });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((key, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.key !== key) return i;
          const max = typeof i.stock === "number" ? Math.min(i.stock, MAX_QTY) : MAX_QTY;
          const qty = Math.min(i.quantity + delta, max);
          return qty > 0 ? { ...i, quantity: qty } : null;
        })
        .filter(Boolean),
    );
  }, []);

  const removeFromCart = useCallback(
    (key) => setCart((prev) => prev.filter((i) => i.key !== key)),
    [],
  );

  const clearCart = useCallback(() => setCart([]), []);

  /** Re-sync prices / stock with the live catalog; drops items no longer sold. */
  const refreshCart = useCallback(async () => {
    if (!readCart().length) return { removed: [], changed: false };
    const { data: products } = await fetchStoreProducts();
    const removed = [];
    let changed = false;

    setCart((prev) => {
      const next = [];
      prev.forEach((item) => {
        const product = products.find((p) => p.id === item.productId);
        const variation = item.variationId
          ? product?.variations.find((v) => v.id === item.variationId)
          : null;
        const live = item.variationId ? variation : product;
        const available = product && live && live.in_stock !== false && (item.variationId || !product.variations.length);

        if (!available) {
          removed.push(item.name);
          changed = true;
          return;
        }
        const stock = typeof live.stock === "number" ? live.stock : null;
        const quantity = stock !== null ? Math.min(item.quantity, stock) : item.quantity;
        if (live.price !== item.price || quantity !== item.quantity) changed = true;
        next.push({
          ...item,
          name: product.name,
          variationName: variation?.name,
          price: live.price,
          originalPrice: live.original_price,
          stock,
          quantity,
        });
      });
      return next;
    });

    return { removed, changed };
  }, []);

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.quantity, 0), [cart]);
  const cartSubtotal = useMemo(
    () => cart.reduce((n, i) => n + i.price * i.quantity, 0),
    [cart],
  );
  const shippingCharge =
    cartSubtotal === 0 || cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_CHARGE;
  const cartTotal = cartSubtotal + shippingCharge;

  const appliedOffer = useMemo(() => (offers || []).find((o) => o.code === couponCode) || null, [offers, couponCode]);
  const couponPreview = appliedOffer ? offerDiscount(appliedOffer, cartSubtotal) : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        shippingCharge,
        cartTotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        refreshCart,
        couponCode,
        setCouponCode,
        offers,
        loadOffers,
        appliedOffer,
        couponPreview,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
