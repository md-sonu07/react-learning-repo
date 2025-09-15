import { useUser, useClerk, SignUpButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";

export default function ProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  
  if (!isLoaded) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md animate-pulse">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
        <div className="space-y-3 mt-6">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center py-30 rounded-b-4xl bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">You’re not signed in 🚪</h1>
        <p className="text-gray-600 mb-6">Please sign in to view your profile details.</p>


        <div className="flex gap-2">
        <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary/90 transition">
          <SignInButton mode="modal">Login</SignInButton>
        </button>
        <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary/90 transition">
          <SignUpButton mode="modal">Sign Up</SignUpButton>
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md  mx-auto bg-white p-6 max-sm:mx-8 rounded-b-4xl shadow-md">
      <img
        src={user?.imageUrl}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-2xl font-bold text-center">{user?.fullName}</h2>
      <p className="text-gray-600 text-center">
        {user?.primaryEmailAddress?.emailAddress}
      </p>

      <div className="mt-6 space-y-2">
        <p><strong>Username:</strong> {user?.username || "Not set"}</p>
        {/* <p><strong>Phone:</strong> {user?.primaryPhoneNumber?.phoneNumber || "Not added"}</p> */}
        <p><strong>Created At:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
        <p><strong>Last Sign In:</strong> {user?.lastSignInAt ? new Date(user.lastSignInAt).toLocaleString() : "N/A"}</p>
      </div>

      <div className="mt-6 text-center">
        {/* Single Button → Logout */}
        <button
          onClick={() => signOut()}
          className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/80 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
