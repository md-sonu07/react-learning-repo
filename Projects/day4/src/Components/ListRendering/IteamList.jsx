import React from "react";

function ItemList() {
  const items = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Fruit List</h2>
        <p className="text-gray-600 text-center mb-4">Iteam Lists</p>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-blue-500 text-white font-medium p-3 rounded-lg text-center shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
