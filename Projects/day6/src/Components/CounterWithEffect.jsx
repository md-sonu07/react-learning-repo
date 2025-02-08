import { useState, useEffect } from "react";

function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Count changed: ${count}`);
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Counter</h2>
        <p className="text-xl font-bold my-4">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 m-4 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          Decrease
        </button>
        <p className="text-sm text-gray-500 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default CounterWithEffect;
