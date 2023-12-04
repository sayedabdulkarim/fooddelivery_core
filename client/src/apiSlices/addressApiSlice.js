import { apiSlice } from "./";

const USERS_URL = "api/users";

export const addressApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAddress: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addAddress`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddAddressMutation } = addressApiSlice;
