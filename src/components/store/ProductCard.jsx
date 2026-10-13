import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheck, faEye, faImage } from "@fortawesome/free-solid-svg-icons";
import Stars from "./Stars";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../assets/js/store/storeApi";

const CardImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="gz-img-placeholder" aria-label="No image available">
        <FontAwesomeIcon icon={faImage} />
      </div>
    );
  }
  return (
    <img
      className="gz-card-img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const hasOptions = product.variations.length > 0;
  const image = product.images[0] || product.variations[0]?.images[0];
  const [added, setAdded] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="gz-product-card">
      <Link to={`/shop/${product.id}`} className="gz-card-img-wrap">
        <CardImage src={image} alt={product.name} />
        {product.discount_percent > 0 && (
          <span className="gz-card-discount">{product.discount_percent}% OFF</span>
        )}
        <div className="gz-card-labels">
          {product.is_best_seller && <span className="gz-label best">Best Seller</span>}
          {product.is_new_arrival && <span className="gz-label new">New</span>}
          {product.is_featured && <span className="gz-label featured">Featured</span>}
        </div>
        {!product.in_stock && <span className="gz-oos">OUT OF STOCK</span>}
        {product.in_stock && typeof product.stock === "number" && product.stock <= 5 && (
          <span className="gz-low-stock">Only {product.stock} left</span>
        )}
      </Link>
      <div className="gz-card-body">
        {product.category && <div className="gz-card-category">{product.category}</div>}
        <Link to={`/shop/${product.id}`} className="gz-card-title">
          {product.name}
        </Link>
        <div className="gz-card-rating">
          {product.rating ? (
            <>
              <Stars value={product.rating} />
              <span className="gz-rating-num">{product.rating.toFixed(1)}</span>
              <span className="gz-rating-count">({product.rating_count})</span>
            </>
          ) : (
            <span className="gz-rating-count">No reviews yet</span>
          )}
        </div>
        <div className="gz-card-price-row">
          <span className="gz-price-current">
            {hasOptions && <small className="gz-price-from">From </small>}
            {formatPrice(product.price)}
          </span>
          {product.original_price > product.price && (
            <>
              <span className="gz-price-original">{formatPrice(product.original_price)}</span>
              <span className="gz-price-save">
                Save {formatPrice(product.original_price - product.price)}
              </span>
            </>
          )}
        </div>
        <div className="gz-card-actions">
          <Link
            to={`/shop/${product.id}`}
            className="gz-icon-btn"
            aria-label={`View ${product.name}`}
            title="View product"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          {hasOptions ? (
            <Link to={`/shop/${product.id}`} className="gz-btn-cart gz-btn-options">
              Choose options
            </Link>
          ) : (
            <button
              className={`gz-btn-cart ${added ? "added" : ""}`}
              disabled={!product.in_stock}
              onClick={handleAdd}
            >
              <FontAwesomeIcon icon={added ? faCheck : faCartShopping} />
              {!product.in_stock ? "Out of stock" : added ? "Added" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
