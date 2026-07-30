import { Link } from "react-router-dom";
import "./EmptyState.css";
const EmptyState = ({
  title = "No Data Found",
  message = "There is nothing to display at the moment.",
  buttonText = "Add Tool",
  buttonLink = "/tools/add",
}) => {
  return (
    <div className="empty-state">

  <div className="empty-card">

    <div className="empty-icon">
      📦
    </div>

    <h2 className="empty-title">
      No Tools Found
    </h2>

    <p className="empty-description">
      There are currently no tools available.
      Add your first tool to get started.
    </p>

    <button className="empty-button">
      Add Tool
    </button>

  </div>

</div>
  );
};

export default EmptyState;