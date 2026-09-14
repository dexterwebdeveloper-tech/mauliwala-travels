import React from 'react';

const ContactButtons = () => {
  return (
    <div 
      className="contact-buttons" 
      style={{
        position: 'fixed', 
        bottom: '20px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '0 20px', 
        zIndex: 1000,
        pointerEvents: 'none', 
      }}
    >
      
      <a 
        href="tel:+919049419494" 
        className="call-button" 
        style={{
          backgroundColor: '#C92227', 
        
          borderRadius: '50%',
          border : '1px solid white',
          padding: '15px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          zIndex: 1001, // Ensure button is above the container
          pointerEvents: 'auto', // Allow clicks on this specific button
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#C92227')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#C92227')}
      >
        <img src="./images/phone.webp" alt="Call" style={{ width: '30px', height: '30px' }} />
      </a>

      <a 
href="https://wa.me/919695139595?text=Hello%20Mauliwala%20Travels%20Team%2C%0A%0AI%20am%20interested%20in%20booking%20an%20Urbania%20rental.%20Could%20you%20please%20share%20the%20available%20vehicles%2C%20seating%20capacity%2C%20rental%20pricing%2C%20and%20booking%20details%3F%0A%0AThank%20you%21"






        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366', 
          borderRadius: '50%', 
          padding: '15px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          zIndex: 1001,
          pointerEvents: 'auto', 
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1DAE3E')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
      >
        <img src="./images/whatsapp.webp" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
      </a>

    </div>
  );
};

export default ContactButtons;

