import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Counter Recat Web App</h2>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 px-4 rounded-2xl transition-all duration-200 shadow-lg"
            onClick={() => setCount(count + 1)}
          >
            <Plus size={24} />
          </button>

            {/* Advanced: Functional State Updates */}
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg">Increment</button> */}
            
          <h1 className="text-4xl font-bold text-gray-900">{count}</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-2xl transition-all duration-200 shadow-lg"
            onClick={() => setCount(count - 1)}
          >
            <Minus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Counter