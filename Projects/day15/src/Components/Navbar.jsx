import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();  // Hook for navigation

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      navigate("/");  // Redirect to the home page if the input is empty
      return;
    }

    navigate(`/search/${searchQuery}`);  // Navigate to the search results page
  };

  return (
    <nav className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg border-b border-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">🎬 Movie Explorer</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:bg-opacity-10 transition">Home</Link>
                <Link to="/movies" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:bg-opacity-10 transition">Movies</Link>
                <Link to="/tv-shows" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:bg-opacity-10 transition">TV Shows</Link>
                <Link to="/watchlist" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black hover:bg-opacity-10 transition">Watchlist</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="w-64 px-4 py-2 text-gray-200 bg-black bg-opacity-30 rounded-full border border-gray-600 focus:outline-none focus:ring-1 focus:ring-white/70 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-[3px] mt-2 mr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-10 transition">Home</Link>
            <Link to="/movies" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-10 transition">Movies</Link>
            <Link to="/tv-shows" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-10 transition">TV Shows</Link>
            <Link to="/watchlist" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-10 transition">Watchlist</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
