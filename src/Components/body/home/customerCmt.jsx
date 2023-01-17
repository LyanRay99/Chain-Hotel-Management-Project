import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

export const CustomerCmt = () => {
  const customerCmt = useSelector((state) => state.RS_customerCmt.customerCmt);

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
          width: "15px",
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
    <div className="comment">
      <div className="comment__background"></div>

      <Slider {...settings}>
        {customerCmt.map((item, index) => (
          <div className="comment__box" key={index}>
            <div className="comment__box__avatar">
              <img
                src={require(`../../../Assets/${item.avatar}`)}
                alt={item.name}
              ></img>
            </div>

            <div className="comment__box__customer">
              <div className="customer__info">
                <h3 className="customer__info__name">{item.name}</h3>
                <span className="customer__info__address">
                  From {item.address}
                </span>
              </div>

              <p className="customer__info__content">"{item.comment}"</p>
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
