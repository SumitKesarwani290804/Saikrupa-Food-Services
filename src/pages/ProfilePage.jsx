import React, { useState } from "react";
import { useAuth } from "../Context/Auth-context";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="profile-page-content">
          <div className="profile-header">
            <div className="profile-avatar-large">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <h1>Profile Settings</h1>
            {!isEditing && (
              <button 
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={isEditing ? "form-input active" : "form-input"}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={isEditing ? "form-input active" : "form-input"}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className={isEditing ? "form-input active" : "form-input"}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {isEditing && (
              <div className="form-actions">
                <button 
                  className="save-btn"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button 
                  className="cancel-btn"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user?.name || "",
                      email: user?.email || "",
                      phone: user?.phone || "",
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="profile-info-section">
            <h3>Account Information</h3>
            <div className="info-item">
              <span className="info-label">Member Since</span>
              <span className="info-value">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Account Status</span>
              <span className="info-value">Active</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
