import { createSlice } from "@reduxjs/toolkit";
import newAndEventname from "../../Data/new&Event.json";

const initialState = {
  //* name json News & Event
  newsEvent: newAndEventname,

  //* State for feature Comment (at News&Event Detail Page)
  comment: {
    name: "",
    email: "",
    title: "",
    content: "",
  },

  modalReply: false,

  //* State Invalid
  invalid: {
    name: false,
    email: false,
    title: false,
    content: false,
  },
};

const R_newsEvent = createSlice({
  name: "News & Events",
  initialState,
  reducers: {
    //* Completed: Get info comment
    GET_INFO_COMMENT: (state, actions) => {
      actions.payload.name === "name"
        ? (state.comment.name = actions.payload.value)
        : actions.payload.name === "email"
        ? (state.comment.email = actions.payload.value)
        : actions.payload.name === "title"
        ? (state.comment.title = actions.payload.value)
        : (state.comment.content = actions.payload.value);
    },

    //* Completed: Show/Hide Modal
    HANDLE_MODAL: (state, actions) => {
      if (actions.payload.handle === "open") {
        state.modalReply = true;
      } else {
        state.modalReply = false;
      }
    },

    //* Completed: Add Comment
    COMMENT: (state, actions) => {
      //* Check state.comment rỗng
      var checkEmpty = true;
      for (const key in state.comment) {
        if (state.comment[key] === "") {
          checkEmpty = false;
          // console.log(false);
        }
      }

      if (checkEmpty) {
        //* Create Date
        var today = new Date();
        var day = String(today.getDate()).padStart(2, "0");
        var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var year = today.getFullYear();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        today = `${hour}h${minutes} - ${day}/${month}/${year}`;

        //* Create Object
        var objComment = {
          name: state.comment.name,
          avatar: "",
          title: state.comment.title,
          content: state.comment.content,
          time: today,
          email: state.comment.email,
          reply: [],
        };

        //* Push into comment array
        state.newsEvent.news_recent[actions.payload.index].comment.push(
          objComment
        );

        //* Reset state Comment
        state.comment = {
          name: "",
          email: "",
          title: "",
          content: "",
        };
      } else {
        alert("Vui lòng nhập đủ thông tin");
      }
    },

    //* Completed: Add Reply Comment
    REPLY_COMMENT: (state, actions) => {
      //* Check state.comment rỗng
      var checkEmpty = true;
      for (const key in state.comment) {
        if (state.comment[key] === "") {
          checkEmpty = false;
        }
      }

      if (checkEmpty) {
        //* Create Date
        var today = new Date();
        var day = String(today.getDate()).padStart(2, "0");
        var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var year = today.getFullYear();
        var hour = today.getHours();
        var minutes = today.getMinutes();
        today = `${hour}h${minutes} - ${day}/${month}/${year}`;

        //* Create Object
        var objComment = {
          name: state.comment.name,
          avatar: "",
          title: state.comment.title,
          content: state.comment.content,
          time: today,
          email: state.comment.email,
        };

        //* Push into comment array
        console.log(actions.payload.index);
        console.log(actions.payload.indexComment);
        state.newsEvent.news_recent[actions.payload.index].comment[
          actions.payload.indexComment
        ].reply.push(objComment);

        //* Close Modal
        state.modalReply = false;

        //* Reset state checkEmpty
        checkEmpty = true;

        //* Reset state Comment
        state.comment = {
          name: "",
          email: "",
          title: "",
          content: "",
        };

        //* Reset Invalid
        state.invalid = {
          name: false,
          email: false,
          title: false,
          content: false,
        };
      } else {
        //* Reset Invalid
        state.invalid = {
          name: false,
          email: false,
          title: false,
          content: false,
        };

        //* Check invalid for Reply comment
        for (const key in state.comment) {
          if (state.comment[key] === "") {
            state.invalid[key] = true;
          }
        }

        //* Reset state checkEmpty
        checkEmpty = true;
      }
    },

    //* Reset Comment state after click Close Modal
    RESET_COMMENT: (state, actions) => {
      //* Reset state Comment
      state.comment = {
        name: "",
        email: "",
        title: "",
        content: "",
      };

      //* Reset Invalid
      state.invalid = {
        name: false,
        email: false,
        title: false,
        content: false,
      };
    },
  },
});

export const {
  GET_INFO_COMMENT,
  COMMENT,
  REPLY_COMMENT,
  RESET_COMMENT,
  HANDLE_MODAL,
} = R_newsEvent.actions;
export default R_newsEvent.reducer;
