import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../styles/OrderHistory.css";

const OrderHistory = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: "ORD001",
      date: "Jan 10, 2026",
      total: 450,
      status: "Delivered",
      items: ["Wafer Paav", "Pizza", "Sandwich"]
    },
    {
      id: "ORD002",
      date: "Jan 8, 2026",
      total: 320,
      status: "Delivered",
      items: ["Classic Wafer Paav", "Cheese Pizza"]
    },
    {
      id: "ORD003",
      date: "Jan 5, 2026",
      total: 280,
      status: "Delivered",
      items: ["Saikrupa Special Paav", "Peri-Peri Sandwich"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="order-history-container">
        <div className="order-history-content">
          <div className="oh-header">
            <h1>Your Orders</h1>
            <p>Track and manage your orders</p>
          </div>

          {orders.length === 0 ? (
            <div className="no-orders">
              <div className="no-orders-icon">📦</div>
              <h3>No Orders Yet</h3>
              <p>Start by ordering your favorite food</p>
              <button 
                className="order-now-btn"
                onClick={() => navigate("/menu-section")}
              >
                Order Now
              </button>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header-row">
                    <div className="order-id">Order #{order.id}</div>
                    <div className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="order-info">
                    <p className="order-date">{order.date}</p>
                    <p className="order-items">{order.items.join(", ")}</p>
                  </div>

                  <div className="order-footer">
                    <div className="order-total">₹{order.total}</div>
                    <button className="order-details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderHistory;
