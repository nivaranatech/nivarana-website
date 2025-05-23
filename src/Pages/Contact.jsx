import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');

  const contactDetails = {
    India: {
      title: 'Corporate Communications',
      name: 'Mr. Akshay Sarkale',
      phone: '+91 22 6778 5000',
      email: 'akshay.srkale@nivaranatech.com',
      contactPerson: {
        name: 'Mr. Dhairya Bhoya',
        position: 'Head, Corporate Communications',
        email: 'dhairya.bhoya@nivaranatech.com',
        phone: '+91 22 6778 9999'
      }
    },
    
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="media-container">
        <button onClick={goBack} className="back-button">← Back</button>

        <h2 className="page-title">Media Contacts</h2>
        <p className="page-description">
          For any media-related queries, please contact our communications team using the details below.
        </p>

        <label htmlFor="country-select">Select Country:</label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="dropdown"
        >
          <option value="">-- Choose a Country --</option>
          {Object.keys(contactDetails).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        {selectedCountry && (
          <div className="details-box">
            <h2><strong>For your queries, kindly contact:</strong></h2>
            <h3>{contactDetails[selectedCountry].title}</h3>
            <p><strong>{contactDetails[selectedCountry].name}</strong></p>
            <p><strong>Phone:</strong> {contactDetails[selectedCountry].phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contactDetails[selectedCountry].email}`}>{contactDetails[selectedCountry].email}</a></p>
            <br />
            <p><strong>{contactDetails[selectedCountry].contactPerson.name}</strong></p>
            <p>{contactDetails[selectedCountry].contactPerson.position}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contactDetails[selectedCountry].contactPerson.email}`}>{contactDetails[selectedCountry].contactPerson.email}</a></p>
            <p><strong>Phone:</strong> {contactDetails[selectedCountry].contactPerson.phone}</p>
          </div>
        )}

        <button
          onClick={() => window.location.href = 'https://www.nivaranatech.com/'}
          className="visit-button"
        >
          Visit Website →
        </button>
      </div>
    </>
  );
};

export default Contacts;