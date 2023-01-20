import React from "react";
import { useSelector } from "react-redux";

export const OurEvent = () => {
  const eventCard = useSelector(
    (state) => state.RS_newsEvent.newsEvent.events_home
  );

  return (
    <div className="ourRooms">
      <h2 className="ourRooms__title">Our Event</h2>
      <p className="ourRooms__content">
        You can enjoy special events at our hotel chain!
      </p>

      <div className="ourEvent">
        {eventCard.map((item, index) => (
          <div className="ourEvent__box" key={index}>
            <div className="ourEvent__box__image">
              <img
                src={require(`../../../Assets/${item.image}`)}
                alt={item.name}
              ></img>
            </div>

            <div className="ourEvent__box__name">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
