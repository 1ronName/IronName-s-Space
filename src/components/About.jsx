// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <p className="text-center text-gray-600">
        I'm a university student passionate about web development, game development, and more. I enjoy building things and learning new technologies.
      </p>
      </div>
    </motion.div>
    </>
  );
};

export default About;