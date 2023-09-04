import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
