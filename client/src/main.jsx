import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App.jsx";
import { LoginContextProvider } from "./contexts/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </StrictMode>
);
