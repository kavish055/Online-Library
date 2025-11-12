import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store";

// Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
// Custom global styles
import "./index.css";

/**
 * Entry point for the React application.
 *
 * Wraps the app with:
 * 1. React.StrictMode - For development checks and warnings
 * 2. Redux Provider - Provides Redux store to application
 * 3. BrowserRouter - Enables client-side routing
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
