import Welcome from "./Welcome";

function RecatApp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Hello, React! 👋</h1>
        <Welcome /> {/* Using Welcome component */}
      </div>
    </div>
  );
}

export default RecatApp;
