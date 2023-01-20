import { createSlice } from "@reduxjs/toolkit";
import faqsData from "../../Data/faqs.json";

const initialState = {
  faqs: faqsData,
};

const R_faqs = createSlice({
  name: "faqs",
  initialState,
  reducers: {},
});

// export const { showState } = R_slider.actions;

export default R_faqs.reducer;
