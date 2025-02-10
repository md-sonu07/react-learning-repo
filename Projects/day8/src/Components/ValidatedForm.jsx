import { useState } from "react";
import { Mail, AlertCircle, Send } from "lucide-react"; // Importing icons

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email format. Please enter a valid email.");
      return;
    }
    setError(""); // Clear error on valid submission
    alert(`Submitted Email: ${email}`);
    setEmail(""); // Reset input after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 border border-gray-700">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-400 flex items-center space-x-2">
          <Mail size={28} className="text-blue-500" />
          <span>Email Validation</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 w-full space-y-4">
          {/* Input Field */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Clear error while typing
              }}
              placeholder="Enter your email"
              className="w-full p-3 pl-4 pr-12 text-white rounded-lg focus:outline-none ring-2 focus:ring-blue-500 ring-blue-400 bg-gray-800"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 flex items-center space-x-2">
              <AlertCircle size={18} className="text-red-500" />
              <span>{error}</span>
            </p>
          )}

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

export default ValidatedForm;
