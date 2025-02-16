import { useState } from "react";
import { UserPlus, CheckCircle, XCircle } from "lucide-react";

function AddUser() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage({ text: "Please enter a valid name!", type: "error" });
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User added:", data);
        setMessage({ text: "User added successfully!", type: "success" });
        setName(""); // Clear input after submission
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage({ text: "Failed to add user.", type: "error" });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div className="max-w-md w-6xl mx-auto p-6 bg-gray-900/80 backdrop-blur-lg text-white rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <UserPlus size={28} className="text-yellow-400" /> Add User
      </h2>

      {message.text && (
        <div
          className={`flex items-center gap-2 p-3 rounded-lg mb-4 ${
            message.type === "success"
              ? "bg-green-600/30 text-green-300"
              : "bg-red-600/30 text-red-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <XCircle size={20} />
          )}
          <span>{message.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 w-full rounded-lg bg-gray-800/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />

        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 active:scale-95 transition duration-200"
        >
          Add User
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddUser;
