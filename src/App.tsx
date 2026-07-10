import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import ProfileCard from "@/components/profile/ProfileCard";
import PlansList from "@/components/plans/PlansList";
import SkillsList from "@/components/skills/SkillsList";
import NavigationLinks from "@/components/navigation/NavigationLinks";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { useTheme } from "@/contexts/ThemeContext";

import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { memosData } from "@/data/memos";
import { plansData } from "@/data/plans";
import { skillsData } from "@/data/skills";
import { navigationLinks } from "@/data/navigation";

const App: React.FC = () => {
  const { theme } = useTheme();

  // 预加载背景图和第一个项目图片
  useEffect(() => {
    const preloadImages = [
      "/images/IMG20240721193632-2.jpg",
      projectsData[0]?.imageUrl,
    ].filter(Boolean);

    preloadImages.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
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

      <PlansList plans={plansData} />
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

  // 确保App容器占满整个视口
  return (
    <div
      className="min-h-screen w-full"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Helmet>
        <title>{profileData.name} 个人页</title>
        <meta name="description" content={profileData.bio} />
        <meta name="keywords" content={`${profileData.name}, 个人主页, 游戏设计开发`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {/* 设置主题色，与背景匹配 */}
        <meta
          name="theme-color"
          content={theme === "dark" ? "#010205" : "#d7e3f1"}
        />
      </Helmet>

      {/* 背景: 深色模式使用图片，浅色模式使用背景色 */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {theme === "dark" ? 
        (
          <img
            src="/images/IMG20240721193632-2.jpg"
            alt=""
            aria-hidden="true"
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
        )
        }
      </div>

      <MainLayout
        leftSidebar={leftSidebar}
        mainContent={mainContent}
        rightSidebar={rightSidebar}
      />
    </div>
  );
};

export default App;
