import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

/**
 * BookDetails Page Component
 *
 * Displays detailed information about a selected book:
 * - Title
 * - Author
 * - Description
 * - Category
 * - Rating
 *
 * Dynamic routing: /book/:id uses URL parameter to find and display book
 */
const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <motion.div
        className="container py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Book Not Found</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Back to Browse
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container py-4"
      aria-label={`Details for book titled ${book.title}`}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Book Title */}
      <h1 className="my-4">{book.title}</h1>

      {/* Book Author */}
      <h5 className="text-muted mb-3">By {book.author}</h5>

      {/* Book Details */}
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Category:</strong> {book.category}
      </p>
      <p>
        <strong>Rating:</strong> {book.rating.toFixed(1)}
      </p>

      {/* Back Button */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        Back to Browse
      </button>
    </motion.div>
  );
};

export default BookDetails;
