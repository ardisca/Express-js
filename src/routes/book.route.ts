import express from "express";
import { Book } from "../models/book.schema";

export const bookRouter = express.Router();

bookRouter.get("/", async (_, res) => {
  const data = await Book.find();
  res.status(200).json({ message: "Succses All Data", data: data });
});

bookRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book.findById(id);
    if (data) {
      res.status(200).json({ message: `Succses Get Data ${id}`, data: data });
    } else {
      res.status(404).json({ message: `Failed Get Data ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` });
  }
});
