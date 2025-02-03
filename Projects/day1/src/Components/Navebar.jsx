import React from 'react'

function Navebar() {
    return (
        <nav className="bg-[#1a202c] text-[#e2e8f0] p-4 fixed w-full  shadow-lg">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-3xl cursor-pointer font-bold text-[#64ffdb]">
              Logo!
            </div>
      
            {/* Menu Items */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#64ffdb] transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-[#64ffdb] transition-colors duration-300">About</a>
              <a href="#services" className="hover:text-[#64ffdb] transition-colors duration-300">Services</a>
              <a href="#portfolio" className="hover:text-[#64ffdb] transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="hover:text-[#64ffdb] transition-colors duration-300">Contact</a>
            </div>
      
            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="px-4 py-2 rounded-md bg-[#2d3748] text-[#e2e8f0] focus:outline-none focus:ring-1 focus:ring-[#64ffdb] placeholder:text-[#e2e8f0]"
              />
              <button className="px-6 py-2 cursor-pointer rounded-md bg-[#64ffdb] text-[#1a202c] hover:bg-[#48c2b4] transition-colors duration-300">
                Search
              </button>
            </div>
            <div className=' flex items-center space-x-4'>
                <button className='px-6 py-2 cursor-pointer rounded-md border-2 border-[#64ffdb] text-[#00ffe1] hover:bg-[#48c2b4] transition-colors duration-300'>Login</button>
                <button className='rounded-full  p-2 cursor-pointer border-2 border-[#64ffdb] bg-[#cbd4d2] text-[#1a202c] hover:bg-[#48c2b4] transition-colors duration-300'>ME</button>
            </div>
          </div>
        </nav>
      );
      
}

export default Navebar