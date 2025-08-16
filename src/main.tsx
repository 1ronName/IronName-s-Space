import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/global.css";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/next"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <SpeedInsights/>
        <Analytics />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
