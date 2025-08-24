import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "./axios";

// ✅ Base URL: frontend calls /api, CloudFront proxies to Beanstalk
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://dwgxjuif5oamh.cloudfront.net/api"
    : "http://localhost:8000/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
