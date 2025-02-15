import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-600 to-orange-700 text-white flex flex-col items-center justify-center px-4">
      <AlertTriangle size={64} className="mb-4 animate-bounce" />
      <h2 className="text-5xl font-bold">404 - Page Not Found</h2>
      <p className="mt-4 text-xl text-center max-w-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-white text-red-600 hover:bg-gray-200 transition rounded-full font-semibold"
      >
        <Home size={24} />
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
