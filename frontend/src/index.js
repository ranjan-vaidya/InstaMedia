import React from "react";
import ReactDOM from "react-dom/client";  // Updated import
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

// Create the root container using createRoot
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
