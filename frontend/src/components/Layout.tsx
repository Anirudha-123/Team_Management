import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <div className="header bg-white border border-gray-300 px-4 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-600">
            Admin Dashboard
          </h3>

          <button className="px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded">
            Logout
          </button>
        </div>

        <main className="flex-1 overflow-y-auto px-10 py-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
