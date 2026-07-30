import mongoose from "mongoose";

const toolSchema = new mongoose.Schema(
  {
    toolName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    condition: {
      type: String,
      enum: ["New", "Good", "Fair", "Poor"],
      default: "Good",
    },

    status: {
      type: String,
      enum: ["Available", "Borrowed", "Maintenance"],
      default: "Available",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tool = mongoose.model("Tool", toolSchema);

export default Tool;