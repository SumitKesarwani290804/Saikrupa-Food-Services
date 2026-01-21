import React from "react";
import { useToast } from "../Context/Cart-context";
import "../styles/Toast.css";

const Toast = () => {
  const { toast } = useToast();

  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className="toast-notification">
        <span className="toast-icon">✓</span>
        <span className="toast-message">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
