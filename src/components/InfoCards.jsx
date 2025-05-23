import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoCards = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Request for Services', icon: '🏢', route: '/request-service' },
    { title: 'For your Contacts', icon: '📞' ,route: '/contacts'},
    { title: 'Website feedback', icon: '📑' ,route: '/feedback'},
  ];

  return (
    <div className="info-section">
      <div className="card-container">
        {cards.map((card, i) => (
          <div
            className="card"
            key={i}
            onClick={() => card.route && navigate(card.route)}
            style={{ cursor: 'pointer' }}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <br></br>

      <div className="map-container">
        <h2>Our Location</h2><br></br>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29492.800755379485!2d72.78656931121122!3d22.481657441591487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e549cb23e779d%3A0xd649903e308644ab!2sPetlad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747555904538!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default InfoCards;