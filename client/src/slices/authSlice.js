import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  name: "Hello Auth Slice",
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload, " setCredentialssss");
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    logOutUser: (state, action) => {
      console.log("logout called");
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setPosts: (state, action) => {
      console.log(action.payload, " setPosts");
      state.posts = action.payload;
    },
  },
});

export const { setCredentials, logOutUser, setPosts } = authSlice.actions;

export default authSlice.reducer;
