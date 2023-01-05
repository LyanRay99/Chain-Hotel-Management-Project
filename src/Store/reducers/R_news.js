import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [
    {
      date: 25,
      month: "JANUARY",
      year: 2023,
      content: "Update menu food in Skyline Hote",
    },
    {
      date: 22,
      month: "JANUARY",
      year: 2023,
      content: "Las Maquinas on Tragamonedas",
    },
    {
      date: 25,
      month: "FEBRUARY",
      year: 2023,
      content: "Mother Earth Hosts Our Travels",
    },
  ],
};

const R_news = createSlice({
  name: "News",
  initialState,
  reducers: {},
});

export default R_news.reducer;
