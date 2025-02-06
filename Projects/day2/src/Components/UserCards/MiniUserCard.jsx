import React from "react";


const userList = [
  { name: "Alice", role: "Frontend Developer" },
  { name: "Bob", role: "Backend Developer" },
];

function MiniCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">My React App</h1>
      <div className="grid gap-6 md:grid-cols-2">
       {userList.map((user) => (
          <div key={user.name} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.role}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default MiniCard;
