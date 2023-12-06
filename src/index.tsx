import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(
        function (registration) {
          console.log("Worker registration successful", registration.scope);
        },
        function (err) {
          console.log("시류ㅐ", err);
        }
      )
      .catch(function (err) {
        throw new Error(err);
      });
  });
} else {
  console.log("Service Worker is not supported by browser.");
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
