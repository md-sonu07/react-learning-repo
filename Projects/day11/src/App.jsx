import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterComponent from "./Components/CounterComponent";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import UsersList from "./Components/UsersList";


function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <header className="w-full p-4 bg-gray-800 shadow-md">
          <nav className="flex justify-center gap-8">
            <Link to="/counter" className="text-lg hover:text-blue-400 transition">
              Counter
            </Link>
            <Link to="/users" className="text-lg hover:text-blue-400 transition">
              Users
            </Link>
            <Link to="/theme" className="text-lg hover:text-blue-400 transition">
              Theme
            </Link>
          </nav>
        </header>
        {/* Main Content */}
        <main className="w-full">
          <Routes>
            <Route path="/counter" element={<CounterComponent />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/theme" element={<ThemeSwitcher />} />
            {/* Default Route */}
            <Route path="*" element={<CounterComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
