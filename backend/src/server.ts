import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DataBase";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();