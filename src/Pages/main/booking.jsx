//* Library
import React, { useState, useEffect } from "react";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";
import { ChooseDate } from "../../Components/body/booking/details/chooseDate";
import { ChooseRoom } from "../../Components/body/booking/details/chooseRoom";
import { MakeAReservation } from "../../Components/body/booking/details/makeAReservation";
import { Confirmation } from "../../Components/body/booking/details/confirmation";

//* Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const Booking = () => {
  const [booking, setBooking] = useState(0);
  const [bookingStyle, setBookingStyle] = useState({
    chooseDate: "",
    chooseRoom: "",
    reservation: "",
    confirmation: "",
  });

  const changeBooking = (index) => {
    index === 0
      ? setBooking(0)
      : index === 1
      ? setBooking(1)
      : index === 2
      ? setBooking(2)
      : setBooking(3);
  };

  const changeStyle = (index) => {
    index === 0
      ? setBookingStyle({
          chooseDate: "activeStyle",
          chooseRoom: "",
          reservation: "",
          confirmation: "",
        })
      : index === 1
      ? setBookingStyle({
          chooseDate: "",
          chooseRoom: "activeStyle",
          reservation: "",
          confirmation: "",
        })
      : index === 2
      ? setBookingStyle({
          chooseDate: "",
          chooseRoom: "",
          reservation: "activeStyle",
          confirmation: "",
        })
      : setBookingStyle({
          chooseDate: "",
          chooseRoom: "",
          reservation: "",
          confirmation: "activeStyle",
        });
  };

  useEffect(() => {
    changeStyle(0);
  }, []);

  const changeStep = (booking, step) => {
    if (step === "previous" && booking > 0) {
      setBooking((booking = booking - 1));
      changeStyle(booking);
    } else if (step === "next" && booking < 3) {
      setBooking((booking = booking + 1));
      changeStyle(booking);
    }
  };

  return (
    <>
      <SupSlider supSlider="BOOKING" />
      <section className="section">
        <div className="booking">
          <div className="booking__control">
            <div onClick={() => changeStep(booking, "previous")}>
              <FontAwesomeIcon icon={faCaretLeft} className="icon" />
            </div>
            <div
              className={bookingStyle.chooseDate}
              onClick={() => {
                changeBooking(0);
                changeStyle(0);
              }}
            >
              <b>1.</b> Choose Date
              <span></span>
            </div>
            <div
              className={bookingStyle.chooseRoom}
              onClick={() => {
                changeBooking(1);
                changeStyle(1);
              }}
            >
              <b>2.</b> Choose Room
              <span></span>
            </div>
            <div
              className={bookingStyle.reservation}
              onClick={() => {
                changeBooking(2);
                changeStyle(2);
              }}
            >
              <b>3.</b> Make a Reservation
              <span></span>
            </div>
            <div
              className={bookingStyle.confirmation}
              onClick={() => {
                changeBooking(3);
                changeStyle(3);
              }}
            >
              <b>4.</b> Confirmation
              <span></span>
            </div>
            <div onClick={() => changeStep(booking, "next")}>
              <FontAwesomeIcon icon={faCaretRight} className="icon" />
            </div>
          </div>

          <div className="booking__body">
            {booking === 0 ? (
              <ChooseDate />
            ) : booking === 1 ? (
              <ChooseRoom />
            ) : booking === 2 ? (
              <MakeAReservation />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
