import express from "express";
const router = express.Router();

import {
  adminUserLogin,
  adminUserSignUp,
} from "../../controller/admin/adminUserController.js";

router.post("/login", adminUserLogin);
router.post("/signup", adminUserSignUp);

export default router;
