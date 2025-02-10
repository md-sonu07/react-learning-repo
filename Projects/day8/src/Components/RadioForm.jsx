import { useState } from "react";
import { UserCircle , User } from "lucide-react"; // Corrected the Female icon

function RadioForm() {
  const [gender, setGender] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 w-80 text-center">
        {/* Header */}
        <h2 className="text-xl font-bold text-blue-400">Select Your Gender</h2>

        {/* Radio Options */}
        <div className="mt-4 space-y-3">
          {/* Male Option */}
          <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center ${
                gender === "Male" ? "border-blue-500 bg-blue-500" : "bg-gray-700"
              }`}
            >
              {gender === "Male" && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
            </div>
            <UserCircle  size={22} className="text-blue-400" />
            <span className="text-lg">Male</span>
          </label>

          {/* Female Option */}
          <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center ${
                gender === "Female" ? "border-pink-500 bg-pink-500" : "bg-gray-700"
              }`}
            >
              {gender === "Female" && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
            </div>
            <User size={22} className="text-pink-400" /> {/* Changed to User icon */}
            <span className="text-lg">Female</span>
          </label>
        </div>

        {/* Selected Gender */}
        <p className="mt-4 text-lg font-semibold">
          Selected:{" "}
          <span className={gender === "Male" ? "text-blue-400" : "text-pink-400"}>
            {gender || "None"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default RadioForm;
