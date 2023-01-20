import React from "react";

export const RoomsImage = (props) => {
  return (
    <div className="rooms__image">
      <img
        src={require(`../../../../Assets/${props.item.image}`)}
        alt="abc"
      ></img>
    </div>
  );
};
