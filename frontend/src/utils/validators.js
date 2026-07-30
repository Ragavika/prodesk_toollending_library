// Validate Login Form
export const validateLogin = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

// Validate Register Form
export const validateRegister = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

// Validate Tool Form
export const validateTool = (formData) => {
  const errors = {};

  if (!formData.toolName.trim()) {
    errors.toolName = "Tool name is required";
  }

  if (!formData.category.trim()) {
    errors.category = "Category is required";
  }

  if (
    formData.quantity === "" ||
    Number(formData.quantity) < 0
  ) {
    errors.quantity = "Quantity must be 0 or greater";
  }

  if (!formData.condition) {
    errors.condition = "Condition is required";
  }

  if (!formData.status) {
    errors.status = "Status is required";
  }

  return errors;
};