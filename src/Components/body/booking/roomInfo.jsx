import React from "react";
import { useSelector } from "react-redux";
import { BookingAccordion } from "./showPackage";

export const RoomInfo = () => {
  const roomInfo = useSelector((state) => state.RS_rooms.Rooms[0].roomType);

  return (
    <div className="roomInfo">
      {roomInfo.map((item, index) => (
        <React.Fragment key={index}>
          <h4 className="roomInfo__title">{item.type.toUpperCase()} ROOM</h4>

          <div className="roomInfo__info">
            <div className="roomInfo__info__image">
              <img
                src={require(`../../../Assets/${item.image}`)}
                alt={item.type}
              ></img>
            </div>

            <div className="roomInfo__info__content">
              <p
                className="roomInfo__info__content__main"
                dangerouslySetInnerHTML={{ __html: item.introduction }}
              ></p>

              <ul>
                <li>1 King Bed</li>
                <li>Free Wi-Fi in all guest rooms</li>
                <li>Separate sitting area</li>
              </ul>

              <p className="roomInfo__info__content__viewMore">
                View More Infomation
              </p>

              <p className="roomInfo__info__content__price">
                <b>{item.price}</b> / days
              </p>
            </div>
          </div>

          <BookingAccordion item={item} />
        </React.Fragment>
      ))}
    </div>
  );
};
