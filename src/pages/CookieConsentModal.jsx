import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Modal from "react-modal"; // You can use any modal library or style your own modal

// Styling for the modal
const modalStyles = {
  content: {
    position: "fixed", // Keeps it fixed at the bottom
    bottom: "20px", // Ensures it stays at the bottom
    left: 0,
    top:"750px",
    right: 0,
    margin: "0 auto",
    width: "100%", // Full-width to align at the bottom of the page
    maxWidth: "1200px",
    height: "150px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#000",
    borderRadius: "10px", // Rounded corners on the top
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "2005",
    textAlign: "center",
    border: "1px solid #c59c5f",
    color: "white",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)", // No overlay background to keep the page visible
  },
};

const CookieConsentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const consentGiven = Cookies.get("consentGiven");
    if (!consentGiven) {
      setIsModalOpen(true);
    }
  }, []);

  const giveCookieConsent = () => {
    Cookies.set("Name", "Parlor Banquets", { path: "/" });
    Cookies.set("location", "2863 Woodbridge Ave, Edison NJ", { path: "/" });
    Cookies.set("area", "New Jersey", { path: "/" });
    Cookies.set("website", "https://parlorbanquet.com/", { path: "/" });
    Cookies.set("best", "Best banquets for all celebrations", { path: "/" });
    Cookies.set(
      "Keywords",
      "Banquets, Marriage hall, Party hall, Social Gathering, Event Venue, Wedding Reception, Corporate Events, Special Occasions, Banquet Hall Rental, Celebration Venue, Conference Room, Catering Services, Party Venue, Elegant Banquets, Luxury Events, Event Planning, Private Events, Meeting Space, Gathering Space, Festive Events, Holiday Parties, Birthday Parties",
      { path: "/" }
    );
    Cookies.set("consentGiven", "true", { path: "/", expires: 365 });

    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)} // Modal closes when the request is made (including outside clicks)
      style={modalStyles}
      shouldCloseOnOverlayClick={false} // Keeps the modal open unless the user explicitly accepts
    >
      <div className="content">
        <h4>Cookie Consent</h4>
        <p style={{ fontSize: "14px",color:"white",fontWeight:"400" }}>
          We use cookies to enhance your experience. By accepting, you agree to
          the use of cookies.
        </p>
        <button
          onClick={giveCookieConsent}
          style={{
            padding: "10px 20px",
            backgroundColor: "#d2ae6d",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    </Modal>
  );
};

export default CookieConsentModal;
