import React from "react";
import { RoomTypes } from "./slick-slider/roomType.";

export const OurRooms = () => {
  return (
    <div className="ourRooms">
      <h2 className="ourRooms__title">Our Rooms</h2>
      <p className="ourRooms__content">
        When you host a party or family reunion, the special celebrations let
        you streng then bonds with
      </p>

      <RoomTypes />
    </div>
  );
};
