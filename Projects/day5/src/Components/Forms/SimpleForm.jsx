import { useState } from 'react';

function SimpleForm() {
    const [name, setName] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {name ? `Hello, ${name}!` : "Enter your name"}
                </h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>
        </div>
    );
}

export default SimpleForm;
