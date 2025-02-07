import React, { useState } from "react";

function FormSubmit() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevents Page reload
    alert(`Submitted Name: ${name}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Enter Your Name</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSubmit;
