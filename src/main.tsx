import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SpeedCalculator from "./SpeedCalculator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <SpeedCalculator />
  </React.StrictMode>
);
