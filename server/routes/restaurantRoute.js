import express from "express";
import { protectedRoutesWithParser } from "../middleware/authMiddleware.js";
const router = express.Router();

import { getRestaurantDetailById } from "../controller/restaurantController.js";

router.get(
  "/getRestaurantDetails/:id",
  protectedRoutesWithParser,
  getRestaurantDetailById
);

export default router;
