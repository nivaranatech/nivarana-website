import { FaWhatsapp } from 'react-icons/fa6';

export default function ContactUs() {
  const emails = [
    { label: 'Primary Email', value: 'contact@nivaranatech.com' },
    { label: 'Secondary Email', value: 'workwithnivaranatech@gmail.com' },
  ];

  const phoneNumbers = [
    { label: 'Primary Phone', value: '+91 8200535625' },
    { label: 'Secondary Phone', value: '+91 7016686728' },
  ];

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out via email or phone!</p>
      </div>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Email</h3>
          {emails.map((email, index) => (
            <div key={index}>
              <p>{email.value}</p>
              <a href={`mailto:${email.value}`} className="cta-link">
                Click to Email
              </a>
            </div>
          ))}
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          {phoneNumbers.map((phone, index) => (
            <div key={index}>
              <p>{phone.value} <FaWhatsapp/></p>
              <a href={`tel:${phone.value.replace(/\s+/g, '')}`} className="cta-link">
                Click to Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
