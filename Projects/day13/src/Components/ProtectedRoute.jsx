import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change this value to test authentication
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
