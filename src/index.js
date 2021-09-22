import React from 'react';
import { render } from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

