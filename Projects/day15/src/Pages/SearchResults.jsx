import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import NotFound from "./NotFound";

const SearchResults = () => {
  const { query } = useParams(); // Extract the query from URL parameters
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query?.trim()) {
        setMovies([]);
        return;
      }

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setMovies([]);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (!query?.trim()) return null;

  return (
<div className="p-5 bg-gray-900 min-h-screen text-white">
  <h1 className="text-3xl font-bold text-center">Search Results for: "{query}"</h1>
  {movies.length ? (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  ) : (
    <NotFound />
  )}
</div>
  );
};

export default SearchResults;
