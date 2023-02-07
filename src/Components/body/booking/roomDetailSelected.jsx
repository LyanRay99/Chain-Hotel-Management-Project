//* Library
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//* Components UI
import { RoomSlider } from "../rooms/details/roomSlider";
import { RoomsDescription } from "../rooms/overall/roomsDescription";

//* Image
import Logo from "../../../Assets/Logo.png";

export const RoomDetailSelect = () => {
  const roomDetail = useSelector((state) => state.RS_rooms.roomDetailStep3);
  console.log(roomDetail);
  return (
    <div className="roomDetails__slider__main" id="roomDetailStep3">
      <div className="roomDetails__slider__main__image">
        <RoomSlider index={roomDetail.index} />
      </div>

      <div className="roomDetails__slider__main__introduction">
        <div className="rooms__image">
          <img src={Logo} alt={Logo}></img>
        </div>

        <RoomsDescription item={roomDetail.item} />
      </div>
    </div>
  );
};
