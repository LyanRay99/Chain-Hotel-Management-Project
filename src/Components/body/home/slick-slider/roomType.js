import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goTop } from "../../../support/goTop";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faEye,
  faMaximize,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export const RoomTypes = () => {
  const roomType = useSelector((state) => state.RS_rooms.Rooms[0].roomType);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ourRooms__roomType">
      <Slider {...settings}>
        {roomType.map((item, index) => (
          <div className="ourRooms__box" key={index}>
            <div className="ourRooms__box__image">
              <img
                src={require(`../../../../Assets/${item.imageOurRoom}`)}
                alt={item.name}
              ></img>

              <Link to={`/rooms-details/${index}`} onClick={goTop}>
                <div className="roomType">
                  <p className="roomType__name">
                    {item.type.toUpperCase()} ROOM
                  </p>
                  <p className="roomType__price">{item.price} / PER NIGHT</p>
                </div>
              </Link>
            </div>

            <div className="ourRooms__box__info">
              <p className="info__description">
                Cum sociis natoque penatibus et magnis dis part urient montes,
                nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.
              </p>

              <div className="info__other">
                <span>
                  <FontAwesomeIcon icon={faPerson} className="icon" />4 Persons
                </span>
                <span>
                  <FontAwesomeIcon icon={faMaximize} className="icon" />
                  35m2 / 376ft2
                </span>
                <span>
                  <FontAwesomeIcon icon={faEye} className="icon" />
                  Sea Balcony
                </span>
                <span>
                  <FontAwesomeIcon icon={faBed} className="icon" />
                  Kingsize / Twin
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
