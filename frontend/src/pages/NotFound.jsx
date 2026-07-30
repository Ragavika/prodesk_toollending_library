import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-lg">

        <h1 className="text-7xl font-bold text-gray-800">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Go to Dashboard
        </Link>

      </div>

    </div>
  );
};

export default NotFound;