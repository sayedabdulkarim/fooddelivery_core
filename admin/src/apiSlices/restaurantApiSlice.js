import { apiSlice } from ".";

const USERS_URL = "api/admin";

export const restaurantApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addRestaurant: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addrestaurant`,
        method: "POST",
        body: data,
      }),
    }),
    getUserRestaurantDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/adminrestaurant`,
      }),
    }),
  }),
});

export const { useAddRestaurantMutation, useGetUserRestaurantDetailsQuery } =
  restaurantApiSlice;
