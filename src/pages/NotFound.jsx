import React from "react";
import { useLocation, Link } from "react-router-dom";

/**
 * NotFound (404) Page Component
 *
 * Displayed when the user navigates to an undefined route.
 *
 * Features:
 * - Shows a 404 error message
 * - Displays the invalid requested URL
 * - No navbar for a clean error page
 * - Provides a link to return to the home page
 */
const NotFound = () => {
  const location = useLocation();

  return (
    <main className="container text-center my-5" aria-label="404 Page Not Found">
      {/* 404 Error Title */}
      <h1>404 - Page Not Found</h1>

      {/* Display the invalid URL */}
      <p>
        The requested URL <code>{location.pathname}</code> was not found on this server.
      </p>

      {/* Link back to Home page */}
      <Link to="/" className="btn btn-primary" aria-label="Go to Home">
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;
