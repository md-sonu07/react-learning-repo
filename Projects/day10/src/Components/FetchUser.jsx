import { useState, useEffect } from "react";

function FetchUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        {user ? (
          <div>
          <p className="text-lg font-semibold">Name: {user.name}</p>
          <p className="text-lg font-semibold">UsearName: {user.username}</p>
          <p className="text-lg font-semibold">Email: {user.email}</p>
          <p className="text-lg font-semibold">Website: {user.website}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default FetchUser;
