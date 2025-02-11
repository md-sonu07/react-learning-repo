import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Store logged-in user

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
