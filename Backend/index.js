import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/userRoute.js";

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

try {
   mongoose.connect(URI);
   console.log("mongodb connected");
} catch (error) {
   console.log(error)
}

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
