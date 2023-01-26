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
  },
});

export const { WELCOME_NOTIFY } = R_others.actions;

export default R_others.reducer;
