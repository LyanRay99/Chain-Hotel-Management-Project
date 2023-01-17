import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slider = useSelector((state) => state.RS_slider.slider);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {slider.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={require(`../../Assets/${item.image}`)}
            alt={item.name}
          />
          <Carousel.Caption>
            <h3>{item.content}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
