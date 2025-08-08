
import { FaFacebookF,FaYoutube,FaXTwitter,FaInstagram,FaLinkedinIn, FaWhatsapp,} from 'react-icons/fa6';

import logo from '/nivaranatech-logo-transparent.png';

const Footer = () => {
  // const links = [
  //   'Privacy Notice',
  //   'Cookie Policy',
  //   'Accessibility Declaration',
  //   'Disclaimer',
  //   'Security Policy',
  //   'California Notice at Collection',
  //   'Customize cookies',
  // ];

  return (
    <footer className="footer">
      <div className="footer-left-column">
        <div className="footer-top-row">
          <img src={logo} alt="Nivarana Tech Logo" className="footer-logo" />
          <p className="footer-copy">© 2025 NivaranaTech</p>
        </div>
        <div className="footer-links">
          {/* {links.map((link, index) => (
            <a key={index} href="#">{link}</a>
          ))} */}
        </div>
      </div>

      <div className="footer-right">
        <a href="https://www.facebook.com/profile.php?id=61576877070925&sk=about" target='_blank'><FaFacebookF /></a>
        <a href="https://youtube.com/@nivaranatech?feature=shared" target='_blank'><FaYoutube /></a>
        <a href="https://x.com/nivaranatech?t=Yruj_rL99hf2XVw8u2hdWw&s=08" target='_blank'><FaXTwitter /></a>
        <a href="https://www.instagram.com/nivaranatech?utm_source=qr&igsh=MXVheWMyN2dybWhpMA==" target='_blank'><FaInstagram /></a>
        <a href="https://wa.me/918200535625" target='_blank'><FaWhatsapp /></a>
      </div>
    </footer>
  );
};

export default Footer;
