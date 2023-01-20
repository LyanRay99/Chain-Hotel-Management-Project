import { createSlice } from "@reduxjs/toolkit";
import newAndEventData from "../../Data/new&Event.json";

const initialState = {
  newsEvent: newAndEventData,
};

const R_newsEvent = createSlice({
  name: "News & Events",
  initialState,
  reducers: {},
});

export default R_newsEvent.reducer;
