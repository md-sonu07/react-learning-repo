import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(false); // false = Light, true = Dark

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
        theme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-semibold mb-4">
        {theme ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={() => setTheme(!theme)}
        className="flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-full shadow-lg transition-all duration-300 
        bg-blue-500 text-white hover:bg-blue-600"
      >
        {theme ? <Sun size={20} /> : <Moon size={20} />}
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle