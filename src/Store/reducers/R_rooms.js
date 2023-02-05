import { createSlice } from "@reduxjs/toolkit";
import roomsData from "../../Data/list_room.json";
import bookingData from "../../Data/list_booking.json";
import { toast } from "react-toastify";
import { goTop } from "../../Components/support/goTop";

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
const checkDate = (date1, date2) => {
  return date1 < date2;
};

//* Function to convert VN => EN
const toNonAccentVietnamese = (str) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
};

const initialState = {
  //* List Rooms of hotel
  Rooms: roomsData,

  //* State used change state in UI Rooms Page
  roomDetail: {
    roomDetailInfo: 0,
    roomInfoStyle: {
      Overview: "activeStyle",
      Amenities: "",
      Package: "",
    },
  },

  //* State used change state in UI Booking Page
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

  //* State save value used to check booking
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
    phoneNumber: "",
    email: "",
  },

  // * State to check condition booking
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
    roomNumber: "",
  },

  //* Show price in bill
  roomPrice: {
    perRoom: 0,
    total: 0,
  },

  //* State used to change UI RoomDetail at Step 3
  roomDetailStep3: {
    index: "",
    item: "",
  },

  //* State used to change UI Confirm at Step 4
  changeUIConfirm: false,
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
        : actions.payload.name === "amountRoom"
        ? (state.checkAvailable.roomAmount = actions.payload.value)
        : actions.payload.name === "phoneNumber"
        ? (state.checkAvailable.phoneNumber = actions.payload.value)
        : (state.checkAvailable.email = actions.payload.value);
    },

    //* Completed: Check Available to booking
    CHECK_AVAILABLE: (state, actions) => {
      //* Completed: Check info
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
        state.checkAvailable.customer.child === "" ||
        state.checkAvailable.phoneNumber === "" ||
        state.checkAvailable.email === ""
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

      //* Completed: Show notify P1: Not Empty Room (Run khi còn Branch, roomType, roomKind not actived)
      if (state.checkRooms.checkInvalidData) {
        if (
          state.checkRooms.checkBranch.status === "" ||
          state.checkRooms.checkRoomType.status === "" ||
          state.checkRooms.checkRoomKind.status === ""
        ) {
          notify_NotEmptyRoom();
        }
      }

      //*  Completed: 7 - check date
      if (state.checkRooms.checkRoomAmount === false) {
        state.checkRooms.countRooms = 0;

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

      //* Completed Show notify P2: Not Empty Room + notify booking success (khi check date ko bị trùng với list đã book)
      if (
        state.checkRooms.countRooms !== "" ||
        state.checkRooms.checkRoomAmount
      ) {
        if (
          state.checkRooms.countRooms >= state.checkAvailable.roomAmount ||
          state.checkRooms.checkRoomAmount
        ) {
          state.bookingControl.bookingStep = 1;
          state.bookingControl.bookingStyle = {
            chooseDate: "",
            chooseRoom: "activeStyle",
            reservation: "",
            confirmation: "",
          };

          goTop();
        } else {
          notify_NotEmptyRoom();
          console.log("not empty room 2");
        }
      }
    },

    //* Completed: Get Room price + Room number + Set state to show roomDetail at Step 3
    GET_PRICE: (state, actions) => {
      state.Rooms.map((info) => {
        if (info.nameBranchVN === state.checkAvailable.branchValue) {
          info.roomType.map((roomType, index) => {
            if (roomType.type === state.checkAvailable.roomType.type) {
              //* Set state to show roomDetail selected at Step 3
              state.roomDetailStep3 = {
                index: index,
                item: roomType,
              };

              roomType.typeR.map((roomKind) => {
                if (roomKind.name === state.checkAvailable.roomType.kind) {
                  // console.log(roomKind.price);

                  //* Get Room price data
                  state.roomPrice = {
                    perRoom: roomKind.price,
                    total: roomKind.price * state.checkAvailable.roomAmount,
                  };

                  var breakS = true;
                  roomKind.numberOfRoom.map((room) => {
                    if (room.actived && breakS) {
                      //* Get Room number data + gán active false (thể hiện phòng ko còn khả dụng)
                      state.checkRooms.roomNumber = room.numberRoom;
                      room.actived = false;
                      breakS = false;
                    }
                  });
                }
              });
            }
          });
        }
      });

      //* Tiện thể Reset state changeUIConfirm
      state.changeUIConfirm = false;
    },

    //* Completed: Change UI after Confirm (step 4)
    CHANGE_UI_CONFIRM: (state, actions) => {
      //* 1 - Set state to show UI Confirmed + Show notify book success
      state.changeUIConfirm = true;
      notify_SuccessBooking();

      //* Completed: Create Object (customer info)
      //* 2 - Set up Date
      var today = new Date();
      var day = String(today.getDate()).padStart(2, "0");
      var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var year = today.getFullYear();
      var hour = today.getHours();
      var minutes = today.getMinutes();
      today = `${hour}h${minutes} ${day}-${month}-${year}`;

      //* 3 - Create Object
      const customerInfo = {
        id: state.booking.length + 1,
        fullname: "USER",
        Date: "",
        sex: "",
        avatar: "",
        identityCard: "",
        nationality: "",
        phone: state.checkAvailable.phoneNumber,
        email: state.checkAvailable.email,
        address: "",
        dateCreated: today,
        dateUpdated: today,
        nameBranchEN: toNonAccentVietnamese(state.checkAvailable.branchValue),
        nameBranchVN: state.checkAvailable.branchValue,
        roomType: state.checkAvailable.roomType.type,
        typeR: state.checkAvailable.roomType.kind,
        numberRoom: state.checkRooms.roomNumber,
        checkIn: `13h30 ${state.checkAvailable.time.arrive}`,
        checkOut: `13h30 ${state.checkAvailable.time.depature}`,
        comfirm: false,
        paied: false,
        cancel: false,
      };

      //* 4 - Push into list_booking
      // console.log(state.booking);
      state.booking.push(customerInfo);
      // console.log(state.booking);

      //* Set lại số EmptyRoom sau khi đã book
      state.Rooms[state.checkRooms.checkBranch.index].roomType[
        state.checkRooms.checkRoomType.index
      ].typeR[state.checkRooms.checkRoomKind.index].emptyRooms--;

      //* 5 - Reset state checkRooms after confirm
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
        roomNumber: "",
      };

      //* 6 - Reset state checkAvailable after confirm
      state.checkAvailable = {
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
        phoneNumber: "",
        email: "",
      };

      //* 7 - Reset state roomDetailStep3
      state.roomDetailStep3 = {
        index: "",
        item: "",
      };
    },
  },
});

export const {
  CHANGEROOMINFO,
  CHANGESTYLEINFO,
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
  GET_INFO,
  CHECK_AVAILABLE,
  GET_PRICE,
  CHANGE_UI_CONFIRM,
} = R_rooms.actions;

export default R_rooms.reducer;
