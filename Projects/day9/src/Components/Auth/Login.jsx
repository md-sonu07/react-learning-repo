import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Login() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-left mt-6 p-6 w-50 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      {user ? (
        <div>
          <p className="text-lg font-semibold">
            Welcome, <span className="text-blue-500">{user}</span>!
          </p>
          <button
            onClick={() => setUser(null)}
            className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
        <p className="text-lg font-semibold">
        Tap to login !!
      </p>
        <button
          onClick={() => setUser("Danish")}
          className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
        >
          Login
        </button>
        </div>
      )}
    </div>
  );
}

export default Login;
