import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ToolForm from "../components/ToolForm";
import { createTool } from "../services/toolService";

const AddTool = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleAddTool = async (toolData) => {
    try {
      setLoading(true);

      await createTool(toolData);

      alert("Tool added successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Failed to add tool.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Add New Tool
        </h1>

        <p className="text-gray-600 mb-8">
          Fill in the details below to add a new tool to the library.
        </p>

        <ToolForm
          onSubmit={handleAddTool}
          loading={loading}
        />
      </div>
    </DashboardLayout>
  );
};

export default AddTool;