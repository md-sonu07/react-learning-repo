import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover cursor-pointer" // Added cursor-pointer
        />
      </Link>
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p>⭐ {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`} className="text-blue-400 hover:underline">View Details</Link>
    </div>
  );
};

export default MovieCard;
