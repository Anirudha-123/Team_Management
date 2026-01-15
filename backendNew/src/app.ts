import express, { Application } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import memberRoutes from "./routes/memberRoutes";
import connectDB from "./config/db";
import dotenv from "dotenv"

dotenv.config()

const app: Application = express();

connectDB()


// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));



app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/members", memberRoutes);

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});