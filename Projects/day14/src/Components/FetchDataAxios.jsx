import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

function FetchDataAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">
        <p className="text-xl font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-8">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center mb-4">
              <User size={32} className="text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold">{user.name}</h3>
            </div>
            <p className="text-gray-400">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Company:</span> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchDataAxios;
