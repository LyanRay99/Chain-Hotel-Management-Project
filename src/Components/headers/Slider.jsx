import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../Assets/Slider/image1.jpg";
import slider2 from "../../Assets/Slider/image2.jpg";
import slider3 from "../../Assets/Slider/image3.jpg";
import slider4 from "../../Assets/Slider/image4.jpg";
import { useSelector, useDispatch } from "react-redux";
export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slider = useSelector((state) => state.RS_slider.slider);
  const dispatch = useDispatch();

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {slider.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.name} />
          <Carousel.Caption>
            <h3>{item.content}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
