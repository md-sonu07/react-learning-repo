import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <h1 className="text-white text-2xl p-5">Loading...</h1>;

  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <div className="flex flex-col md:flex-row mt-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/4 rounded-lg shadow-lg object-cover h-96" // Adjusted size
          />
          <div className="mt-4 md:mt-0 md:ml-6">
            <p className="text-lg text-gray-300 mt-3">{movie.overview}</p>
            <div className="mt-4">
              <p className="text-sm">⭐ {movie.vote_average}</p>
              <p className="text-sm mt-2">📅 Release Date: {movie.release_date}</p>
            </div>
            <div className="mt-6">
              <a
                href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg text-lg hover:bg-teal-600 transition"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
