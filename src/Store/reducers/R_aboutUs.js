import { createSlice } from "@reduxjs/toolkit";
import aboutData from "../../Data/about.json";

const initialState = {
  aboutUs: aboutData,
};

const R_aboutUs = createSlice({
  name: "About us",
  initialState,
  reducers: {},
});

export default R_aboutUs.reducer;
