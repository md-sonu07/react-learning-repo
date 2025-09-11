import React, { useState } from 'react';

function ArrowBar() {
  const [color, setColor] = useState('black');

  // all colors in one place for mapping
  const colors = [
    { name: 'Red', value: 'red', class: 'bg-red-500 hover:bg-red-600' },
    { name: 'Green', value: 'green', class: 'bg-green-500 hover:bg-green-600' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Yellow', value: 'yellow', class: 'bg-yellow-500 hover:bg-yellow-600' },
    { name: 'Orange', value: 'orange', class: 'bg-orange-500 hover:bg-orange-600' },
    { name: 'Pink', value: 'pink', class: 'bg-pink-500 hover:bg-pink-600' },
    { name: 'Purple', value: 'purple', class: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'Indigo', value: 'indigo', class: 'bg-indigo-500 hover:bg-indigo-600' },
    { name: 'Teal', value: 'teal', class: 'bg-teal-500 hover:bg-teal-600' },
  ];

  return (
    <main
      style={{ backgroundColor: color }}
      className="h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-end absolute bottom-0 bg-white rounded-xl p-4 mb-10 gap-4 font-medium">
        {colors.map((c) => (
          <div key={c.value} className="flex flex-col items-center relative">
            {/* Arrow shown only if active */}
            {color === c.value && (
              <span className="text-black mb-1 text-lg">⬇</span>
            )}

            <button
              onClick={() => setColor(c.value)}
              className={`${c.class} p-2 rounded-xl text-white transition-all duration-300 cursor-pointer`}
            >
              {c.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ArrowBar;
