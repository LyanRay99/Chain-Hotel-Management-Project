import { createSlice } from "@reduxjs/toolkit";
import event1 from "../../Assets/Event/Our-Events-1.jpg";
import event2 from "../../Assets/Event/Our-Events-2.jpg";
import event3 from "../../Assets/Event/Our-Events-3.jpg";

const initialState = {
  event: [
    {
      name: "Beach Sports",
      image: event1,
    },
    {
      name: "Wedding Day",
      image: event2,
    },
    {
      name: "Golf Cup 2023",
      image: event3,
    },
  ],
};

const R_event = createSlice({
  name: "Event",
  initialState,
  reducers: {},
});

export default R_event.reducer;
