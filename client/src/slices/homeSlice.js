import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homePageData: [],
  name: "homeSlice",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomePageData: (state, action) => {
      state.homePageData = action.payload;
    },
  },
});

export const { setHomePageData } = homeSlice.actions;

export default homeSlice.reducer;
