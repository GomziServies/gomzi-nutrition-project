import { axiosInstance, publicAxiosInstance } from "../config/api";
import apiConfig from "../config/apiConfig";

const errorMessage = (error) =>
  error?.response?.data?.message || error?.message || "Something went wrong";

const unwrap = async (promise) => {
  try {
    const res = await promise;
    return { data: res.data?.data, metadata: res.data?.metadata };
  } catch (error) {
    const err = new Error(errorMessage(error));
    err.status = error?.response?.status;
    throw err;
  }
};

export const fetchStoreProducts = (params) =>
  unwrap(publicAxiosInstance.get("/store/products", { params }));

export const fetchStoreProduct = (id) =>
  unwrap(publicAxiosInstance.get("/store/products", { params: { id } }));

// Approved customer reviews for a product (managed in admin > Product Feedback)
export const fetchProductReviews = (product_id) =>
  unwrap(publicAxiosInstance.get("/feedback/products", { params: { product_id } }));

// Offers shown in the cart (public coupons)
// Logged-in customers get their own list (offers they already used are flagged); visitors get the public list
export const fetchStoreCoupons = () =>
  localStorage.getItem("fg_group_user_authorization")
    ? unwrap(axiosInstance.get("/store/coupons")).catch(() => unwrap(publicAxiosInstance.get("/store/coupons")))
    : unwrap(publicAxiosInstance.get("/store/coupons"));

export const fetchStoreBanners = () =>
  unwrap(publicAxiosInstance.get("/store/banners"));

// Requires login (user route: sends the customer's authorization header)
export const createStoreCheckout = (payload) =>
  unwrap(axiosInstance.post("/store/checkout", payload));

// ---- Coupons (login required) ----
export const validateStoreCoupon = (code, items) =>
  unwrap(axiosInstance.post("/store/coupon/validate", { code, items }));

// ---- Address book (login required) ----
export const fetchAddresses = () => unwrap(axiosInstance.get("/store/addresses"));
export const saveAddress = (address) => unwrap(axiosInstance.post("/store/addresses/save", address));
export const setDefaultAddress = (id) => unwrap(axiosInstance.post("/store/addresses/default", { id }));
export const deleteAddress = (id) => unwrap(axiosInstance.post("/store/addresses/delete", { id }));

// ---- Cancel / return requests (login required) ----
export const createOrderRequest = (payload) => unwrap(axiosInstance.post("/store/order-request", payload));
export const fetchOrderRequests = () => unwrap(axiosInstance.get("/store/order-requests"));

// ---- Reviews (login required) ----
export const fetchReviewEligibility = (product_id) =>
  unwrap(axiosInstance.get("/store/review-eligibility", { params: { product_id } }));
export const createStoreReview = (payload) => unwrap(axiosInstance.post("/store/review", payload));

/** Upload one image for the logged-in customer; returns the stored file key. */
export const uploadCustomerImage = async (file) => {
  const body = new FormData();
  body.append("files", file);
  const { data } = await unwrap(axiosInstance.post("/file-upload", body));
  const key = data?.fileURLs?.[0];
  if (!key) throw new Error("Upload failed");
  return key;
};

export const verifyStorePayment = (payload) =>
  unwrap(publicAxiosInstance.post("/store/verify-payment", payload));

export const fetchStoreOrder = (order_number, email) =>
  unwrap(
    publicAxiosInstance.get("/store/order", { params: { order_number, email } }),
  );

let razorpayScript;
export const loadRazorpay = () => {
  if (window.Razorpay) return Promise.resolve(true);
  if (!razorpayScript) {
    razorpayScript = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => {
        razorpayScript = undefined;
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  return razorpayScript;
};

export const formatPrice = (n) =>
  `₹${Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

export const FREE_SHIPPING_THRESHOLD = 999;
export const SHIPPING_CHARGE = 99;

export { apiConfig };
