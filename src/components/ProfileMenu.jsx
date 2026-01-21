import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth-context";
import "../styles/ProfileMenu.css";

const ProfileMenu = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    setIsMobileOpen(false);
    navigate("/homepage");
  };

  if (!isAuthenticated) {
    return (
      <button 
        className="login-btn"
        onClick={() => navigate("/checkout")}
      >
        Login / Sign Up
      </button>
    );
  }

  return (
    <>
      <div className="profile-menu-wrapper" ref={menuRef}>
        <button 
          className="profile-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="profile-icon">👤</span>
          <span className="profile-name">{user.name}</span>
        </button>

        {isOpen && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
              <div className="profile-info">
                <p className="profile-username">{user.name}</p>
                <p className="profile-email">{user.email}</p>
              </div>
            </div>

            <div className="profile-divider"></div>

            <div className="profile-menu-items">
              <button 
                className="profile-menu-item"
                onClick={() => {
                  navigate("/order-history");
                  setIsOpen(false);
                }}
              >
                <span className="menu-icon">📋</span>
                <span className="menu-text">Order History</span>
              </button>
              
              <button 
                className="profile-menu-item"
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
              >
                <span className="menu-icon">⚙️</span>
                <span className="menu-text">Profile Settings</span>
              </button>
            </div>

            <div className="profile-divider"></div>

            <button 
              className="logout-btn"
              onClick={handleLogout}
            >
              <span className="menu-icon">🚪</span>
              <span className="menu-text">Logout</span>
            </button>
          </div>
        )}
      </div>

      <button 
        className="mobile-profile-btn"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        👤
      </button>

      {isMobileOpen && (
        <>
          <div 
            className="mobile-overlay"
            onClick={() => setIsMobileOpen(false)}
          ></div>
          <div className="mobile-profile-panel">
            <div className="panel-header">
              <h3>Account</h3>
              <button 
                className="panel-close"
                onClick={() => setIsMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="panel-profile">
              <div className="avatar-large">{user.name.charAt(0).toUpperCase()}</div>
              <p className="panel-name">{user.name}</p>
              <p className="panel-email">{user.email}</p>
            </div>

            <div className="panel-divider"></div>

            <div className="panel-menu">
              <button 
                className="panel-item"
                onClick={() => {
                  navigate("/order-history");
                  setIsMobileOpen(false);
                }}
              >
                <span className="item-icon">📋</span>
                <span className="item-text">Order History</span>
              </button>

              <button 
                className="panel-item"
                onClick={() => {
                  navigate("/profile");
                  setIsMobileOpen(false);
                }}
              >
                <span className="item-icon">⚙️</span>
                <span className="item-text">Profile Settings</span>
              </button>
            </div>

            <div className="panel-divider"></div>

            <button 
              className="panel-logout"
              onClick={handleLogout}
            >
              <span className="item-icon">🚪</span>
              <span className="item-text">Logout</span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileMenu;
