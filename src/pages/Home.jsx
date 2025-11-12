import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

// Available book categories for filtering
const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography", "Fantasy"];

/**
 * Home Page Component
 *
 * Displays:
 * - Welcome message
 * - Category buttons for filtering books
 * - Popular books (top 4 by rating)
 *
 * Uses Redux to access books from store
 */
const Home = () => {
  const books = useSelector((state) => state.books.list);

  // Sort books by rating descending and take top 4 as popular
  const popularBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <main className="container" aria-label="Home page">
      {/* Page title */}
      <h1 className="my-4">Welcome to Online Library</h1>

      {/* Categories section */}
      <section className="mb-5" aria-label="Book categories">
        <h2>Book Categories</h2>
        <div className="d-flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat.toLowerCase().replace(/\s/g, "-")}`}
              className="btn btn-outline-primary"
              aria-label={`Browse ${cat} books`}
            >
              {cat}
            </Link>
          ))}
          <Link to="/books/all" className="btn btn-outline-secondary" aria-label="Browse all books">
            All
          </Link>
        </div>
      </section>

      {/* Popular books section */}
      <section aria-label="Popular books">
        <h2>Popular Books</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {popularBooks.length > 0 ? (
            popularBooks.map((book) => (
              <div className="col" key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p>No popular books available.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
