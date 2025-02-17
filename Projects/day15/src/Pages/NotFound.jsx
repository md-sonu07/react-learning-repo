import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <AlertTriangle size={80} className="text-red-500 animate-bounce" />
      <h1 className="text-6xl font-bold mt-4">404</h1>
      <h2 className="text-2xl mt-2 text-gray-400">Oops! Page Not Found</h2>
      <p className="text-gray-500 mt-4 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      {/* Go Back Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        ⬅️ Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;