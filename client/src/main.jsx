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
import { BlogsProvider } from "./contexts/BlogsContext.jsx";
import { AdminsBlogsReqProvider } from "./contexts/AdminsBlogsReqContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoginContextProvider>
          <BlogsProvider>
            <GetUsersProvider>
              <AdminsBlogsReqProvider>
                <App />
              </AdminsBlogsReqProvider>
            </GetUsersProvider>

            <ToastContainer
              position="top-center"
              autoClose={2000}
              pauseOnHover
              theme="light"
            />
          </BlogsProvider>
        </LoginContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
