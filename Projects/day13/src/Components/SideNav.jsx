import { Link } from "react-router-dom";
import { Home, Info, Phone, Grid } from "lucide-react";

function SideNav() {
  return (
    <aside className="md:w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl fixed top-0 left-0 p-6">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 cursor-pointer hover:text-white transition duration-300  text-yellow-400">
          
            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>

        <span className="text-2xl font-bold text-white hidden md:inline-block ml-2 cursor-pointer hover:text-yellow-400 transition duration-300">WebApp</span>
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 max-md:justify-center max-md:items-center">
        <Link
          to="/"
          className="group relative text-lg text-gray-300 hover:text-yellow-400 transition flex items-center"
        >
          <Home size={20} />
          <span className="hidden md:inline-block ml-2 ">Home</span>
          <span className="hidden md:block absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          to="/about"
          className="group relative text-lg text-gray-300 hover:text-yellow-400 transition flex items-center"
        >
          <Info size={20} />
          <span className="hidden md:inline-block ml-2">About</span>
          <span className="hidden md:block absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          to="/contact"
          className="group relative text-lg text-gray-300 hover:text-yellow-400 transition flex items-center"
        >
          <Phone size={20} />
          <span className="hidden md:inline-block ml-2">Contact</span>
          <span className="hidden md:block absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          to="/dashboard"
          className="group relative text-lg text-gray-300 hover:text-yellow-400 transition flex items-center"
        >
          <Grid size={20} />
          <span className="hidden md:inline-block ml-2">Dashboard</span>
          <span className="hidden md:block absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>
    </aside>
  );
}

export default SideNav;
