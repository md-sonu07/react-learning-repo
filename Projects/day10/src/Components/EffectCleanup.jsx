import { useState, useEffect } from "react";

function EffectCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <p className="text-2xl font-semibold glow">
        Timer: {seconds} seconds
      </p>
    </div>
  );
}

export default EffectCleanup;
