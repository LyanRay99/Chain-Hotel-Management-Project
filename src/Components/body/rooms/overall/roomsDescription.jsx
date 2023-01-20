import React from "react";
import { Link } from "react-router-dom";
import { goTop } from "../../../support/goTop";

export const RoomsDescription = (props) => {
  return (
    <div className="rooms__introduction">
      <h2 className="rooms__introduction__title">
        {props.item.type.toUpperCase()} ROOM
      </h2>

      <p className="rooms__introduction__price">
        START FORM {props.item.price} PER DAY
      </p>
      <p
        className="rooms__introduction__content"
        dangerouslySetInnerHTML={{ __html: props.item.introduction }}
      ></p>

      {props.index !== undefined ? (
        <Link to={`/rooms-details/${props.index}`} onClick={goTop}>
          <button>VIEW DETAILS</button>
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
};
