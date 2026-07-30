import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ToolTable from "../components/ToolTable";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

import { getAllTools } from "../services/toolService";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      setLoading(true);

      const response = await getAllTools();

      setTools(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const totalTools = tools.length;

  const availableTools = tools.filter(
    (tool) => tool.status === "Available"
  ).length;

  const borrowedTools = tools.filter(
    (tool) => tool.status === "Borrowed"
  ).length;

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your Tool Lending Library
          </p>
        </div>

        <button
          onClick={() => navigate("/tools/add")}
          className="bg-black text-white px-5 py-3 rounded hover:bg-gray-800"
        >
          + Add Tool
        </button>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Total Tools
          </h2>

          <p className="text-3xl font-bold mt-2">
            {totalTools}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Available
          </h2>

          <p className="text-3xl font-bold mt-2">
            {availableTools}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-500">
            Borrowed
          </h2>

          <p className="text-3xl font-bold mt-2">
            {borrowedTools}
          </p>
        </div>

      </div>

      {/* Table */}

      {loading ? (
        <LoadingSpinner />
      ) : tools.length === 0 ? (
        <EmptyState
          message="No tools found. Click 'Add Tool' to create your first tool."
        />
      ) : (
        <ToolTable
          tools={tools}
          refreshTools={fetchTools}
        />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;