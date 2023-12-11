import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "menu slice",
  restaurantMenuDetails: null,
  categoryModal: false,
  category: "",
};

const menuSlice = createSlice({
  name: "menu slice",
  initialState,
  reducers: {
    setRestaurantMenuDetails: (state, action) => {
      state.restaurantMenuDetails = action.payload;
    },
    setMenuCategoryModal: (state, action) => {
      console.log(action.payload, " ppp");
      state.categoryModal = action.payload;
    },
    setMenuCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  setRestaurantMenuDetails,
  setMenuCategoryModal,
  setMenuCategory,
} = menuSlice.actions;

export default menuSlice.reducer;
