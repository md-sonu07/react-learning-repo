import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Sun, Moon } from "lucide-react"; // Icons for dark/light mode

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext); // Access context

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
        <p className="text-lg font-semibold">Current Theme: {theme}</p>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex items-center mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
        >
          {theme === "light" ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
