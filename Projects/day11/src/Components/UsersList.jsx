import React from "react";
import useFetch from "./useFetch";

function UsersList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading)
    return (
      <div className="w-full flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="w-full flex items-center justify-center min-h-screen bg-gray-900 text-red-400">
        <p className="text-xl font-semibold">Error loading data.</p>
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Users List</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-400">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
