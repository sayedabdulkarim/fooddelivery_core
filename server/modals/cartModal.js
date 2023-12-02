import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    mealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less then 1."],
    },
    // Additional fields like price, special instructions, etc.
  },
  { timestamps: true }
);

const CartModal = mongoose.model("Cart", userSchema);

export default CartModal;
