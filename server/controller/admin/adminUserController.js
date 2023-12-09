import asyncHandler from "express-async-handler";
//modals
// import UserModal from "../modals/userModal.js";
import AdminUserModal from "../../modals/admin/adminSingupModal.js";
//helpers
import generateToken from "../../utils/generateToken.js";

// @desc authenticated admin/ token
// route POST /api/admin/login
// @ccess PUBLIC
const adminUserLogin = asyncHandler(async (req, res) => {
  const { phone } = req.body; // Expecting phone from the client

  // Find user by phone number
  const user = await AdminUserModal.findOne({ phone });

  if (user) {
    // If user is found, generate a token (Assuming you're still using token-based authentication)
    generateToken(res, user._id);

    // Respond with user details
    res.status(200).json({
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phone,
        favorites: user.favorites, // Add this line to include the favorites in the response
      },
      message: "Login successful",
    });
  } else {
    // If user is not found, send an error response
    res.status(404).json({ message: "User not found" });
  }
});

// @desc register a new user
// route POST api/admin/signup
// @ccess PUBLIC
const adminUserSignUp = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  // Check if the user already exists based on phone
  const existingUser = await AdminUserModal.findOne({ phone });
  if (existingUser) {
    res.status(400).json({
      message: "User with this phone number already exists.Please Login.",
    });
    return;
  }

  // Check if the user already exists based on email
  //   const existingUserByEmail = await AdminUserModal.findOne({ email });
  //   if (existingUserByEmail) {
  //     res
  //       .status(400)
  //       .json({ message: "User with this email already exists.Please Login." });
  //     return;
  //   }

  // Create a new user
  const newUser = new AdminUserModal({
    name,
    email,
    phone,
  });

  await newUser.save();
  // Generate token or handle OTP logic here (if applicable)
  generateToken(res, newUser._id);

  res.status(201).json({
    message: "User registered successfully.",
    user: {
      name,
      email,
      phone,
    },
    // Other user data can go here
  });
});

// @desc logout
// route POST /api/admin/logout
// @ccess PUBLIC
const adminLogoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0), // Expire the cookie immediately
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });

  res.status(200).json({
    message: "Successfully logged out.",
  });
});

export { adminUserLogin, adminUserSignUp, adminLogoutUser };
