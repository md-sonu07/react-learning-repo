import { useParams } from "react-router-dom";
import { UserCircle } from "lucide-react";

function UserProfile() {
  const { username } = useParams(); // Extract username from URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Profile Icon */}
      <UserCircle size={100} className="text-blue-400" />

      {/* User Name */}
      <h2 className="text-3xl font-bold mt-4">Welcome, {username}!</h2>
      
      {/* Explanation of Dynamic Routing */}
      <p className="text-gray-400 mt-2 w-2/3 text-[16px] text-center">
        This is <b className="text-blue-300">{username}</b>'s profile page.  
        This page is generated dynamically based on the <b>URL parameter</b>.  
        The username is <b>fetched from the URL</b> and displayed here.  
        React Router helps us define <b>dynamic routes</b> to create unique user profiles.
      </p>

      {/* Extra Profile Details */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-80 text-center">
        <p className="text-gray-300 text-left">
          📌 User since: <b className="text-green-400">January 2024</b>
        </p>
        <p className="text-gray-300 text-left">
          🏆 Status: <b className="text-yellow-400">Pro Member</b>
        </p>
        <p className="text-gray-300 text-left">
          🌍 Location: <b className="text-purple-400">Unknown</b>  
        </p>
      </div>

      {/* Additional Information */}
      <div className="mt-4 max-w-lg text-center text-[16px] text-gray-400">
        <p>Dynamic routes allow creating <b>customized user experiences</b> without hardcoding pages.</p>
        <p>Each user visiting their profile will see <b>their own unique content</b>.</p>
      </div>
    </div>
  );
}

export default UserProfile;
