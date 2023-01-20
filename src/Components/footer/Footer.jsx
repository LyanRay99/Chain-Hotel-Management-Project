//* Library
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//* Fontawesome
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
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

//* Components support
import { ListBranch } from "../body/contact/listBranch";
import { goTop } from "../support/goTop";

export const Footer = () => {
  const listBranch = useSelector((state) => state.RS_rooms.Rooms);

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
              <NavLink to="/gallery" onClick={goTop}>
                <li>Photo & Video</li>
              </NavLink>
              <NavLink to="/careers" onClick={goTop}>
                <li>Carrer</li>
              </NavLink>
              <NavLink to="/about" onClick={goTop}>
                <li>About Us</li>
              </NavLink>
              <NavLink to="/contact" onClick={goTop}>
                <li>Contact Us</li>
              </NavLink>
              <NavLink to="faqs" onClick={goTop}>
                <li>FAQs</li>
              </NavLink>
              <NavLink to="/new&event" onClick={goTop}>
                <li>News</li>
              </NavLink>
              <li>Our Location</li>
              <NavLink to="/term" onClick={goTop}>
                <li>Term & Conditions</li>
              </NavLink>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="listBranch">
            {listBranch.map((item, index) => (
              <ListBranch item={item} key={index} />
            ))}
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
