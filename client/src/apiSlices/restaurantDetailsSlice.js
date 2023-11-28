import { apiSlice } from "./";

const USERS_URL = "api/users";

export const restaurantDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurantDetailsById: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/getRestaurantDetails/${id}`,
      }),
    }),
  }),
});

export const { useGetRestaurantDetailsByIdQuery } = restaurantDetailsSlice;
