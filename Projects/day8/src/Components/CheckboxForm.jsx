import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Importing icons

function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 w-80 text-center">
        {/* Header */}
        <h2 className="text-xl font-bold text-blue-400">Toggle Checkbox</h2>

        {/* Toggle Switch */}
        <label className="flex items-center cursor-pointer mt-4">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-12 h-6 bg-gray-600 rounded-full transition duration-300 ${isChecked ? "bg-blue-500" : "bg-gray-600"}`}></div>
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition duration-300 transform ${isChecked ? "translate-x-6" : "translate-x-0"}`}></div>
          </div>
          <span className="ml-3 text-lg">{isChecked ? "Checked" : "Unchecked"}</span>
        </label>

        {/* Status Message with Icon */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          {isChecked ? (
            <CheckCircle size={22} className="text-green-400" />
          ) : (
            <XCircle size={22} className="text-red-400" />
          )}
          <p className={`text-lg font-semibold ${isChecked ? "text-green-400" : "text-red-400"}`}>
            {isChecked ? "Checked" : "Unchecked"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckboxForm;
