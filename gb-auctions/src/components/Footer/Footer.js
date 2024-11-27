import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "react-feather";
import { MdCopyright } from "react-icons/md";
import Suscribe from "../Suscribe/Subscribe";

const Footer = () => {
  return (
    <div className="bottom-footer">
      <Suscribe />
      <div className="max-width bottom-footer-inner">
        <div className="footer-logo">
          <div className="footer-logo-text">
            <Link to="/">
              <img src="/Images/logo-02 (1).svg" alt="" />
            </Link>
            <p>
              Explore a vast array of items up for bid, From antiques to
              electronics, satisfaction guaranteed.
            </p>
          </div>
          <div className="footer-address">
            <div className="mail-address">
              <Mail />
              <p>gbauctions@gmail.com</p>
            </div>
            <div className="mail-address">
              <PhoneCall />
              <p>(051) 345 7989</p>
            </div>
            <div className="mail-address">
              <MapPin />
              <p>Gilgit Baltistan, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="pages-faq-links">
            <div className="pages-links">
              <h2>Pages</h2>
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Auction</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Login</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="pages-links">
              <h2>About</h2>
              <ul>
                <li>
                  <Link to="/dashboard/dash-main">Dashboard</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links-input">
            <div className="suscribe-input">
              <h2>Subscribe Newslater</h2>
              <span>
                <input type="email" placeholder="Enter your email" />
                <Send />
              </span>
            </div>
            <div className="suscribe-input">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <div className="facebook-icon">
                  <Facebook />
                </div>
                <div className="instagram-icon">
                  <Instagram />
                </div>
                <div className="linkedin-icon">
                  <Linkedin />
                </div>
                <div className="youtube-icon">
                  <Youtube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-width copyright-section">
        <div className="copy-right-inner">
          <span>
            All <MdCopyright /> rights reserved to GB Auctions
          </span>
          <span>Develop by ZH Studio</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
