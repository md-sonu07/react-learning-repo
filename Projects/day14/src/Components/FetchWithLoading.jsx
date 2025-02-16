import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

function FetchWithLoading() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-2xl font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-400">
        <p className="text-2xl font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">ToDo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-2xl transition-all"
          >
            {item.completed ? (
              <CheckCircle size={24} className="text-green-400" />
            ) : (
              <XCircle size={24} className="text-red-400" />
            )}
            <p className="text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchWithLoading;
