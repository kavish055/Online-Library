import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";

/**
 * BrowseBooks Page Component
 *
 * Features:
 * - Filter books by category via URL parameter
 * - Search books by title or author
 * - Display filtered results as animated book cards
 *
 * Dynamic routing: /books/:category allows filtering by specific categories
 */
const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

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

  useEffect(() => {
    const validCategories = books
      .map((book) => book.category.toLowerCase().replace(/\s/g, "-"))
      .concat("all");

    if (category && !validCategories.includes(category.toLowerCase())) {
      navigate("/books/all");
    }
  }, [category, books, navigate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container" aria-label="Browse Books Page">
      <h1 className="my-4">
        Books {category ? `- ${category.charAt(0).toUpperCase() + category.slice(1)}` : ""}
      </h1>

      {/* Animated Search bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </motion.div>

      {filteredBooks.length === 0 && <p>No books found.</p>}

      {/* Animated book cards grid */}
      <motion.div
        className="row row-cols-1 row-cols-md-4 g-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredBooks.map((book) => (
          <motion.div className="col" key={book.id} variants={itemVariants}>
            <BookCard book={book} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrowseBooks;
