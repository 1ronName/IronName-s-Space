import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from "./components/Home.tsx";
// import Projects from "./components/Projects.jsx";
// import Contact from "./components/Contact.jsx";
import "./index.css";
// import "./styles/global.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <SpeedInsights/>
        <Home />
    //         {/* <BrowserRouter>
    //           <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/projects" element={<Projects />} />
    //             <Route path="/contact" element={<Contact />} />
    //           </Routes>
    //         </BrowserRouter> */}
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
