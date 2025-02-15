import React from "react";
import { useParams, Link } from "react-router-dom";
import { User } from "lucide-react";

function UserProfile() {
  const { username } = useParams();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-600 to-blue-800 text-white flex flex-col items-center justify-center px-4">
      <User size={64} className="mb-4 text-yellow-400" />
      <h2 className="text-5xl font-bold">Profile of {username}</h2>
      <p className="mt-4 text-xl text-center max-w-lg">
        This page displays the dynamic profile for <span className="font-semibold">{username}</span>.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 hover:bg-gray-200 transition rounded-full font-semibold"
      >
        <User size={24} />
        Back to Home
      </Link>
    </div>
  );
}

export default UserProfile;
