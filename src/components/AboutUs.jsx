import React from 'react';
import logoImage from '../assets/tech.svg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-hero">
        <img src={logoImage} alt="Nivarana Tech Logo" />
        <h1>About NivaranaTech</h1>
      </div>

      <div className="about-content">
        <section className="info-section about-container" id="about">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Nivarana Tech</strong> – your trusted technology partner.
            We specialize in delivering innovative, reliable, and scalable software solutions to help
            businesses thrive in the digital age.
          </p>

          <h3>Who We Are</h3>
          <p>
            At Nivarana Tech, we are a team of passionate developers, designers, and tech enthusiasts
            driven by a shared mission to solve complex problems with simple, elegant solutions.
            With years of experience across various industries, we pride ourselves on our deep
            understanding of technology and commitment to client success.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals and businesses by building digital products that make
            a real impact. Whether you're a startup looking to launch your first app or an enterprise
            optimizing operations, we're here to turn your vision into reality.
          </p>

          <h3>What We Do</h3>
          <ul>
            <li>Custom Web & Mobile Application Development</li>
            <li>Cloud Solutions and API Integration</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Data Management & Analytics</li>
            <li>IT Consulting & Technical Support</li>
          </ul>

          <h3>Why Choose Us?</h3>
          <ul>
            <li><strong>Client-Centric Approach:</strong> We listen, collaborate, and deliver tailored solutions.</li>
            <li><strong>Quality Assurance:</strong> Rigorous testing and QA processes ensure smooth performance.</li>
            <li><strong>Timely Delivery:</strong> We respect your timelines and keep projects on track.</li>
            <li><strong>Continuous Innovation:</strong> We stay ahead of trends to future-proof your technology.</li>
          </ul>

          <div className="about-quote">
            “Technology is best when it brings people together. At Nivarana Tech, that’s exactly what we
            aim to do.”
          </div>

          <p>
            Ready to build something great together? Reach out to us – we’d love to hear your ideas!
          </p>
        </section>

        {/* Hierarchical Team Structure */}
        <section className="team-section">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <h4>Dev Suthar</h4>
              <p>Chief Executive Officer (CEO)</p>

              <div className="team-grid">
                <div className="team-card">
                  <h4>Devdutt Solanki</h4>
                  <p>Chief Financial Officer (CFO)</p>
                </div>

                <div className="team-card">
                  <h4>Het Shukla</h4>
                  <p>Chief Technology Officer (CTO)</p>
                  <div className="team-grid">
                    <div className="team-card">
                      <h4>Akshay Sarkale</h4>
                      <p>Database Handler</p>
                    </div>
                  </div>
                </div>

                <div className="team-card">
                  <h4>Dhairya Bhoya</h4>
                  <p>Backend Developer</p>
                </div>
                <div className="team-card">
                  <h4>Pratik Bhavsar</h4>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
