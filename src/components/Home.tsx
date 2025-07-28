// src/components/Home.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useResponsive } from "../hooks/useResponsive";
import Navbar from "./Navbar"; // 引入导航栏组件
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import MainLayout from "./layout/MainLayout";
import ProfileCard from "./profile/ProfileCard";
import ProjectsSection from "./projects/ProjectSection";
import SkillsList from "./skills/SkillList";
import NavigationLinks from "./navigation/NavigationLinks";
import { useTheme } from "../contexts/ThemeContext";

import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";
import { memosData } from "../data/memos";
import { skillsData } from "../data/skills";
import { navigationLinks } from "../data/navigation";

const Home : React.FC = () => {

  const { theme } = useTheme();
  // 确保背景图片预先加载
  useEffect(() => {
    // 预加载背景图和第一个项目图片
    const preloadImages = [
      // "/background-light.webp",
      "/background-dark.webp",
      projectsData[0]?.imageUrl,
    ].filter(Boolean);

    preloadImages.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, []);

  // 添加调试函数，检查图片是否可访问
  useEffect(() => {
    const checkImageExists = (url: string) => {
      console.log(`Checking image: ${url}`);
      fetch(url)
        .then((response) => {
          if (response.ok) {
            console.log(`✅ Image exists: ${url}`);
          } else {
            console.error(`❌ Image not found: ${url} (${response.status})`);
          }
        })
        .catch((error) => {
          console.error(`❌ Error checking image: ${url}`, error);
        });
    };

    // 检查背景图片
    checkImageExists("/background-light.webp");
    checkImageExists("/background-dark.webp");
  }, []);

   // 左侧边栏内容
  const leftSidebar = (
    <div className="space-y-6">
      <ProfileCard
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
        avatar={profileData.avatar}
        social={profileData.social}
      />
    </div>
  );

  // 中间主要内容 - 使用新的项目区域组件
  const mainContent = (
    <ProjectsSection projects={projectsData} memos={memosData} />
  );

  // 右侧边栏内容 - 优化后的更紧凑布局
  const rightSidebar = (
    <div className="space-y-6">
      <SkillsList skills={skillsData} showTitle={true} />

      <NavigationLinks links={navigationLinks} showTitle={true} />
    </div>
  );


  const { width, height, isAbove, isBelow, deviceType } = useResponsive();

  // return (
  //   <div className="min-h-screen w-full" style={{ position: 'relative', overflow: 'hidden' }}>
      
  //     <div className="fixed inset-0 z-[-1] overflow-hidden">
  //       <div className="absolute inset-0 bg-[#f0f4f8]" style={{ minWidth: '100vw', minHeight: '100vh' }}>
  //       </div>
  //     </div>

  //     <div className="min-h-screen px-6 py-8 flex flex-col">

  //       <Navbar />

  //       <div className="grid grid-cols-2 gap-6 flex-grow">
    
  //           <section className="space-y-6" style={{opacity: 1}}>
  //             <div className="space-y-6">
  //               <motion.div
  //                 initial={{ opacity: 0 }}
  //                 animate={{ opacity: 1 }}
  //                 transition={{ duration: 1 }}
  //                 className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  //               >
  //                 <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
  //                   <h1 className="text-4xl font-bold text-center">你好，这里是铁名</h1>
  //                   <h2 className="text-4xl font-bold text-center">Hello, I'm IronName</h2>
  //                   <p>是一个一个大学生，对游戏制作，美术，音乐，科技感兴趣</p>
  //                   <p className="text-center text-gray-600">
  //                     A university student interested in Game Dev, Art, and Technologies.
  //                   </p>
  //                   <p>目标是成为独立制作人</p>
  //                 </div>
  //               </motion.div>
  //             </div>
  //           </section>

  //           <section className="space-y-6">

  //             <div className="space-y-6">
  //               <div className="glass-card p-4">
  //                 <p>啊嘞，这里什么都没有噢</p>
  //               </div>
  //             </div>
              
  //             <div className="space-y-6">
  //               <div className="glass-card p-4">
  //                 <p>啊嘞，这里什么都没有哦</p>
  //               </div>
  //             </div>

  //           </section>

  //       </div>
  //       <Footer />
  //     </div>
      
  //   </div>
  // );

  // 确保App容器占满整个视口，但不再使用黑色背景
  return (
    <div
      className="min-h-screen w-full"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>{profileData.name} - 个人主页</title>
        <meta name="description" content={profileData.bio} />
        <meta name="keywords" content="Dogxi, 个人主页, 开发者, 作品集" />
        {/* 添加视口设置，优化移动体验 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* 设置主题色，与背景匹配 */}
        <meta
          name="theme-color"
          content={theme === "dark" ? "#010205" : "#d7e3f1"}
        />
      </Helmet>

      {/* 背景: 深色模式使用图片，浅色模式使用背景色 */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {theme === "dark" ? (
          <img
            src="background-dark.webp"
            alt=""
            className="absolute w-[120%] h-[120%] object-cover"
            style={{
              left: "-10%",
              top: "-10%",
              transform: "translateZ(0)",
              willChange: "transform",
              minWidth: "120vw",
              minHeight: "120vh",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 bg-[#f0f4f8]"
            style={{
              minWidth: "100vw",
              minHeight: "100vh",
            }}
          />
        )}
      </div>

      <MainLayout
        leftSidebar={leftSidebar}
        mainContent={mainContent}
        rightSidebar={rightSidebar}
      />
    </div>
  );
};

export default Home;

// min-h-screen px-4 py-6 flex flex-col，
// min-h-screen px-6 py-8 flex flex-col，
// min-h-screen p-10 overflow-x-hidden flex flex-col