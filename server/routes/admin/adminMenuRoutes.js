import express from "express";
const router = express.Router();

import { protectedAdminRoutesWithParser } from "../../middleware/authMiddleware.js";
import { addCategoryToRestaurant } from "../../controller/admin/adminMenuController.js";

router.post(
  "/menucategory",
  protectedAdminRoutesWithParser,
  addCategoryToRestaurant
);

export default router;
