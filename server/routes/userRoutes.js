import express from "express";
import { protectedRoutesWithParser } from "../middleware/authMiddleware.js";
const router = express.Router();

import {
  authenticateUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";

router.post("/", registerUser);
router.post("/auth", authenticateUser);
router.post("/logout", logoutUser);

// router.get("/profile", getUserProfile);
// router.get("/profile", updateUserProfile);
router
  .route("/profile")
  .get(protectedRoutesWithParser, getUserProfile)
  .put(protectedRoutesWithParser, updateUserProfile);

export default router;
