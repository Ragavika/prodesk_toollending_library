const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  let statusCode = err.statusCode || 500;

  let message = err.message || "Internal Server Error";

  // Mongoose Invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 404;
    message = "Resource not found";
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;