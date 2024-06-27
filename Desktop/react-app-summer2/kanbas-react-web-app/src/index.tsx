import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const authorName = "Ralph Martin";

const Labs = () => {
  return (
    <div>
      <h1>Welcome to the Labs</h1>
      <p>Author: {authorName}</p>
    </div>
  );
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals();

