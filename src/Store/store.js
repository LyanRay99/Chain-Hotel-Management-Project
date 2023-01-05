import { configureStore } from "@reduxjs/toolkit";
import R_slider from "./reducers/R_slider";
import R_ourRooms from "./reducers/R_ourRooms";
import R_aboutUs from "./reducers/R_aboutUs";
import R_customerCmt from "./reducers/R_customerCmt";
import R_event from "./reducers/R_event";
import R_news from "./reducers/R_news";

export const store = configureStore({
  reducer: {
    RS_slider: R_slider,
    RS_ourRooms: R_ourRooms,
    RS_aboutUs: R_aboutUs,
    RS_customerCmt: R_customerCmt,
    RS_event: R_event,
    RS_news: R_news,
  },
});
