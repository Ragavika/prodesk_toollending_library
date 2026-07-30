import api from "./api";

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Registration failed",
      }
    );
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Login failed",
      }
    );
  }
};