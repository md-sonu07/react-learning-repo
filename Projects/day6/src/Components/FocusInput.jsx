import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus(); // Directly focus input
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Click to Focus Input
        </h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition outline-none"
        />
        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default FocusInput;
