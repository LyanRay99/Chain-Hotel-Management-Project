import { createSlice } from "@reduxjs/toolkit";
import careersData from "../../Data/careers.json";

const initialState = {
  careers: careersData,
};

const R_careers = createSlice({
  name: "careers",
  initialState,
  reducers: {},
});

// export const { showState } = R_slider.actions;

export default R_careers.reducer;
