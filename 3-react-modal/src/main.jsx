import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModalsProvider from "./ModalsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </React.StrictMode>
);
