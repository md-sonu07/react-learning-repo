import EffectWithoutDependencies from "./Components/EffectWithoutDependencies";
import EffectWithDependencies from "./Components/EffectWithDependencies";
import EffectCleanup from "./Components/EffectCleanup";
import FetchUser from "./Components/FetchUser";
import MouseTracker from "./Components/MouseTracker";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">React useEffect Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EffectWithoutDependencies />
        <EffectWithDependencies />
        <EffectCleanup />
        <FetchUser />
        <MouseTracker />
      </div>
    </div>
  );
}

export default App;
