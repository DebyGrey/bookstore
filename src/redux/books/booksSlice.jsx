import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const storedBooks = () => {
  const storedBooks = localStorage.getItem("booksData");
  const booksArr = JSON.parse(storedBooks);
 
  const template = [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
    },
  ];

  if (storedBooks) {
    if (booksArr.length !== 0) {
      return booksArr;
    }
    return template;
  }
  return template;
};

const initialState = {
  books: storedBooks(),
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
    addBook: (state, action) => {
      const bookTitle = action.payload[0];
      const bookAuthor = action.payload[1];
      const newBook = {
        item_id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
        category: "Action",
        genre: "Action",
        completed: "40%",
        chapter: "13",
      };
      state.books = [...state.books, newBook];
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
