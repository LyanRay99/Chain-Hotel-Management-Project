import { createSlice } from "@reduxjs/toolkit";
import about_us_1 from "../../Assets/About Us/about-icon-1.png";
import about_us_2 from "../../Assets/About Us/about-icon-2.png";
import about_us_3 from "../../Assets/About Us/about-icon-3.png";
import about_us_4 from "../../Assets/About Us/about-icon-4.png";
import about_us_5 from "../../Assets/About Us/about-icon-5.png";
import about_us_6 from "../../Assets/About Us/about-icon-6.png";
import about_us_7 from "../../Assets/About Us/about-icon-7.png";
import about_us_8 from "../../Assets/About Us/about-icon-8.png";

const initialState = {
  aboutUs: [
    {
      name: "MASTER BEDROOMS",
      image: about_us_1,
    },
    {
      name: "SEA VIEW BALCONY",
      image: about_us_2,
    },
    {
      name: "POOL & SPA",
      image: about_us_3,
    },
    {
      name: "WIFI COVERAGE",
      image: about_us_4,
    },
    {
      name: "AWESOME PACKAGES",
      image: about_us_5,
    },
    {
      name: "CLEANING EVERDAY",
      image: about_us_6,
    },
    {
      name: "BUTFFET BREAKFAST",
      image: about_us_7,
    },
    {
      name: "AIRPORT TAXI",
      image: about_us_8,
    },
  ],
};

const R_aboutUs = createSlice({
  name: "About us",
  initialState,
  reducers: {},
});

export default R_aboutUs.reducer;
