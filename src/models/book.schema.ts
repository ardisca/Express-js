// Membuat Schema DB
import { Schema, model } from "mongoose";

// Schema
const bookSchema = new Schema({
  title: String,
  authorId: { type: Schema.Types.ObjectId, ref: "Author" },
});

// cretae collection
export const Book = model("Book", bookSchema);

const authorSchema = new Schema({
  name: String,
  country: String,
});

export const Author = model("Author", authorSchema);
