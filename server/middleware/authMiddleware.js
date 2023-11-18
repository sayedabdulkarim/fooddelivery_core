import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
//parser
import UserModal from "../modals/userModal.js";

export const protectedRoutes = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Assuming you have a User model where you can find the user by ID
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// module.exports = protectedRoutes;

export const protectedRoutesWithParser = asyncHandler(
  async (req, res, next) => {
    // console.log(req, " from top");
    const token = req.cookies.jwt; // 'jwt' is the cookie name you've set
    // console.log(token, " ttoken");
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded, " ddddeee");
        // console.log(req, " reqqqq");
        // Populate req.user
        req.user = await UserModal.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

// module.exports = protectedRoutes;
