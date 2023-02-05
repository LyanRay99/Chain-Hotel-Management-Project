import React from "react";
import LazyLoad from "react-lazy-load";

export const RoomsImage = (props) => {
  return (
    <div className="rooms__image">
      <LazyLoad once={true}>
        <img
          src={require(`../../../../Assets/${props.item.image}`)}
          alt="abc"
        ></img>
      </LazyLoad>
    </div>
  );
};
