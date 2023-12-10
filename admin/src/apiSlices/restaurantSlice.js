import { apiSlice } from ".";

const USERS_URL = "api/admin";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addRestaurant: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addrestaurant`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRestaurantMutation } = userApiSlice;
