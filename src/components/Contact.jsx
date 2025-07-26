// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Contact = () => {
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
      <h2 className="text-3xl font-bold text-center mb-8">联系我</h2>
      <h3 className="text-3xl font-bold text-center mb-8">Contact Me</h3>
      <p className="text-center text-gray-600">
        欢迎通过邮箱或者社交媒体联系我！
      </p>
      <p className="text-center text-gray-600">
        Feel free to reach out to me via email or social media.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="mailto:w526377yu@qq.com"
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          电子邮箱
        </a>
        <a
          href="https://space.bilibili.com/57447177"
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          Bilibili
        </a>
        <a
          href="https://www.xiaohongshu.com/user/profile/64167f6400000000140107a3"
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          小红书
        </a>
        <a
          href="https://github.com/HeiGuang"
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          GitHub
        </a>
      </div>
      </div>
    </motion.div>
    </>
  );
};

export default Contact;