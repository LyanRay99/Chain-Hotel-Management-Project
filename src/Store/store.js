import { configureStore } from "@reduxjs/toolkit";
import R_slider from "./reducers/R_slider";
import R_rooms from "./reducers/R_rooms";
import R_aboutUs from "./reducers/R_aboutUs";
import R_customerCmt from "./reducers/R_customerCmt";
import R_newsEvent from "./reducers/R_newsEvent";

export const store = configureStore({
  reducer: {
    RS_slider: R_slider,
    RS_rooms: R_rooms,
    RS_aboutUs: R_aboutUs,
    RS_customerCmt: R_customerCmt,
    RS_newsEvent: R_newsEvent,
  },
});
