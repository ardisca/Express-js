import type { Request, Response } from "express";
import { Book } from "../models/book.schema";
import BookServices from "../services/book.services";

const BookController = {
  heandleGetAllBook: async (req: Request, res: Response) => {
    const allBook = await BookServices.getAll();
    res.status(200).json({ message: "Succses All Data", data: allBook });
  },
  heandleGetBookById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await BookServices.getById(id);
      if (data) {
        res.status(200).json({ message: `Succses Get Data ${id}`, data: data });
      } else {
        res.status(404).json({ message: `Failed Get Data ${id}` });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  },
  heandleCreateBook: async (req: Request, res: Response) => {
    try {
      const { title, authorId } = req.body;

      // Save book
      const createBook = new Book({
        title,
        authorId,
      });

      await createBook.save();

      res.status(200).json({ message: `Succses Post Data` });
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  },
  heandleUpdateBook: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { title, authorId } = req.body;
      const authKey = req.headers.authorization;

      if (authKey != "1234") {
        res.status(401).json({ message: `Unauthorization` });
      } else {
        const updateBook = await Book.findByIdAndUpdate(id, {
          title,
          authorId,
        });
        if (updateBook) {
          res.status(200).json({ message: `Succses Update Data` });
        } else {
          res.status(404).json({ message: `Failed Update Data ${id}` });
        }
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  },
  heandleDeleteBook: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const deleteBook = await Book.findByIdAndDelete(id);
      if (deleteBook) {
        res.status(200).json({ message: `Succses Delet Data ${id}` });
      } else {
        res.status(404).json({ message: `Failed Delet Data ${id}` });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  },
};

export default BookController;
