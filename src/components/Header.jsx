import { useState } from 'react';
import logoImage from '../assets/nivaranatech-logo-transparent.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
        setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Nivarana Tech Logo" className="logo-img" />
        <div className="navbar-brand">
          <div className="brand-top">Nivarana</div>
          <div className="brand-bottom">Tech</div>
        </div>
      </div>

      {/* Hamburger button */}
      <button className="hamburger" onClick={toggleNavbar}>
        ☰
      </button>

      {/* Navbar links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu} >Home</a></li>
        <li><a href="#services" onClick={closeMenu} >Services</a></li>
        <li><a href="#portfolio" onClick={closeMenu} >Portfolio</a></li>
        <li><a href="#contact" onClick={closeMenu} >Contact Us</a></li>
        <li><a href="#about" onClick={closeMenu} >About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;