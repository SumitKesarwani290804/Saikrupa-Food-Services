import React, { useState, useMemo } from "react";
import { useCart } from "../Context/Cart-context";
import "../styles/ProductDetailModal.css";

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState(
    product?.options?.map((opt) => ({
      ...opt,
      selected: false,
    })) || []
  );

  // 🔥 Body scroll lock (fixed)
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 🔥 ESC key close (NEW - small improvement)
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const totalPrice = useMemo(() => {
    if (!product) return 0;
    const addOnsPrice = selectedAddOns.reduce((sum, addon) => {
      return addon.selected ? sum + addon.price : sum;
    }, 0);
    return (product.price + addOnsPrice) * quantity;
  }, [product, selectedAddOns, quantity]);

  const handleAddOnChange = (index) => {
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.map((addon, i) =>
        i === index ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedAddOns: selectedAddOns.filter((addon) => addon.selected),
      totalPrice,
      cartItemId: undefined,
    };
    addToCart(cartItem);
    onClose();
    setQuantity(1);
    setSelectedAddOns(
      product.options?.map((opt) => ({
        ...opt,
        selected: false,
      })) || []
    );
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-left">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="modal-right">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>

          <div className="product-meta">
            <span className="prep-time">⏱️ {product.prepTime}</span>
          </div>

          <div className="price-section">
            <span className="base-price">₹{product.price}</span>
          </div>

          {selectedAddOns && selectedAddOns.length > 0 && (
            <div className="addons-section">
              <h4>Add-ons</h4>
              <div className="addons-list">
                {selectedAddOns.map((addon, index) => (
                  <label key={index} className="addon-item">
                    <input
                      type="checkbox"
                      checked={addon.selected}
                      onChange={() => handleAddOnChange(index)}
                      className="addon-checkbox"
                    />
                    <span className="addon-label">
                      {addon.label}
                      <span className="addon-price">+₹{addon.price}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="quantity-section">
            <h4>Quantity</h4>
            <div className="quantity-selector">
              <button
                className="qty-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="qty-display">{quantity}</span>
              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="total-price-section">
            <span className="total-label">Total Price</span>
            <span className="total-amount">₹{totalPrice}</span>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;