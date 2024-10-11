import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div
      className="whatsapp-button"
      onClick={() => window.open(whatsappURL, '_blank')}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',  
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
    </div>
  );
};

export default WhatsAppButton;
