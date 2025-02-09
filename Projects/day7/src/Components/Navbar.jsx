import { Link } from "react-router-dom";
import { Home, Info, Mail, Briefcase , Users } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-400 cursor-pointer">🚀 MyWebsite</Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link to="/about" className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
            <Info size={20} />
            <span className="font-medium">About</span>
          </Link>

          <Link to="/contact" className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
            <Mail size={20} />
            <span className="font-medium">Contact</span>
          </Link>

          <Link to="/services" className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
            <Briefcase size={20} />
            <span className="font-medium">Services</span>
          </Link>
          <Link to="/user/Danish" className="flex items-center space-x-2 text-green-400 hover:text-white transition duration-300">
            <Users size={20} />
            <span className="font-medium">Danish's Profile</span>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
