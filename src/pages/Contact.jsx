
export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out via email or phone!</p>
      </div>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Email</h3>
          <p>workwithnivaranatech@gmail.com</p>
          <br />
          <a href="mailto:workwithnivaranatech@gmail.com" className="cta-link">Click to Email</a>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+1 (234) 567-890</p>
          <br />
          <a href="tel:+1234567890" className="cta-link">Click to Call</a>
        </div>
      </div>
    </section>
  );
}
