import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantDetails: null,
};

const restaurantDetailsSlice = createSlice({
  name: "restaurantDetails",
  initialState,
  reducers: {
    setRestaurantDetailsById: (state, action) => {
      console.log(action.payload, " restaurantDetails");
      state.restaurantDetails = action.payload;
    },
  },
});

export const { setRestaurantDetailsById } = restaurantDetailsSlice.actions;

export default restaurantDetailsSlice.reducer;
