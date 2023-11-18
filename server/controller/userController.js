import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
//modals
import UserModal from "../modals/userModal.js";
import generateToken from "../utils/generateToken.js";
import matchPassword from "../utils/matchPassword.js";

// @desc authenticated users/ token
// route POST /api/users/auth
// @ccess PUBLIC
const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModal.findOne({ email });

  // make sure to pass both passwords for matchPassword
  if (user && (await matchPassword(password, user.password))) {
    // console.log(user, " userrr");
    generateToken(res, user._id); // Capture the generated token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc register a new user
// route POST /api/users
// @ccess PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await UserModal.findOne({ email });
  //   res.cookie("hello", "1234");
  //   console.log(res, " ress from existing");
  if (existingUser) {
    res.status(400).json({
      message: "User already exists.",
    });
    return;
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new UserModal({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  generateToken(res, newUser._id);
  console.log(newUser, " newwwwwUser");
  //   console.log(res, " ress");
  res.status(201).json({
    message: "User registered successfully.",
    user: {
      name,
      email,
    },
    // Other user data can go here
  });
});
// @desc logout
// route POST /api/users/logout
// @ccess PUBLIC
const logoutUser = asyncHandler(async (req, res) => {
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

// @desc get user profile
// route GET /api/users/profile
// @ccess PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  // req.user._id is populated with the user's ID by auth middlewar or protected route
  console.log(req.user, " reeee");

  const user = await UserModal.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // any other fields you want to include
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc update user profile
// route PUT /api/users/profile
// @ccess PRIVATE
// const updateUserProfile = asyncHandler(async (req, res) => {
//   // Assuming req.user._id is populated with the user's ID by some middleware
//   const user = await UserModal.findById(req.user._id);

//   console.log(req.body, " bbbb");
//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;

//     // Assuming that you want to allow updating the password
//     if (req.body.password) {
//       user.password = req.body.password;
//       // If your User model has a pre-save hook for hashing passwords,
//       // the new password will get hashed before saving.
//     }

//     const updatedUser = await user.save();

//     res.json({
//       id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       // other fields as needed
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

const updateUserProfile = asyncHandler(async (req, res) => {
  // Assuming req.user._id is populated with the user's ID by some middleware
  const user = await UserModal.findById(req.user._id);

  // Check if the new email already exists in the database for another user
  const existingEmailUser = await UserModal.findOne({ email: req.body.email });
  if (
    existingEmailUser &&
    String(existingEmailUser._id) !== String(req.user._id)
  ) {
    res.status(400);
    throw new Error("Email already in use.");
    return;
  }

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    // Assuming that you want to allow updating the password
    if (req.body.password) {
      user.password = req.body.password;
      // If your User model has a pre-save hook for hashing passwords,
      // the new password will get hashed before saving.
    }

    try {
      const updatedUser = await user.save();
      res.json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        // other fields as needed
      });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400);
        throw new Error("Email already exists");
      }
      // ... (other error handling)
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authenticateUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
