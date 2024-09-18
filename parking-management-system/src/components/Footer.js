import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import './Footer.css';


const Footer = () => {
  return (
    <>
   
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h2>Parkivia</h2>
          <p>At Parkivia, we're passionate about creating unforgettable outdoor</p>
          <input type="email" placeholder="Your email address..." />
          <button type="submit"><CiMail /></button>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <ul>
            <li>Custom Service</li>
            <li>F.A.Q.'s</li>
            <li>Ordering Tracking</li>
            <li>Contact Us</li>
            <li>Events</li>
            <li>Popular</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Your Account</li>
            <li>Advanced Search</li>
            <li>Term & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Discount</li>
            <li>Custom Service</li>
            <li>Term & Condition</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 | Sneakerank By ShopiLaunch. Powered by Shopify.</p>
        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmazonPay />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
