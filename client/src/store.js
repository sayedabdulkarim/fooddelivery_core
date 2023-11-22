import { configureStore } from "@reduxjs/toolkit";
//reducers
import { apiSlice } from "./apiSlices/index";
import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
import homeReducer from "./slices/homeSlice";
import testReducer from "./slices/testSlice";

const store = configureStore({
  reducer: {
    authReducer,
    testReducer,
    alertReducer,
    homeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiSlice.middleware,
  ],

  devTools: true,
});

// console.log(apiSlice, " appppp");
export default store;
