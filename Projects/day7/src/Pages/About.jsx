import { Users, Target, Info, Briefcase } from "lucide-react";

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-16">
        <Info size={50} className="text-green-400 mx-auto" />
        <h1 className="text-4xl font-bold text-green-400">ℹ️ About Us</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Learn more about who we are and what we do.
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-green-400">Who We Are</h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          We are a passionate team dedicated to providing the best solutions in
          the industry. Our mission is to deliver top-notch services with
          innovation, quality, and reliability. Founded in 2025, we have helped
          numerous clients achieve their goals through our expertise.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mt-16 max-w-4xl mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-green-400 flex items-center space-x-2">
          <Target size={28} /> <span>Our Mission</span>
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Our mission is to create cutting-edge solutions that empower
          businesses and individuals to succeed in the digital era.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="mt-16 max-w-4xl mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-green-400 flex items-center space-x-2">
          <Users size={28} /> <span>Meet Our Team</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <Briefcase size={40} className="text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-400 mt-2">CEO & Founder</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <Briefcase size={40} className="text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-400 mt-2">CTO & Lead Developer</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
            <Briefcase size={40} className="text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Michael Brown</h3>
            <p className="text-gray-400 mt-2">Project Manager</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-16 bg-gray-800">
        <p className="text-gray-400">© 2025 MyWebsite | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
