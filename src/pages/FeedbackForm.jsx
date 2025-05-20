import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterLinks';

const FeedbackForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: false,
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted!');
    // TODO: Add API integration
  };

  return (
    <>
      <Navbar />

      <div className="feedback-container">
        <button onClick={() => navigate(-1)} className="request-back-btn">
          ← Back
        </button>

        <div className="feedback-title"><strong>💬 Website Feedback</strong></div>

        <p className="feedback-description">
          Let us know what you think of the tcs.com experience. We welcome your suggestions,
          comments, and opinions.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label>First Name*</label>
            </div>

            <div className="form-field">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label>Last Name*</label>
            </div>
          </div>

          <div className="form-field full-width">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email*</label>
          </div>

          <div className="form-field full-width">
            <textarea
              name="message"
              rows="6"
              maxLength="1500"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>How can we help you?*</label>
            <p className="char-count">({charCount}/1500)</p>
          </div>

          <div className="form-field checkbox-field">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label className="consent-label">
              For further details on how your personal data will be processed and how your consent
              can be managed, refer to the <a href="#">NT Privacy Notice.</a>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default FeedbackForm;
