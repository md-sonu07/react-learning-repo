import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: "1,00,000" },
    { id: 2, name: "Mobile", price: "20,000" },
    { id: 3, name: "Headphone", price: "2,000" },
    { id: 4, name: "Smart Watch", price: "5,000" },
    { id: 5, name: "Camera", price: "50,000" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Product List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center hover:shadow-lg transition-all"
            >
              <span className="text-lg font-semibold text-gray-700">{product.name}</span>
              <span className="text-blue-600 font-bold">{product.price} ₹</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
