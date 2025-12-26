import React from "react";
import { formatRelativeDate } from "@/utils/formatters";

const Footer: React.FC = () => {
  //   const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-8 text-center text-sm text-text-light-secondary dark:text-text-dark-secondary">
      <p>上次更新: {formatRelativeDate('2025/12/26 21:19')}</p>
      <p>© 2025 IronName</p>
    </footer>
  );
};

export default Footer;
