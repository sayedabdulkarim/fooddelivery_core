import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowMenu: false,
};

const menuBottomSlice = createSlice({
  name: "menuBottomSlice",
  initialState,
  reducers: {
    setMenuBottomSlice: (state, action) => {
      state.isShowMenu = action.payload;
    },
  },
});

export const { setMenuBottomSlice } = menuBottomSlice.actions;

export default menuBottomSlice.reducer;
