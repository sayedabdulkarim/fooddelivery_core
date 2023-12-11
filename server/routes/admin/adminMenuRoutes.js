import express from "express";
const router = express.Router();

import { protectedAdminRoutesWithParser } from "../../middleware/authMiddleware.js";
import {
  addCategoryToRestaurant,
  getRestaurantMenu,
} from "../../controller/admin/adminMenuController.js";

router.post(
  "/menucategory",
  protectedAdminRoutesWithParser,
  addCategoryToRestaurant
);
router.get("/menu", protectedAdminRoutesWithParser, getRestaurantMenu);

export default router;
