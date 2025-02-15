import React from "react";
import { User } from "lucide-react";

function Profile() {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold flex items-center justify-center gap-3">
        <User size={48} className="text-yellow-400" /> Profile
      </h3>
      <p className="mt-4 text-xl">
        This is your dashboard profile page.
      </p>
    </div>
  );
}

export default Profile;
