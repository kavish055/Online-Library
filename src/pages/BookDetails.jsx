import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  // Extract book ID from URL parameters
  const { id } = useParams();
  // For navigating back to previous page
  const navigate = useNavigate();

  // Access books from Redux store
  const books = useSelector((state) => state.books.list);

  // Find the book by ID
  const book = books.find((b) => b.id === id);

  // If book not found, show error message with back button
  if (!book) {
    return (
      <div className="container py-4">
        <h2>Book Not Found</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4" aria-label={`Details for book titled ${book.title}`}>
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

      {/* Button to go back to Browse Books */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;
