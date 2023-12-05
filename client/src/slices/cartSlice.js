import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {},

    deleteFromcart: (state, action) => {},
  },
});

export const { setRestaurantDetailsById, setRestaurantDetailsHeaderStick } =
  cartSlice.actions;

export default cartSlice.reducer;
