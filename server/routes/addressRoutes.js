import express from "express";
import { protectedRoutesWithParser } from "../middleware/authMiddleware.js";
const router = express.Router();

import { addAddress } from "../controller/addressController.js";

router.post("/addAddress", protectedRoutesWithParser, addAddress);

export default router;
