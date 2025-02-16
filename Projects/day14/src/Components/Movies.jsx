import { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((res) => {
        setMovies(res.data.slice(0, 12)); // Show first 12 movies
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const openModal = (movie) => setSelectedMovie(movie);
  const closeModal = () => setSelectedMovie(null);

  const watchTrailer = (movieName) => {
    const query = encodeURIComponent(`${movieName} official trailer`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-cyan-800">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-white"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-800 text-white p-8">
      <h2 className="text-4xl max-md:text-3xl font-bold text-center mb-6">🎬 Trending Movies</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-2xl   p-3 text-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20 hover:scale-105 transition transform duration-300 cursor-pointer animate-fade-in"
            onClick={() => openModal(movie)}
          >
            <img
              src={movie.image?.medium || "https://via.placeholder.com/210x295"}
              alt={movie.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center bg-gray-900">
              <h3 className="text-lg font-semibold">{movie.name}</h3>
              <p className="text-gray-300 text-sm">{movie.language}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4 animate-fade-in"
        >
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg relative w-full max-w-3xl flex flex-col md:flex-row transition-all duration-300">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-xl"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Movie Image */}
            <img
              src={selectedMovie.image?.original || "https://via.placeholder.com/210x295"}
              alt={selectedMovie.name}
              className="w-full md:w-1/2 h-64 md:h-96 object-cover rounded-lg"
            />

            {/* Movie Details */}
            <div className="p-4 md:p-8 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold my-2">{selectedMovie.name}</h3>
              <p className="text-gray-400 text-sm">
                {selectedMovie.language} | ⭐ {selectedMovie.rating?.average || "N/A"}
              </p>
              <p className="text-gray-300 mt-2 text-sm">{selectedMovie.genres.join(", ")}</p>
              <p className="mt-4 text-gray-200 text-sm leading-normal max-h-40 overflow-auto">
                {selectedMovie.summary.replace(/<[^>]+>/g, "")}
              </p>

              {/* Watch Trailer Button */}
              <button
                className="mt-4 w-full md:w-60 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
                onClick={() => watchTrailer(selectedMovie.name)}
              >
                🎥 Watch Trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
