import { createSlice } from "@reduxjs/toolkit";
import customerRatesData from "../../Data/customer_rating.json";

const initialState = {
  customerCmt: customerRatesData,
  // [
  //   {
  //     name: "Jonh Forbes",
  //     avatar: customer1,
  //     address: "Ohio America",
  //     comment:
  //       "This is the only place to stay in Catalia! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wire looking out your ocean view window and then to top it all off...",
  //   },
  //   {
  //     name: "Philip Nguyen",
  //     avatar: customer2,
  //     address: "Liverpool England",
  //     comment:
  //       "The place was great, the staff was all nice and very accommodating. Looks small from the outside but is very spacious. Good food, and a good place. Cozy and pretty quiet since it's not located in a hectic area.",
  //   },
  //   {
  //     name: "Kira Rose",
  //     avatar: customer3,
  //     address: "Zwolle Poland",
  //     comment:
  //       "Good service, quality and food. So comfortable, I recommend you to stay here if you with your family and friends travel or trip to Bandung. California Hotel also has a strategic location in Bandung making it easier for you to find food, souvenir places and others.",
  //   },
  // ],
};

const R_customerCmt = createSlice({
  name: "customer comment",
  initialState,
  reducers: {},
});

export default R_customerCmt.reducer;
