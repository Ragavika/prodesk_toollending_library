import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteModal from "./DeleteModal";
import { deleteTool } from "../services/toolService";

import "./ToolTable.css";

const ToolTable = ({ tools, refreshTools }) => {
  const navigate = useNavigate();

  const [selectedTool, setSelectedTool] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const openDeleteModal = (tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedTool(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteTool(selectedTool._id);

      closeDeleteModal();
      refreshTools();
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to delete tool.");
    } finally {
      setLoading(false);
    }
  };

  if (tools.length === 0) {
    return (
      <div className="tool-table-container">
        <div className="no-tools">
          No tools available.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="tool-table-container">

        <table className="tool-table">

          <thead>
            <tr>
              <th>Tool Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {tools.map((tool) => (
              <tr key={tool._id}>

                <td>
                  <span className="tool-name">
                    {tool.toolName}
                  </span>
                </td>

                <td>
                  {tool.category}
                </td>

                <td>
                  {tool.quantity}
                </td>

                <td>
                  <span className="condition">
                    {tool.condition}
                  </span>
                </td>

                <td>
                  <span
                    className={`status ${tool.status.toLowerCase()}`}
                  >
                    {tool.status}
                  </span>
                </td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="btn-view"
                      onClick={() =>
                        navigate(`/tools/${tool._id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn-edit"
                      onClick={() =>
                        navigate(`/tools/edit/${tool._id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() =>
                        openDeleteModal(tool)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <DeleteModal
        isOpen={showModal}
        toolName={selectedTool?.toolName}
        loading={loading}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default ToolTable;