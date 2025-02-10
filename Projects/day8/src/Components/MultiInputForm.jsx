import { useState } from "react";
import { User, Mail, Send } from "lucide-react"; // Importing icons

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "" }); // Clear input fields after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-96 border border-gray-700">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-400">User Registration</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 w-full space-y-4">
          {/* Name Field */}
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 pl-10 text-white rounded-lg focus:outline-none ring-2 focus:ring-blue-500 ring-blue-400 bg-gray-800"
              required
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
          </div>

          {/* Email Field */}
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 pl-10 text-white rounded-lg focus:outline-none ring-2 focus:ring-blue-500 ring-blue-400 bg-gray-800"
              required
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-lg text-white font-semibold shadow-md space-x-2"
          >
            <Send size={20} />
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MultiInputForm;
