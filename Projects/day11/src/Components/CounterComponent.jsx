import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10); // Initial value = 10

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 w-full max-w-4xl p-8 rounded-lg shadow-lg text-center mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Counter: {count}</h2>
        <div className="flex gap-6 justify-center">
          <button
            onClick={increment}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
          >
            ➕ Increase
          </button>
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition"
          >
            ➖ Decrease
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded transition"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;
