import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pb-6 pt-20">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl mb-4">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm">&copy; 2025 <b className="text-white">MyWebsite</b> | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
