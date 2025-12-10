import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./route/userRoute.js";
import messageRoute from "./route/messageRoute.js"
import { app, server } from "./socketIO/server.js";

dotenv.config();

app.use(express.json());

app.use(cookieParser());

// app.use(cors()); //enable CORS for all requests
app.use(cors({
  origin: "http://localhost:4001",
  credentials: true
}));

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

try {
   mongoose.connect(URI);
   console.log("mongodb connected");
} catch (error) {
   console.log(error)
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
