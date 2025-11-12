import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * BookCard Component
 *
 * Reusable card component for displaying book information.
 *
 * Props:
 * - book: { id, title, author, description, rating }
 *
 * Displays:
 * - Book title
 * - Author name
 * - Description preview (first 100 characters, with ellipsis)
 * - Rating (1 decimal place)
 * - Link to view full details
 */
const BookCard = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        {/* Book Title */}
        <h5 className="card-title">{book.title}</h5>

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
          <strong>Rating:</strong> {Number(book.rating).toFixed(1)}
        </p>

        {/* View Details Link */}
        <Link
          to={`/book/${book.id}`}
          className="btn btn-primary mt-auto"
          aria-label={`View details for ${book.title}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

// Prop validation for better maintainability
BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
};

export default BookCard;
