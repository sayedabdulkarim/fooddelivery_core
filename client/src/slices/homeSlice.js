import { createSlice } from "@reduxjs/toolkit";
import { initialFilterOption } from "../utils/commonHelper";

const initialState = {
  isFilterModalOpen: false,
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
    setFilterModalOpen: (state, action) => {
      state.isFilterModalOpen = action.payload;
    },
    setHomePageData: (state, action) => {
      state.homePageData = action.payload;
      state.filteredHomePageData = action.payload.data.allRestaurantList;
    },
    setStoreFilters: (state, action) => {
      console.log(action.payload, " payload");
      state.filterOption = action.payload;
    },
    applyStoreFilters: (state) => {
      if (
        state.homePageData.data &&
        Array.isArray(state.homePageData.data.allRestaurantsList)
      ) {
        // let filteredData = [...state.homePageData.data.allRestaurantsList];
        let filteredData = state.homePageData.data.allRestaurantsList.slice();

        // Apply sorting
        switch (state.filterOption.sort) {
          case "Delivery Time":
            filteredData.sort(
              (a, b) => a.sla.deliveryTime - b.sla.deliveryTime
            );
            break;
          case "Rating":
            filteredData.sort((a, b) => b.avgRating - a.avgRating);
            break;
          case "Cost: Low to High":
            filteredData.sort(
              (a, b) => parseCost(a.costForTwo) - parseCost(b.costForTwo)
            );
            break;
          case "Cost: High to Low":
            filteredData.sort(
              (a, b) => parseCost(b.costForTwo) - parseCost(a.costForTwo)
            );
            break;
          case "Relevance ( Default )":
            filteredData = state.homePageData.data.allRestaurantsList.slice();
            break;
          default:
            break;
          // Add default case if needed
        }
        // Apply delivery time filter
        if (state.filterOption.deliveryTime.length > 0) {
          filteredData = filteredData.filter((restaurant) =>
            state.filterOption.deliveryTime.includes(
              restaurant.sla.deliveryTime
            )
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

        // Update filtered data
        state.filteredAllRestaurantData = filteredData;
      } else {
        console.log(JSON.parse(JSON.stringify(state)), "Complete State");

        // Handle the case where allRestaurantList is not available or not an array
        console.error("allRestaurantList is not available or not an array");
      }
    },

    clearFilters: (state) => {
      // Reset filters
      console.log();
      // state.filterOption = initialState.filters;
      state.filterOption = initialFilterOption;
      // Reset filtered data to original
      state.filteredAllRestaurantData =
        state.homePageData.data.allRestaurantList;
    },
    // ... other reducers ...
  },
});

export const {
  setFilterModalOpen,
  setHomePageData,
  setStoreFilters,
  applyStoreFilters,
  clearFilters,
} = homeSlice.actions;

export default homeSlice.reducer;

// Helper function to parse cost string
function parseCost(costString) {
  return parseInt(costString.replace(/[^0-9]/g, ""), 10);
}
