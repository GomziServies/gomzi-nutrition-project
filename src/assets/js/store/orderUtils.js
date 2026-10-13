// Shared helpers for the customer's paid website orders (orders page, invoices)
const FILE_BASE = "https://files.fggroup.in/";

export const imageUrl = (v) => {
  const first = Array.isArray(v) ? v[0] : v;
  if (!first) return "";
  return /^https?:/i.test(first) ? first : FILE_BASE + String(first).replace(/^\/+/, "");
};

/** Latest shipment status from the tracking history */
export const currentStatus = (tracking) => {
  if (!tracking?.length) return "PLACED";
  return tracking[tracking.length - 1].shipment_status || "PLACED";
};

/** Turns an order from /meals/get-product-tracking into a flat, display-ready object */
export const normalizeOrder = (order) => {
  const details = order.user_meal_product?.product_details || [];
  const tracking = order.user_meal_product?.tracking || [];

  const items = (order.multiple_items || []).map((item) => {
    const product = details.find((p) => String(p._id) === String(item.item_id));
    const variationId = item.notes?.variation_id;
    const variation = variationId ? product?.variation?.find((v) => String(v._id) === String(variationId)) : null;
    const quantity = Number(item.quantity) || 1;
    const amount = Number(item.amount) || 0;
    return {
      productId: String(item.item_id),
      variationId: variationId ? String(variationId) : undefined,
      name: item.name || item.notes?.name || variation?.name || product?.name || "Product",
      image: imageUrl(variation?.display_image?.length ? variation.display_image : product?.display_image),
      quantity,
      amount,
      unitPrice: Math.round((amount / quantity) * 100) / 100,
    };
  });

  const itemsTotal = items.reduce((n, i) => n + i.amount, 0);
  const discount = Number(order.notes?.coupon_discount) || 0;

  return {
    id: order._id,
    receipt: order.receipt_id,
    createdAt: order.createdAt,
    total: order.amount,
    shipping: Math.max(0, Math.round(((order.amount || 0) - itemsTotal + discount) * 100) / 100),
    discount,
    couponCode: order.notes?.coupon_code || "",
    refund: order.notes?.refund || null,
    itemsTotal,
    items,
    tracking,
    status: currentStatus(tracking),
    notes: order.notes || {},
    paymentId: order.gateway_transaction_id || "",
    paymentMode: order.purchase_mode || "",
  };
};
