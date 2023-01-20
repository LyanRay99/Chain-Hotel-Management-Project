import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import roomSliderData from "../../../../Data/list_room.json";

export const RoomSlider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const roomSlider = useSelector(
    (state) => state.RS_rooms.Rooms[0].roomType[props.index].imageDetail
  );

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {roomSlider.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={require(`../../../../Assets/${item}`)}
            alt={item}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
