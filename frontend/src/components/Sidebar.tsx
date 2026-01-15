 import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

/* ✅ Menu item type */
type MenuItem = {
  name: string;
  path: string;
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const sidebarMenu: MenuItem[] = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add New Member", path: "/add" },
  ];

  return (
    <div className="bg-black text-white w-24 md:w-60 font-bold pt-4 min-h-screen">
      <h2 className="text-yellow-300 md:text-xl text-sm m-2 mb-10">
        Dashboard Menu
      </h2>

      {sidebarMenu.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          onClick={() => navigate(item.path)}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-400 block px-3 py-2 mb-2 rounded"
              : "block px-3 py-2 mb-2 rounded"
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
