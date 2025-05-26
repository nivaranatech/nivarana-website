import React from 'react';
import logoImage from '../assets/tech.svg'; // adjust path as needed

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
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar;
