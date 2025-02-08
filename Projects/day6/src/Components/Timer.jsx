import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [reset, setIsReset] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold">⏳ Timer</h2>
        <p className="text-4xl font-bold my-4">{seconds}s</p>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-6 py-2 rounded-lg font-semibold text-lg transition duration-300 ${
            isRunning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Tap for Pause" : "Tap for Resume"}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 m-4 rounded-lg font-semibold text-lg transition duration-300 bg-blue-500 hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
