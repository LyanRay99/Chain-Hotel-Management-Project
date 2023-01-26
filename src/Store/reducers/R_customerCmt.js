import { createSlice } from "@reduxjs/toolkit";
import customerRatesData from "../../Data/customer_rating.json";

const initialState = {
  customerCmt: customerRatesData,
};

const R_customerCmt = createSlice({
  name: "customer comment",
  initialState,
  reducers: {},
});

export default R_customerCmt.reducer;
