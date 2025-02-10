import { useState } from "react";
import { Mail, XCircle, Send } from "lucide-react"; // Importing icons

function FormSubmit() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${email}`);
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-96 border border-gray-700">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-400 flex items-center space-x-2">
          <Mail size={28} className="text-blue-500" />
          <span>Subscribe to Newsletter</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 w-full space-y-4">
          {/* Input Field with Clear Button */}
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 pl-4 pr-12 text-white rounded-lg focus:outline-none  ring-2 focus:ring-blue-500 ring-blue-400 bg-gray-800"
              required
            />
            {/* Clear Button */}
            {email && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
                onClick={() => setEmail("")}
                type="button"
              >
                <XCircle size={22} />
              </button>
            )}
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

export default FormSubmit;
