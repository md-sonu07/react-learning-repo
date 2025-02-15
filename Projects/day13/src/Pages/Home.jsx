import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Home as HomeIcon, User } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl font-bold flex items-center gap-3">
        <HomeIcon size={48} className="text-yellow-400" />
        Home Page
      </h2>
      <p className="mt-4 text-xl max-w-xl text-center">
        Welcome to our premium React Router demo. Use the navigation below or the buttons to explore!
      </p>
      <div className="mt-8 flex flex-col gap-4">
        <button
          onClick={() => navigate("/about")}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 transition rounded-full font-semibold"
        >
          Go to About
        </button>
        <div className="flex justify-center gap-6">
          <Link
            to="/user/Danish"
            className="flex items-center gap-1 text-xl hover:text-yellow-300 transition"
          >
            <User size={24} />
            Danish&apos;s Profile
          </Link>
          <Link
            to="/user/John"
            className="flex items-center gap-1 text-xl hover:text-yellow-300 transition"
          >
            <User size={24} />
            John&apos;s Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
