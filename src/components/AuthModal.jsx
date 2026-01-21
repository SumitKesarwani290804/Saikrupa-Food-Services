import React, { useState } from "react";
import { useAuth } from "../Context/Auth-context";
import "../styles/AuthModal.css";

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }
        await login(formData.email, formData.password);
      } else {
        if (!formData.email || !formData.password || !formData.name) {
          setError("Please fill in all required fields");
          setLoading(false);
          return;
        }
        await register({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          phone: formData.phone,
        });
      }

      // Reset form
      setFormData({
        email: "",
        password: "",
        name: "",
        phone: "",
      });

      // Callback
      if (onLoginSuccess) {
        onLoginSuccess();
      }

      onClose();
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      email: "",
      password: "",
      name: "",
      phone: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p>{isLogin ? "Login to your account" : "Sign up to place orders"}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              disabled={loading}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-mode-btn"
              disabled={loading}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
