// Membuat Schema DB
import { Schema, model } from "mongoose";

// Schema
const bookSchema = new Schema({
  title: String,
  authorName: String,
});

// cretae collection
export const Book = model("Book", bookSchema);
