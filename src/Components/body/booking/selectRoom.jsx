import React from "react";

export const SelectRoom = (props) => {
  
  return (
    <div className="reservation selectRoom">
      <h6 className="reservation__title">SELECT ROOMS</h6>

      {props.name === "MakeAReservation" || props.name === "Confirmation" ? (
        <div className="selectRoom__total">
          <div className="selectRoom__total__rooms">
            <div>
              <p>ROOM1</p>
              <p>2 Adult, 1 Child</p>
            </div>

            <div>
              <p>LUXURY ROOM</p>
              <p className="roomPrice">$500.00</p>
            </div>
          </div>

          <p>Change Room</p>
        </div>
      ) : (
        <span></span>
      )}

      {props.name === "Confirmation" ? (
        <span></span>
      ) : (
        <div className="selectRoom__selected">
          <h6>YOU ARE BOOKING 2 ROOM</h6>
          <p>2 Adult, 1 Chirld</p>
        </div>
      )}

      {props.name !== undefined ? (
        <div
          className={
            props.name === "Confirmation"
              ? "selectRoom__roomInfo Confirmation"
              : "selectRoom__roomInfo"
          }
        >
          <p className="selectRoom__roomInfo__total">TOTAL</p>
          <p className="selectRoom__roomInfo__price">$500.000</p>
        </div>
      ) : (
        <div className="selectRoom__roomInfo">
          <p>ROOM 2</p>
          <p>2 Adult, 1 Child</p>
        </div>
      )}
    </div>
  );
};


