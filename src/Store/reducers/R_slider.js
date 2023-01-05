import { createSlice } from "@reduxjs/toolkit";
import slider1 from "../../Assets/Slider/image1.jpg";
import slider2 from "../../Assets/Slider/image2.jpg";
import slider3 from "../../Assets/Slider/image3.jpg";
import slider4 from "../../Assets/Slider/image4.jpg";

const initialState = {
  slider: [
    {
      name: "slide 1",
      image: slider1,
      content: "Wellcome to Panorama",
    },
    {
      name: "slide 2",
      image: slider2,
      content: "Enjoy a Luxury Experience",
    },
    {
      name: "slide 3",
      image: slider3,
      content: "Book Your Vacation",
    },
    {
      name: "slide 4",
      image: slider4,
      content: "Touch The Sea",
    },
  ],
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
