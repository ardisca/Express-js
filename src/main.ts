import express from "express";
import { productRouter } from "./routes/product.route";
import mongoose from "mongoose";

// to read .env
import dotenv from "dotenv";
import { bookRouter } from "./routes/book.route";
import { authorRouter } from "./routes/author.router";
dotenv.config();

// to connect db
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connection Succses"))
  .catch(() => console.log("Connection Failed"));

const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.listen(8000);
