import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-400">📞 Contact Us</h1>
        <p className="mt-4 text-gray-300 text-lg">We’d love to hear from you! Get in touch with us.</p>
      </header>

      {/* Contact Details Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <Phone size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Phone</h3>
          <p className="text-gray-400 mt-2">+123 456 7890</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <Mail size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p className="text-gray-400 mt-2">contact@mywebsite.com</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-xl text-center shadow-lg hover:scale-105 transition">
          <MapPin size={40} className="text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Location</h3>
          <p className="text-gray-400 mt-2">New York, USA</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-center text-green-400">Send Us a Message</h2>
        <form className="max-w-lg mx-auto mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          ></textarea>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2">
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </form>
      </section>

      {/* Google Maps Embed */}
      <section className="mt-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-center text-green-400">Find Us Here</h2>
        <div className="mt-6 max-w-4xl mx-auto">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094717!2d144.9537353153177!3d-37.816279742021826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df3f43f5b%3A0x2c0f917a39a52f5!2sGoogle!5e0!3m2!1sen!2s!4v1632046230868!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-16 bg-gray-800">
        <p className="text-gray-400">© 2025 MyWebsite | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
