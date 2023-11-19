import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import UnAuthScreen from "../screens/unauth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<UnAuthScreen />} />
      <Route path="*" element={<h1>404 Component</h1>} />
    </Route>
  )
);
