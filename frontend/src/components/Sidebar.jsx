import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Add Tool",
      path: "/tools/add",
    },
    {
      name: "View Tools",
      path: "/dashboard",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md">

      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">
          Navigation
        </h2>
      </div>

      <nav className="mt-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-4 transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;