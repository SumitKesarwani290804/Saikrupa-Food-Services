import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/Cart-context";
import { useAuth } from "../Context/Auth-context";
import AuthModal from "../components/AuthModal";
import "../styles/CheckoutPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(!isAuthenticated);
  const [isProcessing, setIsProcessing] = useState(false);

  // Delivery form state
  const [deliveryForm, setDeliveryForm] = useState({
    fullName: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    address: "",
    city: "",
    postalCode: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  const handlePlaceOrder = async () => {
    // Validate form
    if (
      !deliveryForm.fullName ||
      !deliveryForm.phone ||
      !deliveryForm.address ||
      !deliveryForm.city ||
      !deliveryForm.postalCode
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      alert(
        "Order placed successfully! Payment gateway would be integrated here."
      );
      setIsProcessing(false);
      // In real app: redirect to payment or order confirmation
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="checkout-page">
          <div className="container">
            <div className="empty-cart-checkout">
              <h2>Your cart is empty</h2>
              <p>Add items to your cart before checkout</p>
              <button
                className="back-to-menu-btn"
                onClick={() => navigate("/homepage")}
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div className="container">
          <h1 className="checkout-title">Checkout</h1>

          <div className="checkout-content">
            {/* LEFT SECTION - Delivery Details */}
            <div className="checkout-left">
              <div className="checkout-section">
                <h2 className="section-title">📍 Delivery Details</h2>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={deliveryForm.fullName}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={deliveryForm.email}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={deliveryForm.phone}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={deliveryForm.address}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={deliveryForm.city}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={deliveryForm.postalCode}
                      onChange={handleInputChange}
                      disabled={isProcessing}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Delivery Instructions (Optional)</label>
                  <textarea
                    name="instructions"
                    value={deliveryForm.instructions}
                    onChange={handleInputChange}
                    rows="3"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SECTION - Order Summary */}
            <div className="checkout-right">
              <div className="checkout-section order-summary">
                <h2 className="section-title">📦 Order Summary</h2>

                {/* Items List */}
                <div className="summary-items">
                  {cartItems.map((item) => (
                    <div key={item.cartItemId} className="summary-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="summary-item-image"
                      />
                      <div className="summary-item-info">
                        <h4>{item.name}</h4>
                        {item.selectedAddOns &&
                          item.selectedAddOns.length > 0 && (
                            <p className="summary-addons">
                              +{item.selectedAddOns.map((a) => a.label).join(", ")}
                            </p>
                          )}
                        <p className="summary-qty">Qty: {item.quantity}</p>
                      </div>
                      <div className="summary-item-price">
                        ₹{item.totalPrice}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="pricing-breakdown">
                  <div className="price-row">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="price-row">
                    <span>Taxes & Charges</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="price-row">
                    <span>Delivery Charge</span>
                    <span className="delivery-free">FREE</span>
                  </div>
                  <div className="price-row total">
                    <span>Total Payable</span>
                    <span>₹{getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  className="place-order-btn"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  {isProcessing
                    ? "Processing..."
                    : "Proceed to Payment"}
                </button>

                <p className="secure-payment">
                  🔒 Your payment information is secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default CheckoutPage;

