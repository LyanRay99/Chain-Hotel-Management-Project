import React from "react";
import { SelectRoom } from "../selectRoom";
import { AllRoomSelected } from "./allRoomSelected";

export const Confirmation = () => {
  
  return (
    <React.Fragment>
      <nav className="booking__body__navbar">
        <SelectRoom name="Confirmation" />
      </nav>

      <div className="booking__body__content">
        <AllRoomSelected />
      </div>
    </React.Fragment>
  );
};
