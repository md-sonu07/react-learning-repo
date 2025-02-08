import { useEffect, useState } from "react";

function FetchDataApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67a65e8b510789ef0dfb39b3.mockapi.io/job/api/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json.slice(0, 2));
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
          <div className="text-left">
            {data.map((user) => (
              <div key={user.id} className="bg-gray-200 p-4 rounded-md text-sm text-gray-700 mb-2">
                {/* <p>{user.avatar}</p> */}
                <p>Name: {user.name}</p>
                <p>Job Title: {user.jtitle}</p>
                <p>Job Description: {user.jdesc}</p>
                <p>Job Area: {user.jarea}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FetchDataApi;

