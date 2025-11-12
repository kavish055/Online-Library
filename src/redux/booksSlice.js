import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * Initial dummy data for the Online Library.
 * Contains sample books with title, author, category, description, and rating.
 */
const initialBooks = [
  {
    id: nanoid(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A novel about racial injustice in the Deep South.",
    rating: 4.8,
  },
  {
    id: nanoid(),
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Non-Fiction",
    description: "Explores the origins and nature of the universe.",
    rating: 4.5,
  },
  {
    id: nanoid(),
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "An epic science fiction saga set in a desert planet.",
    rating: 4.6,
  },
  {
    id: nanoid(),
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Biography",
    description: "The diary of Anne Frank published posthumously.",
    rating: 4.4,
  },
  {
    id: nanoid(),
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    description: "The first book in the Harry Potter series.",
    rating: 4.7,
  },
];

/**
 * Redux Slice for Books State Management
 *
 * State shape:
 * - list: Array of book objects
 *
 * Reducers:
 * - addBook: Adds a new book to the beginning of the list with an auto-generated ID
 */
const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: {
      reducer(state, action) {
        // Add new book at beginning of list
        state.list.unshift(action.payload);
      },
      prepare(book) {
        // Generate unique ID for new book
        return { payload: { id: nanoid(), ...book } };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
