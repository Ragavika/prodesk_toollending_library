import { useNavigate } from "react-router-dom";

const ToolCard = ({ tool, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-start mb-4">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {tool.toolName}
          </h2>

          <p className="text-gray-500">
            {tool.category}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            tool.status === "Available"
              ? "bg-green-100 text-green-700"
              : tool.status === "Borrowed"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {tool.status}
        </span>

      </div>

      <p className="text-gray-600 mb-4">
        {tool.description || "No description available."}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div>
          <p className="text-sm text-gray-500">
            Quantity
          </p>

          <p className="font-semibold">
            {tool.quantity}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Condition
          </p>

          <p className="font-semibold">
            {tool.condition}
          </p>
        </div>

      </div>

      <div className="flex gap-3">

        <button
          onClick={() => navigate(`/tools/${tool._id}`)}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          aria-label={`View ${tool.toolName}`}
        >
          View
        </button>

        <button
          onClick={() => navigate(`/tools/edit/${tool._id}`)}
          className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          aria-label={`Edit ${tool.toolName}`}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(tool)}
          className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          aria-label={`Delete ${tool.toolName}`}
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default ToolCard;