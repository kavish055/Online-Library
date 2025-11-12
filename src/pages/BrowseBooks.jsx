import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

/**
 * BrowseBooks Page Component
 *
 * Features:
 * - Filter books by category via URL parameter
 * - Search books by title or author
 * - Display filtered results as book cards
 *
 * Dynamic routing: /books/:category allows filtering by specific categories
 */
const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Apply filters when category, books, or search term changes
  useEffect(() => {
    let filtered = books;

    if (category && category.toLowerCase() !== "all") {
      filtered = books.filter(
        (book) =>
          book.category.toLowerCase().replace(/\s/g, "-") === category.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerSearch) ||
          book.author.toLowerCase().includes(lowerSearch)
      );
    }

    setFilteredBooks(filtered);
  }, [category, books, searchTerm]);

  // Redirect to 'all' if category is invalid
  useEffect(() => {
    const validCategories = books
      .map((book) => book.category.toLowerCase().replace(/\s/g, "-"))
      .concat("all");

    if (category && !validCategories.includes(category.toLowerCase())) {
      navigate("/books/all");
    }
  }, [category, books, navigate]);

  return (
    <div className="container" aria-label="Browse Books Page">
      <h1 className="my-4">
        Books {category ? `- ${category.charAt(0).toUpperCase() + category.slice(1)}` : ""}
      </h1>

      {/* Search bar for filtering books */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredBooks.length === 0 && <p>No books found.</p>}

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredBooks.map((book) => (
          <div className="col" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
