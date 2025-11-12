import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar Component
 *
 * Main navigation bar displayed on all pages except 404.
 *
 * Structure:
 * - Brand/Logo
 * - Responsive menu toggle
 * - Links: Home, Browse Books, Add Book
 * - Uses Bootstrap for styling and mobile responsiveness.
 */
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      {/* App Brand/Logo */}
      <NavLink className="navbar-brand" to="/">
        Online Library
      </NavLink>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Home Link */}
          <li className="nav-item">
            <NavLink end className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          {/* Browse Books Link */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/books/all">
              Browse Books
            </NavLink>
          </li>
          {/* Add Book Link */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/add-book">
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
