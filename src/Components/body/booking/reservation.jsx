import React from "react";
import { useSelector } from "react-redux";
import { Selects } from "./select";

export const Reservation = () => {
  const branchName = useSelector((state) => state.RS_rooms.Rooms);
  const roomType = useSelector((state) => state.RS_rooms.Rooms[0].roomType);
  const roomTypes = useSelector(
    (state) => state.RS_rooms.Rooms[0].roomType[0].typeR
  );

  return (
    <div className="reservation">
      <h6 className="reservation__title">YOUR RESERVATION</h6>

      {/* Completed: Branch */}
      <div className="reservation__branch">
        <span>BRANCH</span>
        <Selects branchName={branchName} />
      </div>

      {/* Completed: Time */}
      <div className="reservation__dates">
        <span>YOUR STAY DATES</span>
        <p>ARRIVE</p>
        {/* datetime picker */}
        <input type="date" placeholder="Arrive date..."></input>

        <p>DEPATURE</p>
        {/* datetime picker */}
        <input type="date" placeholder="Arrive date..."></input>
        <p>NIGHT</p>
        <input
          type="number"
          placeholder="Night..."
          className="reservation__dates__input"
        ></input>
      </div>

      {/* Completed: Rooms type */}
      <div className="reservation__roomType">
        <span>ROOMS TYPE</span>
        <p>Type</p>
        <Selects roomType={roomType} />
        <br />
        <Selects roomTypes={roomTypes} />
      </div>

      {/* Completed: Room amount */}
      <div className="reservation__roomsGuest">
        <span>ROOMS & GUEST</span>
        <p>ROOMS</p>
        <input
          type="number"
          placeholder="Room..."
          className="reservation__roomsGuest__input"
        ></input>
      </div>

      {/* Completed: Customer amount */}
      <div className="reservation__customer">
        <div>
          <p>ROOMS1 </p>
        </div>
        <div>
          <p>ADULT</p>
          <Selects customer={true} />
        </div>
        <div>
          <p>CHIRLD</p>
          <Selects customer={true} />
        </div>
      </div>

      <div className="reservation__check">
        <button>CHECK AVAILABLE</button>
      </div>
    </div>
  );
};
