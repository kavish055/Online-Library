import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const initialFormState = {
  title: "",
  author: "",
  category: "",
  description: "",
  rating: "",
};

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography", "Fantasy"];

const AddBook = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.author.trim()) errs.author = "Author is required";
    if (!formData.category.trim()) errs.category = "Category is required";
    if (!formData.description.trim()) errs.description = "Description is required";
    if (formData.rating === "") {
      errs.rating = "Rating is required";
    } else if (
      isNaN(formData.rating) ||
      formData.rating < 1 ||
      formData.rating > 5
    ) {
      errs.rating = "Rating must be a number between 1 and 5";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(
        addBook({
          title: formData.title.trim(),
          author: formData.author.trim(),
          category: formData.category.trim(),
          description: formData.description.trim(),
          rating: Number(formData.rating),
        })
      );
      navigate("/books/all");
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="my-4">Add New Book</h1>
      <form onSubmit={handleSubmit} noValidate aria-label="Add new book form">
        {/* Title */}
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            value={formData.title}
            onChange={handleChange}
            autoComplete="off"
            required
            aria-required="true"
            aria-describedby="titleHelp"
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>
        {/* Author */}
        <div className="mb-3">
          <label className="form-label" htmlFor="author">
            Author
          </label>
          <input
            id="author"
            type="text"
            name="author"
            className={`form-control ${errors.author ? "is-invalid" : ""}`}
            value={formData.author}
            onChange={handleChange}
            autoComplete="off"
            required
            aria-required="true"
            aria-describedby="authorHelp"
          />
          {errors.author && (
            <div className="invalid-feedback">{errors.author}</div>
          )}
        </div>
        {/* Category */}
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className={`form-select ${errors.category ? "is-invalid" : ""}`}
            value={formData.category}
            onChange={handleChange}
            required
            aria-required="true"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <div className="invalid-feedback">{errors.category}</div>
          )}
        </div>
        {/* Description */}
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className={`form-control ${
              errors.description ? "is-invalid" : ""
            }`}
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
            aria-required="true"
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>
        {/* Rating */}
        <div className="mb-3">
          <label className="form-label" htmlFor="rating">
            Rating (1 to 5)
          </label>
          <input
            id="rating"
            type="number"
            name="rating"
            className={`form-control ${errors.rating ? "is-invalid" : ""}`}
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
            required
            aria-required="true"
          />
          {errors.rating && (
            <div className="invalid-feedback">{errors.rating}</div>
          )}
        </div>
        {/* Submit Button */}
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Add Book
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddBook;
