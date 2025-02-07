import { useState } from "react";

function RadioForm() {
  const [gender, setGender] = useState("Male");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Select Gender: <span className="text-blue-500">{gender}</span>
        </h2>
        <form className="space-y-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              className="w-5 h-5 transition"
            />
            <span className="text-gray-700 font-medium">Male</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="w-5 h-5 transition"
            />
            <span className="text-gray-700 font-medium">Female</span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default RadioForm;
