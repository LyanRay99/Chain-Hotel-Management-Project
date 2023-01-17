import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goTop } from "../../../support/goTop";

export const NewsAndEventDeal = () => {
  const deal = useSelector((state) => state.RS_rooms.Rooms[0].roomType);
  console.log(deal);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="dots__list" style={{ margin: "0px" }}>
          {" "}
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "10px",
          border: "1px white solid",
        }}
      >
        {}
      </div>
    ),
  };
  return (
    <div className="newsEvent__navbar__deal">
      <p className="deal__title">DEAL</p>

      <Slider {...settings}>
        {deal.map((item, index) => (
          <div className="deal__card" key={index}>
            <div className="deal__card__background">
              <img
                src={require(`../../../../Assets/${item.image}`)}
                alt={item.name}
              ></img>
            </div>

            <div className="deal__card__info">
              <p className="deal__card__info__name">{item.name}</p>
              <p className="deal__card__info__price">{item.price}</p>
              <Link to={`/rooms-details/${index}`} onClick={goTop}>
                <button className="deal__card__info__viewMore">
                  VIEW MORE
                </button>
              </Link>
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
