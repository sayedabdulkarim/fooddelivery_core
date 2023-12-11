import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "menu slice",
  restaurantMenuDetails: null,
};

const menuSlice = createSlice({
  name: "menu slice",
  initialState,
  reducers: {
    setRestaurantMenuDetails: (state, action) => {
      state.restaurantMenuDetails = action.payload;
    },
  },
});

export const { setRestaurantMenuDetails } = menuSlice.actions;

export default menuSlice.reducer;
