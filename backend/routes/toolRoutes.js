import express from "express";

import {
  createTool,
  getAllTools,
  getToolById,
  updateTool,
  deleteTool,
} from "../controllers/toolController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import validateTool from "../middleware/validateTool.js";

const router = express.Router();

// Create Tool
router.post("/", authMiddleware, validateTool, createTool);

// Get All Tools
router.get("/", authMiddleware, getAllTools);

// Get Single Tool
router.get("/:id", authMiddleware, getToolById);

// Update Tool
router.put("/:id", authMiddleware, validateTool, updateTool);

// Delete Tool
router.delete("/:id", authMiddleware, deleteTool);

export default router;