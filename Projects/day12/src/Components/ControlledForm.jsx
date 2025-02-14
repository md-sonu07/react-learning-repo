import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Enter Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Type your name..."
        />
        <p className="mt-3 text-center text-lg">Typed: <span className="text-blue-400">{name}</span></p>
      </div>
    </div>
  );
}

export default ControlledForm;
