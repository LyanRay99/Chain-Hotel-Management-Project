//* Library
import React from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

//* Redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { GET_INFO_COMMENT, COMMENT } from "../../../Store/reducers/R_newsEvent";
import {
  GET_INFO_CONTACT,
  RESET_CONTACT,
} from "../../../Store/reducers/R_others";

export const ContactFeedback = (props) => {
  const dispatch = useDispatch();

  //* Completed: Data feature Comment
  const comment = useSelector((state) => state.RS_newsEvent.comment);

  //* Completed: Data user Contact
  const contact = useSelector((state) => state.RS_others.userContact);

  //* Completed: Send mail contact (gửi các nội dung mà user cần giải đáp đến email chủ web)
  const sendEmail = () => {
    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.title === "" ||
      contact.contact === ""
    ) {
      notifySendEmail("Send Unsuccessfull");
    } else {
      emailjs
        .send(
          "service_vmwvpht",
          "template_jzv475v",
          contact,
          "2-XjEt7WMje811dRp"
        )
        .then(
          (result) => {
            console.log(result.text);
            notifySendEmail("Send Successfull");
          },
          (error) => {
            console.log(error.text);
          }
        );

      dispatch(RESET_CONTACT());
    }
  };

  //* Completed: Show notidy when send mail success
  const notifySendEmail = (title) => {
    toast.success(`🦄 ${title}!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <React.Fragment>
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
            value={
              props.title === "leave_a_Comment" ? comment.name : contact.name
            }
            onChange={(e) =>
              dispatch(
                props.title === "leave_a_Comment"
                  ? GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  : GET_INFO_CONTACT({
                      value: e.target.value,
                      name: e.target.name,
                    })
              )
            }
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={
              props.title === "leave_a_Comment" ? comment.email : contact.email
            }
            onChange={(e) =>
              dispatch(
                props.title === "leave_a_Comment"
                  ? GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  : GET_INFO_CONTACT({
                      value: e.target.value,
                      name: e.target.name,
                    })
              )
            }
          ></input>
        </div>

        <div className="contact__feedback__subject">
          <input
            type="text"
            placeholder="Subject"
            name="title"
            value={
              props.title === "leave_a_Comment" ? comment.title : contact.title
            }
            onChange={(e) =>
              dispatch(
                props.title === "leave_a_Comment"
                  ? GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  : GET_INFO_CONTACT({
                      value: e.target.value,
                      name: e.target.name,
                    })
              )
            }
          ></input>
        </div>

        <div className="contact__feedback__content">
          <textarea
            placeholder="Write what do you want!"
            name="content"
            value={
              props.title === "leave_a_Comment"
                ? comment.content
                : contact.content
            }
            onChange={(e) =>
              dispatch(
                props.title === "leave_a_Comment"
                  ? GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  : GET_INFO_CONTACT({
                      value: e.target.value,
                      name: e.target.name,
                    })
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
          <button
            className="contact__feedback__send"
            onClick={() => sendEmail()}
          >
            SEND
          </button>
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </React.Fragment>
  );
};
