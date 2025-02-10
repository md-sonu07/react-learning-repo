import { useState } from "react";
import { Palette } from "lucide-react"; // Importing an icon

function SelectForm() {
  const [color, setColor] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 w-80 text-center">
        {/* Header */}
        <h2 className="text-xl font-bold text-blue-400 flex items-center justify-center space-x-2">
          <Palette size={24} className="text-blue-500" />
          <span>Select a Color</span>
        </h2>

        {/* Select Dropdown */}
        <div className="mt-5">
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none ring-2 focus:ring-blue-500 ring-blue-400"
          >
            <option value="">Choose a color</option>
            <option value="Red" className="text-red-500">Red</option>
            <option value="Blue" className="text-blue-500">Blue</option>
            <option value="Green" className="text-green-500">Green</option>
          </select>
        </div>

        {/* Selected Color Display */}
        <p className="mt-4 text-lg font-semibold">
          Selected Color:{" "}
          <span
            className={`${
              color === "Red"
                ? "text-red-500"
                : color === "Blue"
                ? "text-blue-500"
                : color === "Green"
                ? "text-green-500"
                : "text-gray-400"
            }`}
          >
            {color || "None"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SelectForm;
