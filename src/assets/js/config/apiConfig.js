const hostname = (window.location.hostname || "").trim().toLowerCase(); // Normalized hostname
let baseUrl = "http://localhost";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";

// Allow local storage override for dynamic backend URL or port (useful for local testing)
const customBackendUrl = localStorage.getItem("fg_backend_url");
const customBackendPort = localStorage.getItem("fg_backend_port") || "80";

if (customBackendUrl) {
  baseUrl = customBackendUrl;
} else if (
  hostname === "gomzilifesciences.in" ||
  hostname === "www.gomzilifesciences.in"
) {
  // Official live site -> production API and live Razorpay
  baseUrl = "https://api.fggroup.in";
  razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.gomzilifesciences.in") {
  baseUrl = "https://dev-api.fggroup.in";
} else if (hostname === "localhost" || hostname === "127.0.0.1") {
  baseUrl = `http://localhost:${customBackendPort}`;
} else {
  // Default to dev API for any other unknown hosts
  baseUrl = "https://dev-api.fggroup.in";
}

const apiConfig = {
  BASE_URL: baseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;
