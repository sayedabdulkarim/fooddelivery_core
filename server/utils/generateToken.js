import jwt from "jsonwebtoken";

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

const generateToken = (res, userId, expiresIn = "1h") => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  const expiration = new Date();
  expiration.setMilliseconds(expiration.getMilliseconds() + 3600000); // Set it to 1 hour from now

  console.log(expiration, " eeexxx");
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    expires: expiration, // Explicitly setting expires attribute
  });
};

export default generateToken;
