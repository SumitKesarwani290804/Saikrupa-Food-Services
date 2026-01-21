import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/Cart-context";
import "../styles/CartDrawer.css";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="cart-overlay" 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        ></div>
      )}

      {/* Drawer */}
      <div 
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <p className="empty-subtitle">Add items to get started!</p>
              <button 
                className="continue-shopping-btn"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="cart-item">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                        <p className="cart-item-addons">
                          {item.selectedAddOns.map(addon => addon.label).join(", ")}
                        </p>
                      )}
                      <p className="cart-item-price">
                        ₹{item.totalPrice}
                      </p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="qty-control">
                        <button
                          className="qty-btn-mini"
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="qty-mini">{item.quantity}</span>
                        <button
                          className="qty-btn-mini"
                          onClick={() =>
                            updateQuantity(item.cartItemId, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.cartItemId)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
