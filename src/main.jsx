import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <HouseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HouseContextProvider>
  </Router>
);
