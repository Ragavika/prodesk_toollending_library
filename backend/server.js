import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import toolRoutes from "./routes/toolRoutes.js";
import connectDB from "./config/db.js";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tools", toolRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) {
      return next();
    }
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Tool Lending Library API is Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});