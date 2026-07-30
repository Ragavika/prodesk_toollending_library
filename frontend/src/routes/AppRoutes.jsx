import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AddTool from "../pages/AddTool";
import EditTool from "../pages/EditTool";
import ToolDetails from "../pages/ToolDetails";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect Root */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tools/add"
        element={
          <ProtectedRoute>
            <AddTool />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tools/edit/:id"
        element={
          <ProtectedRoute>
            <EditTool />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tools/:id"
        element={
          <ProtectedRoute>
            <ToolDetails />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;