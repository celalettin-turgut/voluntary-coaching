import React from "react";
import { render } from "react-dom";
import AppProvider from "./_context";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
