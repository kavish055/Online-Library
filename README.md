# Online Library System

A React-based online library application built with Vite, Redux, React Router, and Bootstrap.

## Features

- **Home Page**: Welcome message, book categories, and popular books display
- **Browse Books**: Filter books by category and search by title or author
- **Book Details**: View detailed information about selected books
- **Add Book**: Add new books with form validation (title, author, category, description, rating)
- **404 Page**: Handle undefined routes with a user-friendly error page
- **State Management**: Redux for managing the books list across the application

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.4.9
- **State Management**: Redux & Redux Toolkit
- **Routing**: React Router DOM 6.21.2
- **Styling**: Bootstrap 5.3.2
- **Node Version**: 14.0+ or higher

## Prerequisites

- Node.js (14.0 or higher)
- npm or yarn package manager

## Installation

1. Extract the project folder
2. Navigate to the project directory:
   \`\`\`bash
   cd online-library
   \`\`\`
3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Running the Application

Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:5173` (or the port displayed in your terminal).

## Building for Production

To create an optimized production build:
\`\`\`bash
npm run build
\`\`\`

To preview the production build locally:
\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
online-library/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar component
│   │   ├── BookCard.jsx         # Reusable book card component
│   │   └── SearchBar.jsx        # Search functionality component
│   ├── pages/
│   │   ├── Home.jsx             # Home page with categories and popular books
│   │   ├── BrowseBooks.jsx      # Browse and filter books page
│   │   ├── BookDetails.jsx      # Individual book details page
│   │   ├── AddBook.jsx          # Add new book page with form validation
│   │   └── NotFound.jsx         # 404 error page
│   ├── redux/
│   │   ├── store.js             # Redux store configuration
│   │   └── booksSlice.js        # Redux slice for books state management
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML entry file
├── package.json                 # Project dependencies and scripts
└── vite.config.js              # Vite configuration
\`\`\`

## Usage

### Home Page
- Navigate to "/" to see the home page
- View book categories as buttons
- See popular books ranked by rating

### Browse Books
- Click on a category to filter books by category
- Use the search bar to filter by title or author
- Click "View Details" to see full book information

### Add Book
- Navigate to the "Add Book" page from the navbar
- Fill in the form with book details:
  - Title (required)
  - Author (required)
  - Category (required)
  - Description (required)
  - Rating (1-5, required)
- Submit the form - validation ensures all fields are correct
- Redirects to Browse page with the newly added book at the beginning

### View Book Details
- Click "View Details" on any book card
- See complete information: title, author, category, description, and rating
- Use "Back to Browse" button to return to the book list

### 404 Page
- Any undefined route displays the 404 page
- Shows the invalid URL that was requested
- Navbar is hidden to keep the error page clean
- Click "Go to Home" to return to the home page

## Features Breakdown

### Redux State Management
The application uses Redux Toolkit for managing the books list. The `booksSlice` contains:
- Initial dummy data with sample books
- `addBook` action to add new books with auto-generated IDs
- Books are added to the beginning of the list after submission

### Form Validation
The Add Book form includes validation for:
- Required fields (no empty inputs)
- Rating must be a number between 1-5

### Dynamic Routing
- Category filter: `/books/:category`
- Book details: `/book/:id`
- Handles invalid routes gracefully

### Responsive Design
- Bootstrap grid system for responsive layouts
- Mobile-friendly navigation bar
- Flexible card layouts on all screen sizes

## Notes

- Dummy data is pre-populated in Redux store
- All books are stored in client-side state (Redux)
- No backend or database integration in this version
- Refresh page will reset books to initial state (except newly added ones in the session)


## Troubleshooting

If you encounter any issues:

1. **Port already in use**: Vite will use the next available port
2. **Module not found errors**: Run `npm install` again
3. **Redux not working**: Ensure the Redux Provider wraps the entire app in main.jsx
4. **Styling not applied**: Check that Bootstrap CSS is imported in main.jsx

## Future Enhancements

- Backend integration with a database
- User authentication and profiles
- Book reviews and ratings from users
- Wishlist functionality
- Advanced filtering options
- Pagination for large book lists
