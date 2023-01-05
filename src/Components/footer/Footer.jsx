//* Library
import React from "react";
import { NavLink } from "react-router-dom";

//* Fontawesome
import {
  faEnvelope,
  faPaperPlane,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcDiscover,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//* Logo
import Logo from "../../Assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contactMe">
        <div className="footer__contactMe__email">
          <div className="logoEmail">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>

          <div className="inputEmail">
            <input type="text" placeholder="Your email address"></input>
            <button>
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </button>
          </div>
        </div>

        <div className="footer__contactMe__social">
          <span>
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </span>
        </div>
      </div>

      <div className="footer__others">
        <div className="footer__others__logo">
          <img src={Logo} alt="Logo"></img>
        </div>

        <div className="footer__others__info">
          <div className="box">
            <ul>
              <li>Site Map</li>
              <li>Term & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="box">
            <ul>
              <li>Our Location</li>
              <li>Carrer</li>
              <li>About Us</li>
              <NavLink end to="/contact">
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>

          <div className="box">
            <ul>
              <li>FAQs</li>
              <li>News</li>
              <li>Photo & Video</li>
              <li>Gift Card</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom__copyRight">
          © 2023 Panorama Hotel. All Rights Reserved.
        </div>

        <div className="footer__bottom__payment">
          <span>
            <FontAwesomeIcon icon={faCcPaypal} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faCcVisa} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faCcMastercard} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faCcDiscover} className="icon" />
          </span>
        </div>
      </div>
    </footer>
  );
};
