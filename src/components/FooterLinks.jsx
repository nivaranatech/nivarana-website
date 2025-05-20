import React from 'react';
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import logo from '../assets/tech.png';

const FooterLinks = () => {
  const links = [
    'Privacy Notice',
    'Cookie Policy',
    'Accessibility Declaration',
    'Disclaimer',
    'Security Policy',
    'California Notice at Collection',
    'Customize cookies',
  ];

  return (
    <footer className="footer">
      <div className="footer-left-column">
        <div className="footer-top-row">
          <img src={logo} alt="TCS Logo" className="logo" />
          <p className="footer-copy">©2025 NivaranaTech Services</p>
        </div>
        <div className="footer-links">
          {links.map((link, i) => (
            <a key={i} href="#">{link}</a>
          ))}
        </div>
      </div>

      <div className="footer-right">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default FooterLinks;
