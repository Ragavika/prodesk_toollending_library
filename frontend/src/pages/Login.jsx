import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      login(response.user, response.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

  <div className="login-card">

    <div className="login-header">

      <h1 className="login-title">
        Tool Lending Library
      </h1>

      <p className="login-subtitle">
        Sign in to access your inventory dashboard
      </p>

    </div>

    {error && (
      <p className="error-message">
        {error}
      </p>
    )}

    <form
      onSubmit={handleSubmit}
      className="login-form"
    >

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
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          aria-label="Password"
          required
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="login-btn"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

    </form>

    <div className="login-footer">

      <p>
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>

    </div>

  </div>

</div>
  );
};

export default Login;