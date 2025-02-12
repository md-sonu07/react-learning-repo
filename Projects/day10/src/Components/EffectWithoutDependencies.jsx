import { useEffect } from "react";

function EffectWithoutDependencies() {
  useEffect(() => {
    console.log("Component Mounted!");

    return () => console.log("Component Unmounted!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Check the Console!</h1>
    </div>
  );
}

export default EffectWithoutDependencies;
