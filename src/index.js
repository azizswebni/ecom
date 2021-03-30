import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ItemsProvider } from "./useContext/Context";
ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
