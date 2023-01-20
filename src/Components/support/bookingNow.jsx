import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { goTop } from "./goTop";

export const BookingNow = () => {
  //* Completed: close + open Booking Now
  const [hideBKN, setHideBKN] = useState(true);

  const hideBookingNow = () => {
    setHideBKN(!hideBKN);
  };

  //* Completed: Set auto random color from Booking Now
  const [bgColor, setBgColor] = useState("rgb(0,0,0");

  const autoRandomColor = () => {
    const colorR = Math.floor(Math.random() * 256) + 120;
    const colorG = Math.floor(Math.random() * 256) + 120;
    const colorB = Math.floor(Math.random() * 256) + 120;
    return `rgb(${colorR}, ${colorG}, ${colorB})`;
  };

  useEffect(() => {
    setTimeout(() => {
      setBgColor(autoRandomColor());
    }, 500);
  }, [bgColor]);

  return (
    <div className="bookingNow">
      <div
        className="bookingNow__close"
        style={{
          display: hideBKN ? "inline" : "none",
        }}
      >
        <div
          className="bookingNow__close__star star1"
          style={{
            backgroundColor: bgColor,
          }}
        ></div>
        <div
          className="bookingNow__close__star star2"
          style={{
            backgroundColor: bgColor,
          }}
        ></div>
        <div
          className="bookingNow__close__star star3"
          style={{
            backgroundColor: bgColor,
          }}
        ></div>

        <div className="bookingNow__close__content">
          <Link to="bookings" onClick={goTop}>
            BOOKING
            <br />
            NOW
          </Link>
        </div>

        <span
          onClick={() => hideBookingNow()}
          style={{
            color: bgColor,
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </span>
      </div>

      <div
        className="bookingNow__open"
        style={{
          display: hideBKN ? "none" : "inline",
          backgroundColor: bgColor,
        }}
        onClick={() => hideBookingNow()}
      >
        <span>
          BOOKING
          <br />
          NOW
        </span>
      </div>
    </div>
  );
};
