import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(formData);

      setSuccess(response.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

  <div className="register-card">

    <div className="register-header">

      <h1 className="register-title">
        Tool Lending Library
      </h1>

      <p className="register-subtitle">
        Create your account to start managing tools
      </p>

    </div>

    {error && (
      <p className="error-message">
        {error}
      </p>
    )}

    {success && (
      <p
        style={{
          color: "#16a34a",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {success}
      </p>
    )}

    <form
      onSubmit={handleSubmit}
      className="register-form"
    >

      <div className="form-group">

        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Full Name"
          required
        />

      </div>

      <div className="form-group">

        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email"
          required
        />

      </div>

      <div className="form-group">

        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          aria-label="Password"
          required
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="register-btn"
      >
        {loading ? "Creating Account..." : "Register"}
      </button>

    </form>

    <div className="register-footer">

      <p>
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

    </div>

  </div>

</div>
  );
};

export default Register;