import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: process.env.MONGO_DB_NAME
    });
    console.log(`MongoDB connected to ${process.env.MONGO_DB_NAME}`);
  } catch (error) {
    console.error("MongoDB error:", error);
    process.exit(1);
  }
};

export default connectDB;
