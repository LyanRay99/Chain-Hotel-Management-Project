import { createSlice } from "@reduxjs/toolkit";
import roomsData from "../../Data/list_room.json";
import bookingData from "../../Data/list_booking.json";
import { toast } from "react-toastify";

//*  Custom Notify
const notify_InfoNotEnough = () =>
  toast.warn(`🦄 Info Not Enough!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notify_Invalid = () =>
  toast.error(`🚫 Invalid information!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notify_NotEmptyRoom = () =>
  toast.info(
    `This room is currently sold out. Please choose a different room type!`,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );

const notify_SuccessBooking = () =>
  toast.success(`🤝 You have successfully booked your room!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//* Function check date arrive & date depature (có hợp lệ ko)
function checkDate(date1, date2) {
  return date1 < date2;
}

const initialState = {
  //* List Rooms of hotel
  Rooms: roomsData,

  //* Various used change state in UI
  roomDetail: {
    roomDetailInfo: 0,
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

  //* List customer book room
  booking: bookingData,

  //* Various save value used to check booking
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
      adult: "",
      child: "",
    },
  },

  // * Various to check condition booking
  checkRooms: {
    checkInfoEnough: "",
    checkInvalidData: "",
    checkBranch: {
      status: "",
      index: "",
    },
    checkRoomType: {
      status: "",
      index: "",
    },
    checkRoomKind: {
      status: "",
      index: "",
    },
    checkRoomAmount: "",
    countRooms: "",
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
      //* I - Check đủ thông tin và các thông tin đều hợp lệ
      //* Completed: 1 - check info enough ?
      if (
        state.checkAvailable.branchValue === "" ||
        state.checkAvailable.time.arrive === "" ||
        state.checkAvailable.time.depature === "" ||
        state.checkAvailable.roomType.type === "" ||
        state.checkAvailable.roomType.kind === "" ||
        state.checkAvailable.roomAmount === "" ||
        state.checkAvailable.roomAmount == false ||
        state.checkAvailable.customer.adult === "" ||
        state.checkAvailable.customer.child === ""
      ) {
        notify_InfoNotEnough();
        state.checkRooms.checkInfoEnough = "";
      } else {
        state.checkRooms.checkInfoEnough = true;
      }

      //* Completed: 2 - Check date arrive và depature có hợp lệ không ?
      if (state.checkRooms.checkInfoEnough) {
        if (
          checkDate(
            state.checkAvailable.time.depature,
            state.checkAvailable.time.arrive
          )
        ) {
          notify_Invalid();
          state.checkRooms.checkInvalidData = "";
        } else {
          state.checkRooms.checkInvalidData = true;
        }
      }

      //* II - Kiểm tra info trong hệ thống hotel có branch, room type, room kind mà khách cần ko
      //* Completed: 3 - Check branch (actived ?)
      if (state.checkRooms.checkInvalidData) {
        state.Rooms.map((branch, index) => {
          if (
            branch.nameBranchVN === state.checkAvailable.branchValue &&
            branch.actived
          ) {
            console.log("branch ok");
            state.checkRooms.checkBranch = {
              status: true,
              index: index,
            };
          } else {
            console.log("branch no active");
          }
        });
      }

      //* Completed: 4 - check roomtype (actived ?)
      if (state.checkRooms.checkBranch.status) {
        state.Rooms[state.checkRooms.checkBranch.index].roomType.map(
          (roomType, index) => {
            if (
              roomType.type === state.checkAvailable.roomType.type &&
              roomType.actived
            ) {
              console.log("roomType ok");
              state.checkRooms.checkRoomType = {
                status: true,
                index: index,
              };
            } else {
              console.log("roomType no active");
            }
          }
        );
      }

      //* Completed: 5 - check roomKind (actived ?)
      if (state.checkRooms.checkRoomType.status) {
        state.Rooms[state.checkRooms.checkBranch.index].roomType[
          state.checkRooms.checkRoomType.index
        ].typeR.map((roomKind, index) => {
          if (
            roomKind.name === state.checkAvailable.roomType.kind &&
            roomKind.actived
          ) {
            console.log("roomKind ok");
            state.checkRooms.checkRoomKind = {
              status: true,
              index: index,
            };
          } else {
            console.log("roomKind no active");
          }
        });
      }

      //* Completed: Show notify Not Empty Room + notify booking success + Reset state of CheckRooms
      if (state.checkRooms.checkInvalidData) {
        if (
          state.checkRooms.checkBranch.status === "" ||
          state.checkRooms.checkRoomType.status === "" ||
          state.checkRooms.checkRoomKind.status === ""
        ) {
          notify_NotEmptyRoom();
        }
      }

      if (state.checkRooms.checkRoomAmount) {
        notify_SuccessBooking();
      }

      //* Completed: 6 - check room amount (đủ ?)
      if (state.checkRooms.checkRoomKind.status) {
        if (
          state.Rooms[state.checkRooms.checkBranch.index].roomType[
            state.checkRooms.checkRoomType.index
          ].typeR[state.checkRooms.checkRoomKind.index].emptyRooms >=
          state.checkAvailable.roomAmount
        ) {
          console.log("room amount ok");
          state.checkRooms.checkRoomAmount = true;
        } else {
          console.log("ko còn phòng trống");
          state.checkRooms.checkRoomAmount = false;
        }
      }

      // TODO: 7 - check date
      if (state.checkRooms.checkRoomAmount === false) {
        state.booking.countRooms = 0;

        state.booking.map((item, index) => {
          if (
            item.nameBranchVN === state.checkAvailable.branchValue &&
            item.roomType === state.checkAvailable.roomType.type &&
            item.typeR === state.checkAvailable.roomType.kind
          ) {
            if (
              checkDate(
                state.checkAvailable.time.arrive,
                item.checkIn.slice(6, 16)
              )
            ) {
              if (
                checkDate(
                  state.checkAvailable.time.depature,
                  item.checkIn.slice(6, 16)
                )
              ) {
                console.log("CON PHONG");
                state.checkRooms.countRooms++;
              } else {
                console.log("HET PHONG");
              }
            } else {
              if (
                checkDate(
                  state.checkAvailable.time.arrive,
                  item.checkOut.slice(6, 16)
                )
              ) {
                console.log("HET PHONG");
              } else {
                console.log("CON PHONG");
                state.checkRooms.countRooms++;
              }
            }
          }
        });
      }

      //* Check final
      if (state.booking.countRooms !== "") {
        if (state.booking.countRooms >= state.checkAvailable.roomAmount) {
          notify_SuccessBooking();
        } else {
          notify_NotEmptyRoom();
        }
      }

      state.checkRooms = {
        checkInfoEnough: "",
        checkInvalidData: "",
        checkBranch: {
          status: "",
          index: "",
        },
        checkRoomType: {
          status: "",
          index: "",
        },
        checkRoomKind: {
          status: "",
          index: "",
        },
        checkRoomAmount: "",
        countRooms: "",
      };
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
