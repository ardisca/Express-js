import BookRepository from "../repositories/book.repositories";

const BookServices = {
  getAll: async () => {
    const allBook = await BookRepository.getAll();
    return allBook;
  },
  getById: async (id: String) => {
    const allBookById = await BookRepository.getById(id);
    return allBookById;
  },
};

export default BookServices;
