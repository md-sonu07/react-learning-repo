import Login from "./Components/Auth/Login";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  return (
    <>
    
    <div>
      {/* <h1 className="text-center text-2xl font-bold mt-6">Welcome to React Context API</h1> */}
      {/* <ThemeSwitcher /> */}
    </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mt-6">React Context API Authentication</h1>
      <Login />
    </div>
    </>
  );
}

export default App;
