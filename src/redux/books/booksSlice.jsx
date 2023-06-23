import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const initialState = {
  books: [],
  isLoading: true,
};

const getBooksURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";
export const getBooks = createAsyncThunk("books/getBooks", async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

const addBookURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";
export const postBook = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    const bookObj = {
      item_id: uuidv4(),
      title: book[0],
      author: book[1],
      category: "Action",
    };
    try {
      const response = await axios.post(addBookURL, bookObj);
      thunkAPI.dispatch(getBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const deleteBookURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books";
export const deletBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${deleteBookURL}/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const booksSlice = createSlice({
  name: "bookstore",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deletBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(deletBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
