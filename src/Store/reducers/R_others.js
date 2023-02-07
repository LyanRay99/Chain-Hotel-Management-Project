import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success(
    "Welcome to PANORAMA",
    {
      icon: "🚀",
    },
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};

const initialState = {
  others: {
    welcomeNotify: false,
    welcomeNotify2: false,
  },

  userContact: {
    name: "",
    email: "",
    title: "",
    content: "",
  },
};

const R_others = createSlice({
  name: "others",
  initialState,
  reducers: {
    //* Completed: Set render welcome notify once (when load from home page)
    //* Khi từ page khác quay lại page home thì nó ko hiển thị nữa
    WELCOME_NOTIFY: (state) => {
      if (state.others.welcomeNotify === false) {
        state.others.welcomeNotify = true;
      } else {
        if (state.others.welcomeNotify2 === false) {
          notify();
          state.others.welcomeNotify2 = true;
        }
      }
    },

    //* Completed: Get info Contact
    GET_INFO_CONTACT: (state, actions) => {
      actions.payload.name === "name"
        ? (state.userContact.name = actions.payload.value)
        : actions.payload.name === "email"
        ? (state.userContact.email = actions.payload.value)
        : actions.payload.name === "title"
        ? (state.userContact.title = actions.payload.value)
        : (state.userContact.content = actions.payload.value);
    },

    //* Completed: Reset state userContact
    RESET_CONTACT: (state, actions) => {
      state.userContact = {
        name: "",
        email: "",
        title: "",
        content: "",
      };
    },
  },
});

export const { WELCOME_NOTIFY, GET_INFO_CONTACT, RESET_CONTACT } =
  R_others.actions;

export default R_others.reducer;
