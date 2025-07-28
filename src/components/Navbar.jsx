// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"

const Navbar = () => {
  return (
    <header 
          className="flex justify-between 
            items-center sticky top-0 z-10 py-2 px-4 
            bg-white/10 dark:bg-black/15 backdrop-blur-md rounded-full"
      >
        <SpeedInsights/>
        <nav className="bg-white/80 backdrop-blur-lg p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">IronName's Space</Link>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-blue-500">主页</Link>
              <Link to="/projects" className="hover:text-blue-500">项目</Link>
              <Link to="/contact" className="hover:text-blue-500">联系</Link>
            </div>
          </div>
        </nav>
        <button aria-label="切换到深色模式" 
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 
          dark:text-gray-200 bg-white/10 dark:bg-white/5 hover:bg-white/20 
          dark:hover:bg-white/10 backdrop-blur-sm" tabindex="0" 
          style="transform: none;"
        >
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
            </path>
          </svg>
        </button>
     </header>
  );
};

export default Navbar;