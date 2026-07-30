import { useState } from "react";
import "./ToolForm.css";

const ToolForm = ({
  initialValues = {
    toolName: "",
    category: "",
    description: "",
    quantity: "",
    condition: "Good",
    status: "Available",
  },
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.toolName.trim()) {
      validationErrors.toolName = "Tool name is required";
    }

    if (!formData.category.trim()) {
      validationErrors.category = "Category is required";
    }

    if (
      formData.quantity === "" ||
      Number(formData.quantity) < 0
    ) {
      validationErrors.quantity =
        "Quantity must be greater than or equal to 0";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);
  };

 return (
  <div className="tool-form-container">

    <h2 className="tool-form-title">
      Tool Information
    </h2>

    <p className="tool-form-subtitle">
      Fill in the details below to add or update a tool.
    </p>

    <form
      onSubmit={handleSubmit}
      className="tool-form"
    >

      <div className="form-row">

        {/* Tool Name */}

        <div className="form-group">
          <label>Tool Name</label>

          <input
            type="text"
            name="toolName"
            value={formData.toolName}
            onChange={handleChange}
            aria-label="Tool Name"
          />

          {errors.toolName && (
            <p className="error-message">
              {errors.toolName}
            </p>
          )}
        </div>

        {/* Category */}

        <div className="form-group">
          <label>Category</label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            aria-label="Category"
          />

          {errors.category && (
            <p className="error-message">
              {errors.category}
            </p>
          )}
        </div>

      </div>

      {/* Description */}

      <div className="form-group">

        <label>Description</label>

        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          aria-label="Description"
        />

      </div>

      <div className="form-row">

        {/* Quantity */}

        <div className="form-group">

          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            min="0"
            value={formData.quantity}
            onChange={handleChange}
            aria-label="Quantity"
          />

          {errors.quantity && (
            <p className="error-message">
              {errors.quantity}
            </p>
          )}

        </div>

        {/* Condition */}

        <div className="form-group">

          <label>Condition</label>

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            aria-label="Condition"
          >
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>

        </div>

      </div>

      {/* Status */}

      <div className="form-group">

        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          aria-label="Status"
        >
          <option value="Available">Available</option>
          <option value="Borrowed">Borrowed</option>
          <option value="Maintenance">Maintenance</option>
        </select>

      </div>

      {/* Buttons */}

      <div className="form-actions">

        <button
          type="button"
          className="cancel-btn"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? "Saving..." : "Save Tool"}
        </button>

      </div>

    </form>

  </div>
);
};

export default ToolForm;