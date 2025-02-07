import { useState } from "react";

function CheckboxForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <form className="space-y-4">
          <p className={`text-sm font-semibold ${isSubscribed ? "text-green-500" : "text-red-500"}`}>
            {isSubscribed ? "✅ You are subscribed!" : "❌ You are not subscribed."}
          </p>
          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={isSubscribed}
              onChange={() => setIsSubscribed(!isSubscribed)}
              className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 transition"
            />
            <span className="text-gray-600 font-medium">
              Subscribe to our newsletter
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default CheckboxForm;
