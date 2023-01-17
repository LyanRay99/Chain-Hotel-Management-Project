import { createSlice } from "@reduxjs/toolkit";
import sliderData from "../../Data/slider.json";

const initialState = {
  slider: sliderData,
};

const R_slider = createSlice({
  name: "slider",
  initialState,
  reducers: {
    // showState: (state) => {
    //   console.log(state.slider);
    // },
  },
});

// export const { showState } = R_slider.actions;

export default R_slider.reducer;
