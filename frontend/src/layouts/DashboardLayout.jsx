import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;