//* Library
import React from "react";
import { Zoom } from "react-awesome-reveal";

//* Store in Redux
// import {
//   CHANGEBOOKINGSTEP,
//   CHANGEBOOKINGSTYLE,
// } from "../../Store/reducers/R_rooms";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";
import { ChooseDate } from "../../Components/body/booking/details/chooseDate";
import { ChooseRoom } from "../../Components/body/booking/details/chooseRoom";
import { MakeAReservation } from "../../Components/body/booking/details/makeAReservation";
import { Confirmation } from "../../Components/body/booking/details/confirmation";

//* Icon
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

//* Title
import { Title_Booking } from "../../Store/title";

const Booking = () => {
  document.title = Title_Booking;

  const bookingStep = useSelector(
    (state) => state.RS_rooms.bookingControl.bookingStep
  );

  const bookingStyle = useSelector(
    (state) => state.RS_rooms.bookingControl.bookingStyle
  );

  // const dispatch = useDispatch();

  return (
    <>
      <SupSlider supSlider="BOOKING" />

      <Zoom triggerOnce={true}>
        <section className="section">
          <div className="booking">
            <div className="booking__control">
              {/* PREVIOUS */}
              {/* <div
              onClick={() => {
                dispatch(CHANGESTEP({ bookingStep, type: "previous" }));
                dispatch(CHANGEBOOKINGSTYLE(bookingStep - 1));
              }}
            >
              <FontAwesomeIcon icon={faCaretLeft} className="icon" />
            </div> */}

              <div
                className={bookingStyle.chooseDate}
                // onClick={() => {
                //   dispatch(CHANGEBOOKINGSTEP(0));
                //   dispatch(CHANGEBOOKINGSTYLE(0));
                // }}
              >
                <b>1.</b> Choose Date
                <span></span>
              </div>

              <div
                className={bookingStyle.chooseRoom}
                // onClick={() => {
                //   dispatch(CHANGEBOOKINGSTEP(1));
                //   dispatch(CHANGEBOOKINGSTYLE(1));
                // }}
              >
                <b>2.</b> Choose Room
                <span></span>
              </div>

              <div
                className={bookingStyle.reservation}
                // onClick={() => {
                //   dispatch(CHANGEBOOKINGSTEP(2));
                //   dispatch(CHANGEBOOKINGSTYLE(2));
                // }}
              >
                <b>3.</b> Make a Reservation
                <span></span>
              </div>

              <div
                className={bookingStyle.confirmation}
                // onClick={() => {
                //   dispatch(CHANGEBOOKINGSTEP(3));
                //   dispatch(CHANGEBOOKINGSTYLE(3));
                // }}
              >
                <b>4.</b> Confirmation
                <span></span>
              </div>

              {/* NEXT  */}
              {/*<div
              onClick={() => {
                dispatch(CHANGESTEP({ bookingStep, type: "next" }));
                dispatch(CHANGEBOOKINGSTYLE(bookingStep + 1));
              }}
            >
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </div> */}
            </div>

            <div className="booking__body">
              {bookingStep === 0 ? (
                <ChooseDate />
              ) : bookingStep === 1 ? (
                <ChooseRoom />
              ) : bookingStep === 2 ? (
                <MakeAReservation />
              ) : (
                <Confirmation />
              )}
            </div>
          </div>
        </section>
      </Zoom>
    </>
  );
};

export default Booking;
