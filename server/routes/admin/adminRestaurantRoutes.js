import express from "express";
const router = express.Router();

import { addAdminRestaurant } from "../../controller/admin/adminRestaurantController.js";
import { protectedAdminRoutesWithParser } from "../../middleware/authMiddleware.js";

router.post(
  "/addrestaurant",
  protectedAdminRoutesWithParser,
  addAdminRestaurant
);

export default router;
