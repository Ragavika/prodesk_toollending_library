import api from "./api";

// Get All Tools
export const getAllTools = async () => {
  try {
    const response = await api.get("/tools");

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch tools",
      }
    );
  }
};

// Get Tool By ID
export const getToolById = async (id) => {
  try {
    const response = await api.get(`/tools/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch tool",
      }
    );
  }
};

// Create Tool
export const createTool = async (toolData) => {
  try {
    const response = await api.post("/tools", toolData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to create tool",
      }
    );
  }
};

// Update Tool
export const updateTool = async (id, toolData) => {
  try {
    const response = await api.put(`/tools/${id}`, toolData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to update tool",
      }
    );
  }
};

// Delete Tool
export const deleteTool = async (id) => {
  try {
    const response = await api.delete(`/tools/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to delete tool",
      }
    );
  }
};