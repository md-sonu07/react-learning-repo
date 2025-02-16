import { useEffect, useState } from "react";
import { Film } from "lucide-react";

function FetchData() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
        <Film size={32} className="text-yellow-400" />
        Movie List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-400">{movie.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchData;
