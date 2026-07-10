import React from "react";
import { formatRelativeDate } from "@/utils/formatters";

const buildYear = new Date(__BUILD_TIME__).getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="py-4 mt-8 text-center text-sm text-text-light-secondary dark:text-text-dark-secondary">
      <p>上次更新: {formatRelativeDate(__BUILD_TIME__)}</p>
      <p>© {buildYear} IronName</p>
    </footer>
  );
};

export default Footer;
