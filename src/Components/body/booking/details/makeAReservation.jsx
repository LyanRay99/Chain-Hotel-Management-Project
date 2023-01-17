import React from "react";
import { SelectRoom } from "../selectRoom";
import { RoomInfo } from "../roomInfo";

export const MakeAReservation = () => {
  return (
    <React.Fragment>
      <nav className="booking__body__navbar">
        <SelectRoom name="MakeAReservation" />
      </nav>

      <div className="booking__body__content">
        <RoomInfo />
      </div>
    </React.Fragment>
  );
};
