import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

function TaskList() {
  const tasks = [
    { id: 1, name: "Learn React", status: true },
    { id: 2, name: "Build a project", status: false },
    { id: 3, name: "Read a book", status: true },
    { id: 4, name: "Write a blog post", status: false },
    { id: 5, name: "Watch a tutorial", status: true },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Task List</h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center p-3 rounded-lg shadow-md ${
                task.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {task.status ? (
                <CheckCircle size={20} className="text-green-500 mr-2" />
              ) : (
                <XCircle size={20} className="text-red-500 mr-2" />
              )}
              <span className="font-medium">{task.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
