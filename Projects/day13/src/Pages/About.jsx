
import React from "react";
import { Info, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-600 to-teal-700 text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl font-bold flex items-center gap-3">
        <Info size={48} className="text-white" />
        About Page
      </h2>
      <p className="mt-4 text-xl max-w-2xl text-center">
        Our application demonstrates how to implement React Router with a premium UI. Enjoy the seamless transitions and modern design.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-white text-green-700 hover:bg-gray-200 transition rounded-full font-semibold"
      >
        <ArrowLeft size={24} />
        Go Back
      </button>
    </div>
  );
}

export default About;
