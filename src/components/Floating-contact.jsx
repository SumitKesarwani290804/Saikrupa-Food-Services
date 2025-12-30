import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import "../styles/Floating-contact.css";
import gmaillogo from "../assets/gmail-logo.png";

function FloatingContact({
  email = "theunknownthought26@gmail.com",
  emailSubject = "Place Your Enquiry",
  emailBody = "Hello , ",
  whatsappNumber = "919819289778",
  whatsappText = "Hello I want to know more",
  callNumber = "919819289778",
  isDarkBg = false,
}) {
  return (
    <div className="floating-contact">
      {/* Gmail Web */}
      <a
        href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(
          emailSubject
        )}&body=${encodeURIComponent(emailBody)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`contact-icon gmail ${isDarkBg ? "white-bg" : ""}`}
        aria-label="Email"
      >
        <img src={gmaillogo} alt="Gmail" className="gmail-img" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappText
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp"
        aria-label="WhatsApp"
      >
        <SiWhatsapp size={28} />
      </a>

      {/* Call */}
      <a
        href={`tel:+${callNumber}`}
        className="contact-icon call"
        aria-label="Call"
      >
        <FiPhoneCall size={28} />
      </a>
    </div>
  );
}

export default FloatingContact;
