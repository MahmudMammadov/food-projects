import React from "react";
import "./footer.css";

import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <ul className="footer-menu-list">
          <li>
            <h3 className="footer-text">DISCOVER</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
              Dining Rewards
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Private Dining
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Top 100 Restaurants
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Reserve for Others
            </a>
          </li>
        </ul>

        <ul className="footer-menu-list">
          <li>
            <h3 className="footer-text">OPENTABLE</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Press
            </a>
          </li>
        </ul>

        <ul className="footer-menu-list">
          <li>
            <h3 className="footer-text"> MORE</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
              OpenTable for iOS
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              OpenTable for Android
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Help & Support
            </a>
          </li>
        </ul>

        <ul className="footer-menu-list">
          <li>
            <h3 className="footer-text">Social Media</h3>
          </li>
          <li className="footer-social-media">
            <a href="#" className="footer-link">
              Facebook
            </a>
            <span className="footer-icone-effect">
              <BsFacebook className="footer-icon" />
            </span>
          </li>
          <li className="footer-social-media">
            <a href="#" className="footer-link">
              Youtube
            </a>
            <span className="footer-icone-effect">
              <BsYoutube className="footer-icon" />
            </span>
          </li>
          <li className="footer-social-media">
            <a href="#" className="footer-link">
              Twitter
            </a>
            <span className="footer-icone-effect">
              <BsTwitter className="footer-icon" />
            </span>
          </li>
          <li className="footer-social-media">
            <a href="#" className="footer-link">
              Instagram
            </a>
            <span className="footer-icone-effect">
              <BsInstagram className="footer-icon " />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
