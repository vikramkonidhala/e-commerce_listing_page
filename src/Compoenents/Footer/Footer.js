import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
          <input type="email" placeholder="Enter Your Email Address" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>

        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p>Call: <a href="tel:+919958287272">+919958287272</a></p>
          <p>Email: <a href="mailto:care@chaperoneplants.com">care@chaperoneplants.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-brand-description">
            <h3>CHAPERONE</h3>
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis.</p>
          </div>
          <div className="footer-social">
            <h4>Follow us on</h4>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>

        <p className="footer-copyright">© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
