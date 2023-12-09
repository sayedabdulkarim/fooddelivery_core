import express from "express";
const router = express.Router();

import { adminUserSignUp } from "../../controller/admin/adminUserController.js";

router.post("/signup", adminUserSignUp);

export default router;
