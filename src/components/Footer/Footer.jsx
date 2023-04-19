import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import './footerSection.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4 className="footer-heading">Join Our Newsletter</h4>
        <p className="footer-text">Get updated first on all our offers and upgrades</p>
        <div className="email-capture">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </div>
      <div className="footer-section">
        <h4 className="footer-heading">Find Us</h4>
        <p className="footer-text">Suite 17, LSDPC office complex, Pen Cinema, Agege, Lagos</p>
      </div>
      <div className="footer-section">
        <h4 className="footer-heading">Get In Touch</h4>
        <p className="footer-text">+234 903 690 8590<br/>+234 803 300 0090<br/>fronet@gmail.com</p>
      </div>
      <div className="footer-section">
        <h4 className="footer-heading">More</h4>
        <p className="footer-text">Careers<br/>Fronet Credits<br/>Partner with Us</p>
      </div>
      <div className="footer-section">
        <img src="./proudlynig.svg" alt="Nigerian flag in heart shape" className="heart-flag" />
      </div>
      <div className="footer-section">
        <div className="footer-social">
          <IoLogoFacebook className="footer-social-icon" />
          <IoLogoTwitter className="footer-social-icon" />
          <IoLogoInstagram className="footer-social-icon" />
          <IoLogoLinkedin className="footer-social-icon" />
        </div>
        <p className="footer-policy">Privacy Policy | Terms of Use</p>
        <p className="footer-copy">© {new Date().getFullYear()} Frontier Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
