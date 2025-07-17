import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import App from "./App.jsx";
import { LoginContextProvider } from "./contexts/LoginContext.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetUsersProvider } from "./contexts/GetUsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LoginContextProvider>
        <GetUsersProvider>
          <App />
        </GetUsersProvider>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          pauseOnHover
          theme="light"
        />
      </LoginContextProvider>
    </AuthProvider>
  </StrictMode>
);
