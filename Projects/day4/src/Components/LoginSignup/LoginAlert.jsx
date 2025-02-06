import React from 'react'
import { LogIn, User } from "lucide-react";

function WelcomeMessage({ isLoggedIn }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-300">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
        {/* Using ! not oprater thats why showing opusites */}
        {!isLoggedIn ? (
          <>
            <User size={48} className="text-green-500" />
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back, User!</h1>
          </>
        ) : (
          <>
            <LogIn size={48} className="text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">Please Login!</h1>
          </>
        )}
      </div>
    </div>
  );


    // Using ternary operators
    // return(
    //     <>
    //     {isLoggedIn ? <h1>Welcome back User!</h1> : <h1>Please Login!</h1>}
    //     </>
    // );


}

export default WelcomeMessage;