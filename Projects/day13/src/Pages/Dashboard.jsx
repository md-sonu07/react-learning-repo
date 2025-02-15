import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Grid, Settings, User } from "lucide-react";

function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-5xl font-bold flex items-center gap-3 mb-8">
          <Grid size={48} className="text-yellow-400" /> Dashboard
        </h2>
        <nav className="flex justify-center gap-8 mb-10">
          <Link to="profile" className="flex items-center gap-2 text-xl hover:text-yellow-300 transition">
            <User size={24} /> Profile
          </Link>
          <Link to="settings" className="flex items-center gap-2 text-xl hover:text-yellow-300 transition">
            <Settings size={24} /> Settings
          </Link>
        </nav>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
