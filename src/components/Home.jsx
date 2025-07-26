// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // 引入导航栏组件
import { SpeedInsights } from "@vercel/speed-insights/next"

const Home = () => {
  return (
    <>
      <Navbar />
      <SpeedInsights />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      >
      <motion.div
      animate={{
      rotate: 360,
      boxShadow: ["0 0 10px #fff", "0 0 20px #f0f", "0 0 10px #fff"]
      }}
      transition={{
      repeat: Infinity,  // 开启无限循环
      repeatType: "loop", // 循环类型为普通循环
      duration: 2,       // 动画持续时间
      ease: "linear"     // 缓动函数
      }}
      className="backdrop-blur-lg rounded-lg"
      >
        <h1>惊爆价！</h1>
      </motion.div>
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center">你好，这里是铁名</h1>
          <h2 className="text-4xl font-bold text-center">Hello, I'm IronName</h2>
          <p>是一个一个大学生，对游戏制作，美术，音乐，科技感兴趣</p>
          <p className="text-center text-gray-600">
            A university student interested in Game Dev, Art, and Technologies.
          </p>
          <p>目标是成为独立制作人</p>
          {/* <div className="flex justify-center space-x-4 mt-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">React</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">TypeScript</span>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Home;