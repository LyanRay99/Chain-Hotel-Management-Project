//* Library
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHECK_AVAILABLE, GET_INFO } from "../../../Store/reducers/R_rooms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* Components UI
import { Selects } from "./select";
import { SelectBranch } from "./selects/select_branch";
import { SelectRoomType } from "./selects/select_roomType";
import { SelectRoomKind } from "./selects/select_roomKind";
import { SelectAdultAmount } from "./selects/select_adultAmount";
import { SelectChildAmount } from "./selects/select_childAmount";

export const Reservation = () => {
  const dispatch = useDispatch();

  //* Completed: Get data from Store to binding data
  const branchName = useSelector((state) => state.RS_rooms.Rooms);
  const roomType = useSelector((state) => state.RS_rooms.Rooms[0].roomType);
  const roomTypes = useSelector(
    (state) => state.RS_rooms.Rooms[0].roomType[0].typeR
  );
  const CheckAvailable = useSelector(
    (state) => state.RS_rooms.checkAvailable.roomAmount
  );

  //* Completed: Prevent User input negative number in Input (type: number)
  const blockInvalidChar = (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

  //* Completed: Get info Room Amount (type: number)
  const getInfo = (e) => {
    dispatch(GET_INFO({ value: e.target.value, name: e.target.name }));
    // console.log(e.target.name);
    // console.log(e.target.value);
  };

  //* Completed: Notify when info not enough
  const [infoNotEnough, setInfoNotEnough] = useState(false);

  const changeNotifyWarn = () => {
    setInfoNotEnough(true);
  };

  //* Test: Check state available
  // const check = useSelector((state) => state.RS_rooms.checkAvailable);
  // useEffect(() => {
  //   console.log(check);
  // }, [check]);

  return (
    <div className="reservation">
      <h6 className="reservation__title">YOUR RESERVATION</h6>

      {/* Completed: Branch */}
      <div className="reservation__branch">
        <span>BRANCH</span>
        {/* <Selects branchName={branchName} /> */}
        <SelectBranch branchName={branchName} />
      </div>

      {/* Completed: Time */}
      <div className="reservation__dates">
        <span>YOUR STAY DATES</span>
        <p>ARRIVE</p>
        {/* datetime picker */}
        <input
          type="date"
          name="arrive"
          placeholder="Arrive date..."
          onChange={getInfo}
        ></input>

        <p>DEPATURE</p>
        {/*  datetime picker */}
        <input
          type="date"
          name="depature"
          placeholder="Depature date..."
          onChange={getInfo}
        ></input>
      </div>

      {/* Completed: Rooms type */}
      <div className="reservation__roomType">
        <span>ROOMS TYPE</span>
        <p>Type</p>
        {/* <Selects roomType={roomType} /> */}
        <SelectRoomType roomType={roomType} />
        <br />
        {/* <Selects roomTypes={roomTypes} /> */}
        <SelectRoomKind roomTypes={roomTypes} />
      </div>

      {/* Completed: Room amount */}
      <div className="reservation__roomsGuest">
        <span>ROOMS & GUEST</span>
        <p>ROOMS</p>
        <input
          type="number"
          placeholder="Room..."
          name="amountRoom"
          className="reservation__roomsGuest__input"
          min={1}
          value={CheckAvailable.amountRoom}
          onKeyDown={blockInvalidChar}
          onChange={getInfo}
        ></input>
      </div>

      {/* Completed: Customer amount */}
      <div className="reservation__customer">
        <div>
          <p>AVERAGE</p>
          <p>PER ROOM</p>
        </div>
        <div>
          <p>ADULT</p>
          {/* <Selects customer={true} /> */}
          <SelectAdultAmount />
        </div>
        <div>
          <p>CHIRLD</p>
          {/* <Selects customer={true} /> */}
          <SelectChildAmount />
        </div>
      </div>

      {/* Completed: Phone Number */}
      <div className="reservation__roomsGuest ">
        <span>PHONE NUMBER</span>
        <input
          type="number"
          placeholder="Phone Number..."
          name="phoneNumber"
          className="reservation__roomsGuest__input"
          value={CheckAvailable.phoneNumber}
          onKeyDown={blockInvalidChar}
          onChange={getInfo}
        ></input>
      </div>

      <div className="reservation__roomsGuest ">
        <span>EMAIL</span>
        <input
          type="email"
          placeholder="Email..."
          name="email"
          className="reservation__roomsGuest__input"
          value={CheckAvailable.email}
          onChange={getInfo}
        ></input>
      </div>

      <div className="reservation__check">
        <button
          onClick={() => {
            dispatch(CHECK_AVAILABLE());
            changeNotifyWarn();
          }}
        >
          CHECK AVAILABLE
        </button>
      </div>

      {/* Completed: Render ra ToastContainer khi thi???u info booking (v?? ????? tr??nh tr??ng ToastContainer t???i Home Page ) */}
      {infoNotEnough === true ? (
        <div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
