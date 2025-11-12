import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

/**
 * Redux Store Configuration
 *
 * Manages the global state of the application.
 * Currently manages:
 * - books: book list state managed by booksSlice
 */
const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
