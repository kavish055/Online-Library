import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * BookCard Component (Animated and Modern UI)
 *
 * Props:
 * - book: { id, title, author, description, rating }
 */
const BookCard = ({ book }) => {
  return (
    <motion.div
      className="card h-100 book-card-animated"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px rgba(33,150,243,0.18)",
        transition: { type: "spring", stiffness: 240 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="card-body d-flex flex-column">
        {/* Book Title */}
        <h5 className="card-title text-gradient">{book.title}</h5>
        {/* Author */}
        <h6 className="card-subtitle mb-2 text-muted">By {book.author}</h6>
        {/* Description Preview */}
        <p className="card-text flex-grow-1">
          {book.description.length > 100
            ? book.description.slice(0, 100) + "..."
            : book.description}
        </p>
        {/* Rating */}
        <p className="card-text">
          <span className="badge bg-warning text-dark me-2">
            {Number(book.rating).toFixed(1)}
          </span>
        </p>
        {/* View Details Link */}
        <Link
          to={`/book/${book.id}`}
          className="btn btn-glass mt-auto"
          aria-label={`View details for ${book.title}`}
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default BookCard;
