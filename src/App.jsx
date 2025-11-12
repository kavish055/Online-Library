import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

/**
 * App component - Main routing configuration for the Online Library application
 *
 * Routes:
 * - "*" - 404 Not Found page for undefined routes (lowest priority)
 * - "/" - Home page with categories and popular books
 * - "/books/:category" - Browse and filter books by category
 * - "/book/:id" - View detailed information about a specific book
 * - "/add-book" - Add a new book to the library
 *
 * Note: 404 route is placed first and without Navbar to show on any undefined path
 */
function App() {
  return (
    <>
      <Routes>
        {/* 404 Page - no Navbar to keep error page clean */}
        <Route path="*" element={<NotFound />} />

        {/* Pages with Navbar - all valid routes display the navigation bar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/books/:category"
          element={
            <>
              <Navbar />
              <BrowseBooks />
            </>
          }
        />
        <Route
          path="/book/:id"
          element={
            <>
              <Navbar />
              <BookDetails />
            </>
          }
        />
        <Route
          path="/add-book"
          element={
            <>
              <Navbar />
              <AddBook />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
