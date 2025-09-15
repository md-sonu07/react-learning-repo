import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-5">
      <h1 className="text-6xl font-bold text-black mb-5">404</h1>
      <h2 className="text-3xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-gray-600 mb-5">
        Oops! The page you are looking for does not exist.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#08d0e2] transition-colors"
      >
        Go Back Home
      </NavLink>
    </div>
  );
}

export default NotFound;
