import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_INFO_COMMENT, COMMENT } from "../../../Store/reducers/R_newsEvent";

export const ContactFeedback = (props) => {
  const comment = useSelector((state) => state.RS_newsEvent.comment);
  const dispatch = useDispatch();

  return (
    <div className="contact__feedback details__submitCommet">
      {props.title === "leave_a_Comment" ? (
        <h6 className="details__submitCommet__title">LEAVE A COMMENT</h6>
      ) : (
        <span></span>
      )}
      <div className="contact__feedback__account">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={comment.name}
          onChange={(e) =>
            dispatch(
              GET_INFO_COMMENT({ value: e.target.value, name: e.target.name })
            )
          }
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={comment.email}
          onChange={(e) =>
            dispatch(
              GET_INFO_COMMENT({ value: e.target.value, name: e.target.name })
            )
          }
        ></input>
      </div>

      <div className="contact__feedback__subject">
        <input
          type="text"
          placeholder="Subject"
          name="title"
          value={comment.title}
          onChange={(e) =>
            dispatch(
              GET_INFO_COMMENT({ value: e.target.value, name: e.target.name })
            )
          }
        ></input>
      </div>

      <div className="contact__feedback__content">
        <textarea
          placeholder="Write what do you want!"
          name="content"
          value={comment.content}
          onChange={(e) =>
            dispatch(
              GET_INFO_COMMENT({ value: e.target.value, name: e.target.name })
            )
          }
        ></textarea>
      </div>

      {props.title === "leave_a_Comment" ? (
        <button
          className="contact__feedback__send"
          onClick={() => dispatch(COMMENT({ index: props.index }))}
        >
          SUBMIT
        </button>
      ) : (
        <button className="contact__feedback__send">SEND</button>
      )}
    </div>
  );
};
