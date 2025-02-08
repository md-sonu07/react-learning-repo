import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Fetched Data
        </h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <pre className="bg-gray-200 p-4 rounded-md text-sm text-gray-700 text-left">
            {JSON.stringify(data, null, 2)}
          </pre>
          )}
        <h3 className="bg-gray-200 p-4 rounded-md text-sm text-gray-700 text-left mt-4">
          User Id: {data?.userId} <br /> 
          Id: {data?.id} <br /> 
          Title: {data?.title} <br /> 
          Completed: {data?.completed}
          </h3>
      </div>
    </div>
  );
}

export default FetchData;
