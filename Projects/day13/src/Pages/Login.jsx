import React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl font-bold mb-4 flex items-center gap-3">
        <LogIn size={48} className="text-yellow-400" /> Login
      </h2>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition"
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
