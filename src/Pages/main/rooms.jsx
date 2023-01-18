import React from "react";
import { useSelector } from "react-redux";
import { SupSlider } from "../../Components/headers/supSlider";
import { RoomsImage } from "../../Components/body/rooms/overall/roomsImage";
import { RoomsDescription } from "../../Components/body/rooms/overall/roomsDescription";

export const Rooms = () => {
  const roomTypes = useSelector((state) => state.RS_rooms.Rooms[0].roomType);

  return (
    <>
      <SupSlider supSlider="ROOMS" />
      <div className="section">
        {roomTypes.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className="rooms" key={index}>
                <RoomsImage item={item} />
                <RoomsDescription item={item} index={index} />
              </div>
            );
          } else {
            return (
              <div className="rooms" key={index}>
                <RoomsDescription item={item} index={index} />
                <RoomsImage item={item} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};