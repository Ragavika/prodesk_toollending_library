const validateTool = (req, res, next) => {
  const {
    toolName,
    category,
    quantity,
    condition,
    status,
  } = req.body;

  const errors = {};

  // Tool Name Validation
  if (!toolName || toolName.trim() === "") {
    errors.toolName = "Tool name is required";
  }

  // Category Validation
  if (!category || category.trim() === "") {
    errors.category = "Category is required";
  }

  // Quantity Validation
  if (quantity === undefined || quantity === null || quantity === "") {
    errors.quantity = "Quantity is required";
  } else if (isNaN(quantity) || Number(quantity) < 0) {
    errors.quantity = "Quantity must be a positive number";
  }

  // Condition Validation
  const validConditions = [
    "New",
    "Good",
    "Fair",
    "Poor",
  ];

  if (!condition) {
    errors.condition = "Condition is required";
  } else if (!validConditions.includes(condition)) {
    errors.condition =
      "Condition must be New, Good, Fair, or Poor";
  }

  // Status Validation
  const validStatuses = [
    "Available",
    "Borrowed",
    "Maintenance",
  ];

  if (!status) {
    errors.status = "Status is required";
  } else if (!validStatuses.includes(status)) {
    errors.status =
      "Status must be Available, Borrowed, or Maintenance";
  }

  // Return Validation Errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  next();
};

export default validateTool;