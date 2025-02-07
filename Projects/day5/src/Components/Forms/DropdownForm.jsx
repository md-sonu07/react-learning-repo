import { useState } from "react";

function DropdownForm() {
  const [country, setCountry] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-8">
          Selected Country: <span className="text-blue-500">{country}</span>
        </h2>
        <form className="space-y-4">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>Choose Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default DropdownForm;
