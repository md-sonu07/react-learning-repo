import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
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

export default MultiInputForm;
