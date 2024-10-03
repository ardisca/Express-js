import express from "express";
import { Author } from "../models/book.schema";

export const authorRouter = express.Router();

authorRouter.get("/", async (_, res) => {
  const data = await Author.find();

  res.status(200).json({ data: data });
});

authorRouter.post("/", async (req, res) => {
  try {
    const { name, country } = req.body;
    const cretaeAuthor = new Author({
      name,
      country,
    });

    await cretaeAuthor.save();
    res.status(201).json({ message: "Cretae Data" });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` });
  }
});
