import jwt from "jsonwebtoken";
import crypto from "crypto";
// const generateToken = (res, userId, expiresIn = "1h") => {
//   const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: expiresIn,
//   });

//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     maxAge: 3600000,
//   });
// };

// const generateToken = (res, userId, expiresIn = "1h") => {
//   const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: expiresIn,
//   });

//   const expiration = new Date();
//   expiration.setMilliseconds(expiration.getMilliseconds() + 3600000); // Set it to 1 hour from now

//   console.log(expiration, " eeexxx");
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     expires: expiration, // Explicitly setting expires attribute
//   });
// };

// export default generateToken;

// const generateToken = (res, userId, expiresIn = "2d") => {
//   const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: expiresIn,
//   });

//   const csrfToken = crypto.randomBytes(24).toString("hex");
//   const expiration = new Date();
//   // expiration.setMilliseconds(expiration.getMilliseconds() + 3600000); // Set it to 1 hour from now
//   expiration.setDate(expiration.getDate() + 2); // Set it to 2 days from now

//   // JWT Token
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     expires: expiration,
//   });

//   // CSRF Token
//   res.cookie("XSRF-TOKEN", csrfToken, {
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     expires: expiration,
//   });

//   return csrfToken; // Return CSRF token to include in the response
// };

const generateToken = (res, userId, expiresIn = "2d") => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  const csrfToken = crypto.randomBytes(24).toString("hex");
  const expiration = new Date();
  expiration.setDate(expiration.getDate() + 2); // Set it to 2 days from now

  console.log({ res, userId }, " from login");

  const isDevelopment = process.env.NODE_ENV === "development";

  // JWT Token
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: !isDevelopment,
    sameSite: isDevelopment ? "strict" : "none",
    expires: expiration,
    path: "/", // Set the path to root
  });

  // CSRF Token
  res.cookie("XSRF-TOKEN", csrfToken, {
    secure: !isDevelopment,
    sameSite: isDevelopment ? "strict" : "none",
    expires: expiration,
    path: "/", // Set the path to root
  });

  return csrfToken; // Return CSRF token to include in the response
};

export default generateToken;
