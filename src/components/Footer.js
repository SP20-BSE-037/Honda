// Footer.js
import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-box">DEALERSHIP FORM</div>
        <div className="footer-box">ONLINE BOOKING</div>
        <div className="footer-box">INVESTOR RELATIONS</div>
      </div>

      {/* Links Section */}
      <div className="footer-grid">
        <div>
          <h3>MODEL LINE</h3>
          <ul>
            <li>Honda City 1.2LS</li>
            <li>Honda City 1.5LS</li>
            <li>Honda Aspire 1.5LAS</li>
            <li>Honda BR-V CVT S</li>
            <li>Honda Civic Oriel</li>
            <li>Honda Civic RS</li>
            <li>Honda HR-V VTI</li>
            <li>Honda HR-V VTI-S</li>
            <li>Honda CR-V</li>
            <li>Honda Accord</li>
          </ul>
        </div>
        <div>
          <h3>SERVICES</h3>
          <ul>
            <li>Online Booking</li>
            <li>Delivery Status</li>
          </ul>
        </div>
        <div>
          <h3>HELP & SUPPORT</h3>
          <ul>
            <li>Contact Us</li>
            <li>Location Map</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <ul>
            <li><FaFacebookF /> Facebook</li>
            <li><FaYoutube /> Youtube</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaLinkedinIn /> LinkedIn</li>
            <li><FaTwitter /> Twitter</li>
          </ul>
        </div>
        <div>
          <h3>DISCOVER</h3>
          <ul>
            <li>News & Events</li>
            <li>Promotions</li>
            <li>Quality Policy</li>
            <li>HSE Policy</li>
            <li>Sustainability</li>
            <li>Innovation</li>
            <li>Motor Sports</li>
            <li>Global Honda</li>
            <li>Global Brand Slogan</li>
            <li>HR-V 360 Experience</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright 2025 &copy; Honda Atlas Cars (Pakistan) Ltd.</p>
        <p>Last updated 11th October, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;