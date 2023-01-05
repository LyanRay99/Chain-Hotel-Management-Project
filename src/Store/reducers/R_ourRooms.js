import { createSlice } from "@reduxjs/toolkit";
import roomType1 from "../../Assets/Room type/rooms-1.jpg";
import roomType2 from "../../Assets/Room type/rooms-2.jpg";
import roomType3 from "../../Assets/Room type/rooms-3.jpg";
import roomType4 from "../../Assets/Room type/rooms-4.jpg";

const initialState = {
  ourRooms: [
    {
      name: "DELUXE ROOM",
      image: roomType1,
      price: "$320 / PER NIGHT",
    },
    {
      name: "VIP ROOM",
      image: roomType2,
      price: "$450 / PER NIGHT",
    },
    {
      name: "LUXURY ROOM",
      image: roomType3,
      price: "$600 / PER NIGHT",
    },
    {
      name: "FAMILY ROOM",
      image: roomType4,
      price: "$800 / PER NIGHT",
    },
  ],
};

const R_ourRooms = createSlice({
  name: "room type",
  initialState,
  reducers: {
    // showState: (state) => {
    //   console.log(state.ourRooms);
    // },
  },
});

// export const { showState } = R_roomType.actions;

export default R_ourRooms.reducer;
