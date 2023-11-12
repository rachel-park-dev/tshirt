import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Overlay } from "./Overlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>
);
