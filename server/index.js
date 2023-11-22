import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";
//routes
import userRoutes from "./routes/userRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";

const port = process.env.PORT || 5000;

connectDb();

const app = express();

//
app.use(express.json()); // to get req.body
app.use(express.urlencoded({ extended: true })); //to get form data

const corsOptions = {
  origin: "http://localhost:3000", // Client's URL, not the server's
  credentials: true, // <-- REQUIRED backend setting
};

app.use(cors(corsOptions));

// app.use(cors());
app.use(cookieParser());

//users
app.use("/api/users", userRoutes);
//home
app.use("/api/users", homeRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port}`));
