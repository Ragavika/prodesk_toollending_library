import Tool from "../models/Tool.js";
import xss from "xss";
import logAnalytics from "../utils/analytics.js";

// Create Tool
export const createTool = async (req, res) => {
  try {
    const {
      toolName,
      category,
      description,
      quantity,
      condition,
      status,
    } = req.body;

    if (
      !toolName ||
      !category ||
      quantity === undefined ||
      !condition ||
      !status
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const tool = await Tool.create({
      toolName: xss(toolName),
      category: xss(category),
      description: xss(description || ""),
      quantity,
      condition,
      status,
      createdBy: req.user.id,
    });

    logAnalytics("Create Tool");

    res.status(201).json({
      success: true,
      message: "Tool created successfully",
      data: tool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Tools
export const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    if (tools.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No data found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      count: tools.length,
      data: tools,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Tool
export const getToolById = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    if (tool.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    res.status(200).json({
      success: true,
      data: tool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Tool
export const updateTool = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    if (tool.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const updatedTool = await Tool.findByIdAndUpdate(
      req.params.id,
      {
        toolName: xss(req.body.toolName),
        category: xss(req.body.category),
        description: xss(req.body.description || ""),
        quantity: req.body.quantity,
        condition: req.body.condition,
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    logAnalytics("Update Tool");

    res.status(200).json({
      success: true,
      message: "Tool updated successfully",
      data: updatedTool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Tool
export const deleteTool = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    if (tool.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await tool.deleteOne();

    logAnalytics("Delete Tool");

    res.status(200).json({
      success: true,
      message: "Tool deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};