//* Library
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Zoom } from "react-awesome-reveal";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";
import { RoomsImage } from "../../Components/body/rooms/overall/roomsImage";
import { RoomsDescription } from "../../Components/body/rooms/overall/roomsDescription";

const Rooms = () => {
  const roomTypes = useSelector((state) => state.RS_rooms.Rooms[0].roomType);

  return (
    <>
      <SupSlider supSlider="ROOMS" />

      <Zoom triggerOnce={true}>
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
      </Zoom>
    </>
  );
};

export default Rooms;
