import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideNav />
        <main className="w-full md:ml-64 ml-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
