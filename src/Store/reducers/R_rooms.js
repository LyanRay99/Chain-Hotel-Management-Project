import { createSlice } from "@reduxjs/toolkit";
import roomsData from "../../Data/list_room.json";

const initialState = {
  Rooms: roomsData,
  roomDetail: {
    roomDetailInfo: 2,
    roomInfoStyle: {
      Overview: "activeStyle",
      Amenities: "",
      Package: "",
    },
  },
  booking: {
    bookingStep: 1,
    bookingStyle: {
      chooseDate: "activeStyle",
      chooseRoom: "",
      reservation: "",
      confirmation: "",
    },
  },
};

const R_rooms = createSlice({
  name: "room type",
  initialState,
  reducers: {
    CHANGEROOMINFO: (state, actions) => {
      actions.payload === 0
        ? (state.roomDetail.roomDetailInfo = 0)
        : actions.payload === 1
        ? (state.roomDetail.roomDetailInfo = 1)
        : actions.payload === 2
        ? (state.roomDetail.roomDetailInfo = 2)
        : (state.roomDetailInfo = 3);
    },
    CHANGESTYLEINFO: (state, actions) => {
      actions.payload === 0
        ? (state.roomDetail.roomInfoStyle = {
            Overview: "activeStyle",
            Amenities: "",
            Package: "",
          })
        : actions.payload === 1
        ? (state.roomDetail.roomInfoStyle = {
            Overview: "",
            Amenities: "activeStyle",
            Package: "",
          })
        : (state.roomDetail.roomInfoStyle = {
            Overview: "",
            Amenities: "",
            Package: "activeStyle",
          });
    },
    CHANGEBOOKINGSTEP: (state, actions) => {
      actions.payload === 0
        ? (state.booking.bookingStep = 0)
        : actions.payload === 1
        ? (state.booking.bookingStep = 1)
        : actions.payload === 2
        ? (state.booking.bookingStep = 2)
        : (state.booking.bookingStep = 3);
    },
    CHANGEBOOKINGSTYLE: (state, actions) => {
      actions.payload === 0
        ? (state.booking.bookingStyle = {
            chooseDate: "activeStyle",
            chooseRoom: "",
            reservation: "",
            confirmation: "",
          })
        : actions.payload === 1
        ? (state.booking.bookingStyle = {
            chooseDate: "",
            chooseRoom: "activeStyle",
            reservation: "",
            confirmation: "",
          })
        : actions.payload === 2
        ? (state.booking.bookingStyle = {
            chooseDate: "",
            chooseRoom: "",
            reservation: "activeStyle",
            confirmation: "",
          })
        : (state.booking.bookingStyle = {
            chooseDate: "",
            chooseRoom: "",
            reservation: "",
            confirmation: "activeStyle",
          });
    },
    CHANGESTEP: (state, actions) => {
      actions.payload.type === "previous" && actions.payload.bookingStep > 0
        ? (state.booking.bookingStep = state.booking.bookingStep - 1)
        : actions.payload.type === "next" && actions.payload.bookingStep < 3
        ? (state.booking.bookingStep = state.booking.bookingStep + 1)
        : console.log("");
    },
  },
});

export const {
  CHANGEROOMINFO,
  CHANGESTYLEINFO,
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
  CHANGESTEP,
} = R_rooms.actions;

export default R_rooms.reducer;
