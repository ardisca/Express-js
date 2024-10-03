import { Book } from "../models/book.schema";

const BookRepository = {
  getAll: async () => {
    try {
      const data = await Book.find().populate("authorId");
      return data;
    } catch (error) {
      console.error("Error in getAll Repository: ", error);
      throw error;
    }
  },
  getById: async (id: String) => {
    try {
      const data = await Book.findById(id).populate("authorId");
      return data;
    } catch (error) {
      console.error("Error in getAll Repository: ", error);
      throw error;
    }
  },
};

export default BookRepository;
