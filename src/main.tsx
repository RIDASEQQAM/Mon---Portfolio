import * as React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "./app";
import { I18nProvider } from "./i18n";

import "./index.css";

const rootEl = document.getElementById("root");

// Render react app
ReactDOM.createRoot(rootEl!).render(
  <React.StrictMode>
    <Toaster
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        style: { background: "#050816", opacity: 0.95 },
      }}
    />
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>,
);
