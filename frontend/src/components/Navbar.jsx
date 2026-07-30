import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">

      {/* Left Section */}
      <div className="navbar-left">
        <h1 className="navbar-title">
          Tool Lending Library
        </h1>

        <p className="navbar-subtitle">
          Inventory Management Dashboard
        </p>
      </div>

      {/* Right Section */}
      <div className="navbar-right">

        <div className="user-info">
          <h3 className="user-name">
            {user?.name || "User"}
          </h3>

          <p className="user-role">
            Library Staff
          </p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
          aria-label="Logout"
        >
          Logout
        </button>

      </div>
    </header>
  );
};

export default Navbar;