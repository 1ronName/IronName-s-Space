import React from "react";
import {
  FiHome,
  FiUser,
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiExternalLink,
  FiGrid,
  FiList,
  FiStar,
  FiCode,
  FiServer,
  FiSearch,
  FiFeather,
  FiTool,
  FiFolder,
  FiEdit,
  FiSun,
  FiMoon,
  FiMusic,
  FiVideo,
  FiHeadphones,
} from "react-icons/fi";
import {
  FaReact,
  FaFigma,
  FaGamepad,
  FaPaintBrush,
  FaCube,
  FaMusic,

} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiGodotengine,
  SiC,
  SiPython,

} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// 创建图标映射对象
const IconMap: Record<string, React.ComponentType<any>> = {
  // Feather 图标
  FiHome,
  FiUser,
  FiMail,
  FiGithub,
  FiVideo,
  FiTwitter,
  FiLinkedin,
  FiExternalLink,
  FiGrid,
  FiList,
  FiStar,
  FiCode,
  FiServer,
  FiSearch,
  FiFeather,
  FiTool,
  FiFolder,
  FiEdit,
  FiSun,
  FiMoon,
  FiMusic,
  FiHeadphones,
  // Font Awesome 图标
  FaReact,
  FaFigma,
  FaGamepad,
  FaPaintBrush,
  FaCube,
  FaMusic,
  // Simple Icons
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiGodotengine,
  SiC,
  SiPython,
  // Material Design 图标
  MdDesignServices,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

// 创建一个动态图标组件
const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
