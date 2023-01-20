import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const NewsAndEventTagsSocial = () => {
  return (
    <React.Fragment>
      <div className="newsEvent__navbar__tags">
        <p className="tags__title">TAGS</p>

        <div className="tags__container">
          <span>Restaurant</span>
          <span>Food Dinner</span>
          <span>Traval</span>
          <span>Blog</span>
          <span>Wedding</span>
          <span>Luxury Room</span>
          <span>Valentine</span>
          <span>Wedding</span>
        </div>
      </div>

      <div className="newsEvent__navbar__social">
        <p className="social__title">SOCIALS</p>

        <div className="social__container">
          <span>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faPinterest} className="icon" />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
