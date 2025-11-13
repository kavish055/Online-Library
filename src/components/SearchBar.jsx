import React from "react";
import PropTypes from "prop-types";

/**
 * SearchBar Component
 *
 * Search input for filtering books.
 *
 * Props:
 * - searchTerm: Current search value (string)
 * - setSearchTerm: Handler to update term (function)
 *
 * Features:
 * - Real-time search
 * - Placeholder guides usage
 * - Controlled for reliable state
 * - Accessible markup for screen readers
 */
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search by title or author..."
      aria-label="Search Books"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    input/>
  </div>
);

// Prop validation
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;
