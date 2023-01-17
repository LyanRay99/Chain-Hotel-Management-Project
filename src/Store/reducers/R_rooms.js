import { createSlice } from "@reduxjs/toolkit";
import roomsData from "../../Data/list_room.json";

const initialState = {
  Rooms: roomsData,
};

const R_rooms = createSlice({
  name: "room type",
  initialState,
  reducers: {
    CHANGEROOMINFO: (state) => {
      console.log(state.ourRooms);
    },
  },
});

export const { CHANGEROOMINFO } = R_rooms.actions;

export default R_rooms.reducer;
