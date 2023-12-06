import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant", // Assuming you have a Restaurant model
    required: true,
  },
  addressDetails: {
    address: String,
    doorNumber: String,
    landmark: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    type: {
      type: String,
      enum: ["Home", "Work", "Other"],
    },
  },
  items: [
    {
      itemId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  status: {
    type: String,
    required: true,
    enum: ["active", "completed", "pending"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CartModal = mongoose.model("Cart", cartSchema);

export default CartModal;
