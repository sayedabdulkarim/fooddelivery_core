import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    items: [],
    totalCost: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        // Item exists, increase the count
        state.cart.items[itemIndex].count += 1;
      } else {
        // Item does not exist, add to the cart with count 1
        state.cart.items.push({ ...action.payload, count: 1 });
      }

      // Update total cost
      state.cart.totalCost = state.cart.items.reduce(
        (total, item) => total + item.count * item.price,
        0
      );
    },

    removeFromcart: (state, action) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        // If count is more than 1, decrease the count
        if (state.cart.items[itemIndex].count > 1) {
          state.cart.items[itemIndex].count -= 1;
        } else {
          // If count is 1, remove the item from the cart
          state.cart.items.splice(itemIndex, 1);
        }
      }

      // Update total cost
      state.cart.totalCost = state.cart.items.reduce(
        (total, item) => total + item.count * item.price,
        0
      );
    },

    clearItemFromcart: (state, action) => {
      state.cart.items = state.cart.items.filter(
        (item) => item.itemName !== action.payload.itemName
      );

      // Update total cost
      state.cart.totalCost = state.cart.items.reduce(
        (total, item) => total + item.count * item.price,
        0
      );
    },
  },
});

export const { addTocart, removeFromcart, clearItemFromcart } =
  cartSlice.actions;

export default cartSlice.reducer;
