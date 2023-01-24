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
  bookingControl: {
    bookingStep: 0,
    bookingStyle: {
      chooseDate: "activeStyle",
      chooseRoom: "",
      reservation: "",
      confirmation: "",
    },
  },
  checkAvailable: {
    branchValue: "",
    time: {
      arrive: "",
      depature: "",
    },
    roomType: {
      type: "",
      kind: "",
    },
    roomAmount: "",
    customer: {
      adult: 0,
      child: 0,
    },
  },
};

const R_rooms = createSlice({
  name: "room type",
  initialState,
  reducers: {
    //* Completed: Change state + style of Room Info in Room Detail Page
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

    //* Completed: Change state + style of Control Component in Booking Page
    CHANGEBOOKINGSTEP: (state, actions) => {
      actions.payload === 0
        ? (state.bookingControl.bookingStep = 0)
        : actions.payload === 1
        ? (state.bookingControl.bookingStep = 1)
        : actions.payload === 2
        ? (state.bookingControl.bookingStep = 2)
        : (state.bookingControl.bookingStep = 3);
    },
    CHANGEBOOKINGSTYLE: (state, actions) => {
      actions.payload === 0
        ? (state.bookingControl.bookingStyle = {
            chooseDate: "activeStyle",
            chooseRoom: "",
            reservation: "",
            confirmation: "",
          })
        : actions.payload === 1
        ? (state.bookingControl.bookingStyle = {
            chooseDate: "",
            chooseRoom: "activeStyle",
            reservation: "",
            confirmation: "",
          })
        : actions.payload === 2
        ? (state.bookingControl.bookingStyle = {
            chooseDate: "",
            chooseRoom: "",
            reservation: "activeStyle",
            confirmation: "",
          })
        : (state.bookingControl.bookingStyle = {
            chooseDate: "",
            chooseRoom: "",
            reservation: "",
            confirmation: "activeStyle",
          });
    },
    CHANGESTEP: (state, actions) => {
      actions.payload.type === "previous" && actions.payload.bookingStep > 0
        ? (state.bookingControl.bookingStep =
            state.bookingControl.bookingStep - 1)
        : actions.payload.type === "next" && actions.payload.bookingStep < 3
        ? (state.bookingControl.bookingStep =
            state.bookingControl.bookingStep + 1)
        : console.log("");
    },

    //* Completed: Get data from Reservation to booking
    GET_INFO: (state, actions) => {
      actions.payload.data === "branch"
        ? (state.checkAvailable.branchValue = actions.payload.choice.value)
        : actions.payload.data === "roomType"
        ? (state.checkAvailable.roomType.type = actions.payload.choice.value)
        : actions.payload.data === "roomKind"
        ? (state.checkAvailable.roomType.kind = actions.payload.choice.value)
        : actions.payload.data === "adultAmount"
        ? (state.checkAvailable.customer.adult = actions.payload.choice.value)
        : actions.payload.data === "childAmount"
        ? (state.checkAvailable.customer.child = actions.payload.choice.value)
        : actions.payload.name === "arrive"
        ? (state.checkAvailable.time.arrive = actions.payload.value)
        : actions.payload.name === "depature"
        ? (state.checkAvailable.time.depature = actions.payload.value)
        : (state.checkAvailable.roomAmount = actions.payload);
    },
    //* Completed: Check Available to booking
    CHECK_AVAILABLE: (state, actions) => {
      // TODO: check available
      console.log("ok");
    },
  },
});

export const {
  CHANGEROOMINFO,
  CHANGESTYLEINFO,
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
  CHANGESTEP,
  GET_INFO,
  CHECK_AVAILABLE,
} = R_rooms.actions;

export default R_rooms.reducer;

// GET_DATA_BOOKING: {

// },
