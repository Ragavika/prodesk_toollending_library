import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import LoadingSpinner from "../components/LoadingSpinner";

import { getToolById } from "../services/toolService";
import "./ToolDetails.css";
const ToolDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [tool, setTool] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTool();
  }, []);

  const fetchTool = async () => {
    try {
      setLoading(true);

      const response = await getToolById(id);

      setTool(response.data);
    } catch (error) {
      alert(error.message || "Failed to load tool.");

      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingSpinner />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

  <div className="tool-details-page">

    <div className="tool-details-card">

      <div className="tool-details-header">

        <div>
          <h1 className="tool-details-title">
            Tool Details
          </h1>

          <p className="tool-details-subtitle">
            View complete information about this tool.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="back-btn"
        >
          Back
        </button>

      </div>

      <div className="tool-details-grid">

        <div className="detail-item">
          <span className="detail-label">
            Tool Name
          </span>

          <span className="detail-value">
            {tool.toolName}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Category
          </span>

          <span className="detail-value">
            {tool.category}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Quantity
          </span>

          <span className="detail-value">
            {tool.quantity}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Condition
          </span>

          <span className="condition-badge">
            {tool.condition}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Status
          </span>

          <span
            className={`status-badge status-${tool.status.toLowerCase()}`}
          >
            {tool.status}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Created On
          </span>

          <span className="detail-value">
            {new Date(tool.createdAt).toLocaleDateString()}
          </span>
        </div>

      </div>

      <div className="tool-description">

        <span className="detail-label">
          Description
        </span>

        <p>
          {tool.description || "No description available."}
        </p>

      </div>

    </div>

  </div>

</DashboardLayout>
  );
};

export default ToolDetails;