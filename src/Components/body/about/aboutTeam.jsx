import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const AboutTeam = () => {
  const aboutTeam = useSelector((state) => state.RS_aboutUs.aboutUs.about_Team);

  return (
    <div className="about__team">
      <h2 className="about__team__title">TEAM MEMBER</h2>

      <div className="about__team__member">
        {aboutTeam.map((item, index) => (
          <div className="card" key={index}>
            <div className="card__image">
              <img
                src={require(`../../../Assets/${item.image}`)}
                alt={item.name}
              ></img>
            </div>

            <div className="card__info">
              <h5 className="card__info__name">{item.name}</h5>
              <p className="card__info__position">{item.position}</p>
              <p className="card__info__description">{item.description}</p>

              <div className="card__info__social">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
