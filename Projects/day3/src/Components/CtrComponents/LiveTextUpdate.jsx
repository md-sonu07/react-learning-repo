import {useState} from 'react'

function TextInput() {
    const [text, setText] = useState('');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Live Text Preview</h2>
        <p className="text-xl font-medium text-blue-600 mb-4">{text || "Start typing..."}</p>
        <input
          type="text"
          placeholder="Type here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default TextInput