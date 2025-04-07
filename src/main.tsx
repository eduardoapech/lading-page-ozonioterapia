import React from "react";
import ReactDOM from "react-dom/client"; // <- Importa corretamente do novo React 18
import App from "./App";
import ResetGlobalCSS from "./ResetGlobalCSS";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ResetGlobalCSS />
    <App />
  </React.StrictMode>
);
