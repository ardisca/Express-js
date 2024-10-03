import express from "express";
import { Book } from "../models/book.schema";
import BookController from "../controller/book.controller";

export const bookRouter = express.Router();

bookRouter.get("/", BookController.heandleGetAllBook);

bookRouter.get("/:id", BookController.heandleGetBookById);

bookRouter.post("/", BookController.heandleCreateBook);

bookRouter.patch("/:id", BookController.heandleUpdateBook);

bookRouter.delete("/:id", BookController.heandleDeleteBook);
