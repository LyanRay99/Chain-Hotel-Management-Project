import React from "react";
import { useSelector } from "react-redux";
import AboutUs1 from "../../../Assets/About/home/about-1.jpg";
import AboutUs2 from "../../../Assets/About/home/about-2.jpg";

export const AboutUs = () => {
  const aboutUs = useSelector((state) => state.RS_aboutUs.aboutUs.aboutUs_Home);

  return (
    <div className="ourRooms aboutUs">
      <h2 className="ourRooms__title">About Us</h2>
      <p className="ourRooms__content">
        Contrary to popular belief, Lorem isn’t simply random text. It has roots
        in a of classical Latin literature from 45 BC, making it over 2000 years
        old. Avalon’s leading hotels with gracious island hospitality,
        thoughtful amenities and distinctive .
      </p>
      <p className="ourRooms__content">
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage ...
      </p>

      <div className="aboutUs__image">
        <div className="aboutUs__image__1">
          <img src={AboutUs1} alt={AboutUs1}></img>
        </div>

        <div className="aboutUs__image__2">
          <img src={AboutUs2} alt={AboutUs2}></img>
        </div>
      </div>

      <div className="aboutUs__service">
        {aboutUs.map((item, index) => (
          <span key={index}>
            <img src={item.image} alt={item.name}></img>
            <p>{item.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
};
