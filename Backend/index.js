import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./route/userRoute.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

app.use(express.json());

app.use(cookieParser());

app.use(cors()); //enable CORS for all requests

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

try {
   mongoose.connect(URI);
   console.log("mongodb connected");
} catch (error) {
   console.log(error)
}

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
