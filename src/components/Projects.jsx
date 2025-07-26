// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Projects = () => {
  return (
    <>
    <Navbar />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">MySpace</h3>
          <p className="text-gray-600">
            现学现用，感谢kimi的支持，嘿嘿.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/HeiGuang/IronName-s-Space"
              className="bg-blue-500 text-white px-3 py-1 rounded-full"
            >
              Source
            </a>
            <a
              href="https://heiguang.github.io/IronName-s-Space/"
              className="bg-blue-500 text-white px-3 py-1 rounded-full"
            >
              Preview
            </a>
          </div>
        </div>
        {/* Add more projects here */}
      </div>
    </motion.div>
    </>
  );
};

export default Projects;