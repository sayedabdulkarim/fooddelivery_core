import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homePageData: [],
  name: "homeSlice",
  filterOption: {
    sort: "",
    deliveryTime: [],
    cuisines: [],
    explore: [],
    rating: [],
    vegNonVeg: null,
    costForTwo: [],
    offers: null,
  },
  filteredAllRestaurantData: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomePageData: (state, action) => {
      state.homePageData = action.payload;
      state.filteredHomePageData = action.payload.data.allRestaurantList;
    },
    setStoreFilters: (state, action) => {
      console.log(action.payload, " payload");
      state.filterOption = action.payload;
    },
    applyFilters: (state) => {
      let filteredData = [...state.homePageData.data.allRestaurantList];

      // Apply delivery time filter
      if (state.filterOption.deliveryTime.length > 0) {
        filteredData = filteredData.filter((restaurant) =>
          state.filterOption.deliveryTime.includes(restaurant.sla.deliveryTime)
        );
      }

      // Apply cuisines filter
      if (state.filterOption.cuisines.length > 0) {
        filteredData = filteredData.filter((restaurant) =>
          restaurant.cuisines.some((cuisine) =>
            state.filterOption.cuisines.includes(cuisine)
          )
        );
      }

      // Apply other filters like rating, vegNonVeg, etc.
      // Note: Add logic for each filter according to your requirements

      // Apply sorting
      switch (state.filterOption.sort) {
        case "deliveryTime":
          filteredData.sort((a, b) => a.sla.deliveryTime - b.sla.deliveryTime);
          break;
        case "rating":
          filteredData.sort((a, b) => b.avgRating - a.avgRating);
          break;
        case "costLowToHigh":
          filteredData.sort(
            (a, b) => parseCost(a.costForTwo) - parseCost(b.costForTwo)
          );
          break;
        case "costHighToLow":
          filteredData.sort(
            (a, b) => parseCost(b.costForTwo) - parseCost(a.costForTwo)
          );
          break;
        default:
          break;
        // Add default case if needed
      }

      // Update filtered data
      state.filteredHomePageData = filteredData;
    },

    clearFilters: (state) => {
      // Reset filters
      state.filters = initialState.filters;
      // Reset filtered data to original
      state.filteredHomePageData = state.homePageData.data.allRestaurantList;
    },
    // ... other reducers ...
  },
});

export const { setHomePageData, setStoreFilters, applyFilters } =
  homeSlice.actions;

export default homeSlice.reducer;

// Helper function to parse cost string
function parseCost(costString) {
  return parseInt(costString.replace(/[^0-9]/g, ""), 10);
}
