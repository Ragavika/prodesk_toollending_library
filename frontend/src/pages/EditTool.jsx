import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ToolForm from "../components/ToolForm";

import {
  getToolById,
  updateTool,
} from "../services/toolService";

import LoadingSpinner from "../components/LoadingSpinner";

const EditTool = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [tool, setTool] = useState(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

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

  const handleUpdateTool = async (updatedData) => {
    try {
      setSaving(true);

      await updateTool(id, updatedData);

      alert("Tool updated successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Failed to update tool.");
    } finally {
      setSaving(false);
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

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Edit Tool
        </h1>

        <p className="text-gray-600 mb-8">
          Update the tool information below.
        </p>

        <ToolForm
          initialValues={tool}
          onSubmit={handleUpdateTool}
          loading={saving}
        />

      </div>

    </DashboardLayout>
  );
};

export default EditTool;