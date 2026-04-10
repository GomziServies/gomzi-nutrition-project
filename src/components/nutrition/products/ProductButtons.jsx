import React from "react";
import "../../../assets/css/nutrition.css";

const ProductButton = ({ product, toggleMenu, currentProduct }) => {
  return (
    <button
      onClick={() => toggleMenu(product.data)}
      className={`bg-yellow text-uppercase px-3 px-lg-5 text-white f-16 f-rob-bol rate-btn product-row ${
        currentProduct === product.key ? "active" : ""
      }`}
    >
      Add to Cart
    </button>
  );
};

export default ProductButton;
