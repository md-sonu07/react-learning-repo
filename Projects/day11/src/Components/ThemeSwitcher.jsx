import React from "react";
import useLocalStorage from "./useLocalStorage";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center transition-all duration-300`}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <div className="bg-gray-800 w-full max-w-4xl p-8 rounded-lg shadow-lg text-center mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Current Theme: {theme}</h2>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
