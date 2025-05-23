import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestService = () => {
  const navigate = useNavigate();

  const [industry, setIndustry] = useState('');
  const [region, setRegion] = useState('');
  const [showIndustryInput, setShowIndustryInput] = useState(false);
  const [showRegionInput, setShowRegionInput] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleIndustryChange = (e) => {
    const value = e.target.value;
    setIndustry(value);
    setShowIndustryInput(value === 'Other');
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegion(value);
    setShowRegionInput(value === 'Other');
  };

  return (
    <>
      <div className="request-container">
        <button onClick={() => navigate(-1)} className="request-back-btn">
          ← Back
        </button>

        <div className="request-title">🏢 Request for Services</div>

        <p className="request-description">
          We’ve driven growth and purposeful transformation across every industry and we’re excited to build on your belief.
          Tell us a bit more about yourself, so we can get the ball rolling.
        </p>

        <form className="request-form">
          <div className="form-row">
            <div className="form-field">
              <input type="text" required />
              <label>First Name*</label>
            </div>
            <div className="form-field">
              <input type="text" required />
              <label>Last Name*</label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <input type="email" required />
              <label>Email*</label>
            </div>
            <div className="form-field">
              <input type="text" required />
              <label>Organization*</label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <select required onChange={handleRegionChange}>
                <option value="">Select Region*</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Other">Other</option>
              </select>
              {showRegionInput && (
                <input type="text" placeholder="Enter your region" required />
              )}
            </div>

            <div className="form-field">
              <select required onChange={handleIndustryChange}>
                <option value="">Select Industry*</option>
                <option value="Banking">Banking</option>
                <option value="Health">Health</option>
                <option value="Government">Government</option>
                <option value="Public Service">Public Service</option>
                <option value="Other">Other</option>
              </select>
              {showIndustryInput && (
                <input type="text" placeholder="Enter your industry" required />
              )}
            </div>
          </div>

          <div className="form-field full-width">
            <textarea required rows="5" maxLength="1500" />
            <label>How can we help you?*</label>
          </div>

          <div className="policy">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
            <label>
              I agree to the <a href="#">nivaranatech Privacy Notice</a>.
            </label>
          </div>

          <button type="submit" className="request-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RequestService;