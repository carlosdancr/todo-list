import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppStorage } from "./AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStorage>
      <App />
    </AppStorage>
  </React.StrictMode>
);
