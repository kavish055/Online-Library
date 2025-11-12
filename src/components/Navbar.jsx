import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Navbar Component
 *
 * Main navigation bar displayed on all pages except 404.
 *
 * Structure:
 * - Brand/Logo
 * - Responsive menu toggle
 * - Links: Home, Browse Books, Add Book
 * - Animated underline hover and fade-in effect
 */
const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/books/all", label: "Browse Books" },
    { path: "/add-book", label: "Add Book" },
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-primary mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
            {navLinks.map(({ path, label, end }) => (
              <motion.li
                className="nav-item"
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={path}
                  end={end}
                  className={({ isActive }) =>
                    `nav-link position-relative ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  {label}
                  <motion.span
                    className="nav-underline position-absolute bottom-0 start-0 end-0"
                    layoutId="underline"
                    initial={false}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
