import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const getCsrfToken = () => {
  // set 'XSRF-TOKEN'
  return Cookies.get("XSRF-TOKEN");
};

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/",
  baseUrl: "https://fooddelivery-core-api.vercel.app/",
  credentials: "include", // Necessary for cookies to be included
  prepareHeaders: (headers) => {
    const csrfToken = getCsrfToken();
    console.log(csrfToken, " csrfTokencsrfTokencsrfTokencsrfToken");
    if (csrfToken) {
      // Set the CSRF token in the request headers
      headers.set("x-csrf-token", csrfToken);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
