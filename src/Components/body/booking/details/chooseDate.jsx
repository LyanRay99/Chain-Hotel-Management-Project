import React from "react";
import { Reservation } from "../reservation";
import { BookingCalender } from "../calender";

export const ChooseDate = () => {
  return (
    <React.Fragment>
      <nav className="booking__body__navbar">
        <Reservation />
      </nav>

      <div className="booking__body__content">
        <BookingCalender />
        <BookingCalender />
      </div>
    </React.Fragment>
  );
};
