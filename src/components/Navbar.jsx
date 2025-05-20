import React from 'react';
import logoImage from '../assets/tech.png'; // adjust path as needed

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <div className="logo-split">
        <img src={logoImage} alt="Logo" className="logo-img" />
        <div className="letters">
          <div>N</div>
          <div>T</div>
        </div>
        <div className="names">
          <div>Nivarana</div>
          <div>Tech</div>
        </div>
      </div>
    </div>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact Us</li>
    </ul>
  </nav>
);

export default Navbar;
