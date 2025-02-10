import { useState } from "react";
import { XCircle, User } from "lucide-react"; // Importing icons

function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-96 border border-gray-700">
      {/* Header */}
      <h2 className="text-2xl font-bold text-blue-400 flex items-center space-x-2">
        <User size={28} className="text-blue-500" />
        <span>Enter Your Name</span>
      </h2>

      {/* Greeting Message */}
      <p className="text-gray-400 text-lg m-4">
        {name ? `Hello, ${name}! 👋` : "Type your name below"}
      </p>

      {/* Input Field with Clear Button */}
      <div className="relative w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 pl-4 pr-12 text-white rounded-lg focus:outline-none ring-2 focus:ring-blue-500 ring-blue-400 bg-gray-800"
        />

        {/* Clear Button */}
        {name && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
            onClick={() => setName("")}
          >
            <XCircle size={22} />
          </button>
        )}
      </div>

      {/* Submit Button (Just for UI) */}
      <button
        className="mt-3 bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-lg text-white font-semibold shadow-md"
      >
        Submit
      </button>
    </div>
    </div>
  );
}

export default SimpleForm;
