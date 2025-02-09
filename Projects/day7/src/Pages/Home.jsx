import { Rocket, Briefcase, Users, Star } from "lucide-react";

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-400">🚀 Welcome to MyWebsite</h1>
        <p className="mt-4 text-gray-300 text-lg">Your one-stop solution for amazing services.</p>
      </header>

      {/* Feature Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <Rocket size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Fast & Reliable</h3>
          <p className="text-gray-400 mt-2">We provide top-notch services with great speed and reliability.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <Briefcase size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Professional Services</h3>
          <p className="text-gray-400 mt-2">Expert professionals delivering high-quality solutions.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <Users size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Trusted by Many</h3>
          <p className="text-gray-400 mt-2">Thousands of customers trust us for their needs.</p>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="mt-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1674817242898-3d1b697d707d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
          style={{ height: "500px"}}
          className="rounded-lg shadow-lg w-full md:w-1/3 cursor-pointer hover:scale-105 transition"
        />
        <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-green-400">Why Choose Us?</h2>
          <p className="text-gray-400 mt-4">
            We are dedicated to providing the best services with a focus on customer satisfaction and cutting-edge technology.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="text-center py-6 mt-16 bg-gray-800">
        <p className="text-gray-400">© 2025 MyWebsite | All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Home;
