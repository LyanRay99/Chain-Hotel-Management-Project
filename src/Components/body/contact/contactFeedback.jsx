import React from "react";

export const ContactFeedback = (props) => {
  return (
    <div className="contact__feedback details__submitCommet">
      {props.title === "leave_a_Comment" ? (
        <h6 className="details__submitCommet__title">LEAVE A COMMENT</h6>
      ) : (
        <span></span>
      )}
      <div className="contact__feedback__account">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
      </div>

      <div className="contact__feedback__subject">
        <input type="text" placeholder="Subject"></input>
      </div>

      <div className="contact__feedback__content">
        <textarea placeholder="Write what do you want!"></textarea>
      </div>

      {props.title === "leave_a_Comment" ? (
        <button className="contact__feedback__send">SUBMIT</button>
      ) : (
        <button className="contact__feedback__send">SEND</button>
      )}
    </div>
  );
};
