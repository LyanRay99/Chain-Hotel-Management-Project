import { createSlice } from "@reduxjs/toolkit";
import termData from "../../Data/term.json";

const initialState = {
  term: termData,
};

const R_term = createSlice({
  name: "term",
  initialState,
  reducers: {},
});

// export const { showState } = R_slider.actions;

export default R_term.reducer;
