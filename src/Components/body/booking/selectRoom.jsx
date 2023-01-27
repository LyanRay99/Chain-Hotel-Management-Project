import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
  GET_PRICE,
} from "../../../Store/reducers/R_rooms";
import { goTop } from "../../../Components/support/goTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SelectRoom = (props) => {
  const chooseRoomInfo = useSelector((state) => state.RS_rooms);
  const dispatch = useDispatch();

  //* Get price in data
  const getPricePerRoom = useSelector((state) => state.RS_rooms.roomPrice);

  //* State to show notify Book Success
  const changeUIConfirm = useSelector(
    (state) => state.RS_rooms.changeUIConfirm
  );

  return (
    <div className="reservation selectRoom">
      {props.name === "MakeAReservation" || props.name === "Confirmation" ? (
        <React.Fragment>
          {props.name === "Confirmation" ? (
            <h6 className="reservation__title">CONFIRM</h6>
          ) : (
            <h6 className="reservation__title">SELECT ROOMS</h6>
          )}

          <div className="selectRoom__total">
            <div className="selectRoom__total__rooms">
              <div>
                <p>ROOM TYPE</p>
                <p>
                  {chooseRoomInfo.checkAvailable.roomType.type.toUpperCase()}{" "}
                  ROOM
                </p>
              </div>

              <div>
                <p>ROOM KIND</p>
                <p>
                  {chooseRoomInfo.checkAvailable.roomType.kind.toUpperCase()}
                </p>
              </div>

              <div>
                <p>AMOUNT</p>
                <p>{chooseRoomInfo.checkAvailable.roomAmount}</p>
              </div>

              <div>
                <p>PER ROOM</p>
                <p>
                  {chooseRoomInfo.checkAvailable.customer.adult} Adult,{" "}
                  {chooseRoomInfo.checkAvailable.customer.child} Child
                </p>
              </div>

              <div>
                <p>PRICE PER ROOM</p>
                <p className="roomPrice">${getPricePerRoom.perRoom}.00</p>
              </div>
            </div>

            {props.name === "Confirmation" ? (
              <React.Fragment>
                <div className="selectRoom__roomInfo selectRoomTotal">
                  <p className="selectRoom__roomInfo__total">TOTAL</p>
                  <p className="selectRoom__roomInfo__price">
                    ${getPricePerRoom.total}.00
                  </p>
                </div>

                <div className="selectRoom__roomInfo">
                  <button
                    onClick={() => {
                      dispatch(CHANGEBOOKINGSTEP(2));
                      dispatch(CHANGEBOOKINGSTYLE(2));
                      goTop();
                    }}
                  >
                    Previous
                  </button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="selectRoom__roomInfo">
                  <button
                    onClick={() => {
                      dispatch(CHANGEBOOKINGSTEP(1));
                      dispatch(CHANGEBOOKINGSTYLE(1));
                      goTop();
                    }}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      dispatch(CHANGEBOOKINGSTEP(3));
                      dispatch(CHANGEBOOKINGSTYLE(3));
                      goTop();
                    }}
                  >
                    Next
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h6 className="reservation__title">SELECT ROOMS</h6>

          <div>
            <div className="selectRoom__selected">
              <h6>
                YOU ARE BOOKING {chooseRoomInfo.checkAvailable.roomAmount} ROOM
              </h6>
              <p>
                Per Room: {chooseRoomInfo.checkAvailable.customer.adult} Adult,{" "}
                {chooseRoomInfo.checkAvailable.customer.child} Chirld
              </p>
            </div>

            <div className="selectRoom__roomInfo">
              <button
                onClick={() => {
                  dispatch(CHANGEBOOKINGSTEP(0));
                  dispatch(CHANGEBOOKINGSTYLE(0));
                  goTop();
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  dispatch(CHANGEBOOKINGSTEP(2));
                  dispatch(CHANGEBOOKINGSTYLE(2));
                  dispatch(GET_PRICE());
                  goTop();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </React.Fragment>
      )}

      {/* Completed: Render ra ToastContainer khi thiếu info booking (và để tránh trùng ToastContainer tại Home Page ) */}
      {changeUIConfirm === true ? (
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
