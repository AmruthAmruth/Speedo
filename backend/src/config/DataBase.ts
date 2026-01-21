import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("MongoDB connected successfully");
  } catch (err: unknown) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export default connectDB;