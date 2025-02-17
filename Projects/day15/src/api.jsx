import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Fixed env variable for Vite

const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending movies
export const fetchTrendingMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.response?.data || error.message);
    return []; // Return an empty array as a fallback
  }
};

// Fetch movie details by ID
export const fetchMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${id}:`, error.response?.data || error.message);
    return null; // Return null as a fallback
  }
};
