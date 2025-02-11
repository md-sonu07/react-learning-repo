import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Components/Auth/AuthProvider";
// import ThemeProvider from "./Components/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ThemeProvider>
  //   <App />
  // </ThemeProvider>
    <AuthProvider>
    <App />
  </AuthProvider>
);
