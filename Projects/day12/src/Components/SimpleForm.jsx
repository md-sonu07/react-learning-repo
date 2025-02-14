import { useState } from "react";

function SimpleForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Submitted Email: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Subscribe</h2>
        
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        
        <button 
          type="submit" 
          className="w-full p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
