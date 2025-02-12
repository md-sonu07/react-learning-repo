import { useState, useEffect } from "react";

function EffectWithDependencies() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <p className="text-xl mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
      >
        Increase
      </button>
    </div>
  );
}

export default EffectWithDependencies;
