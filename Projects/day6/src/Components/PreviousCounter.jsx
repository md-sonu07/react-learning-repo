import { useState, useEffect, useRef } from "react";

function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // Store previous value
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Counter Tracker
        </h2>
        <p className="text-lg text-green-600 font-medium">Current: {count}</p>
        <p className="text-lg text-gray-500">Previous: {prevCount.current}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default PreviousCounter;
