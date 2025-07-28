// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // 引入导航栏组件
import { SpeedInsights } from "@vercel/speed-insights/react"
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full" style="position: relative; overflow: hidden;">
      
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-[#f0f4f8]" style="min-width: 100vw; min-height: 100vh;">
        </div>
      </div>

      <div class="min-h-screen px-4 py-6 flex flex-col">

        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        >
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center">你好，这里是铁名</h1>
            <h2 className="text-4xl font-bold text-center">Hello, I'm IronName</h2>
            <p>是一个一个大学生，对游戏制作，美术，音乐，科技感兴趣</p>
            <p className="text-center text-gray-600">
              A university student interested in Game Dev, Art, and Technologies.
            </p>
            <p>目标是成为独立制作人</p>
          </div>
        </motion.div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;