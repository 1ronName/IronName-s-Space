import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonGroup from "@/components/common/ButtonGroup";
import Button from "@/components/common/Button";
import ProjectsList from "@/components/projects/ProjectsList";
import MemosList from "@/components/memos/MemosList";
import ScrollArrow from "@/components/common/ScrollArrow";
import { Project, Memo } from "@/types";
import { FiFolder } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";

interface ProjectsSectionProps {
  projects: Project[];
  memos: Memo[];
}

const CONTENT_HEIGHT = 800;
type ContentType = "projects" | "memos";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  memos,
}) => {
  const [contentType, setContentType] = useState<ContentType>("projects");
  const containerRef = useRef<HTMLDivElement>(null);

  // 简化的动画配置
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <ButtonGroup center>
          <Button
            isActive={contentType === "projects"}
            onClick={() => setContentType("projects")}
            ariaLabel="项目"
            tooltip="项目"
          >
            <FiFolder />
          </Button>
          <Button
            isActive={contentType === "memos"}
            onClick={() => setContentType("memos")}
            ariaLabel="碎碎念"
            tooltip="碎碎念"
          >
            <BiMessageDetail />
          </Button>
        </ButtonGroup>
      </div>

      <div className="relative" style={{ height: `${CONTENT_HEIGHT}px` }}>
        {/* 添加 no-scrollbar 类来隐藏滚动条 */}
        <div
          className="content-container overflow-y-auto h-full no-scrollbar"
          ref={containerRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={contentType}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              transition={{ duration: 0.2 }}
              className="pb-16" // 增加底部空间给箭头
            >
              {contentType === "projects" && (
                <ProjectsList
                  projects={projects}
                  showTitle={true}
                />
              )}

              {contentType === "memos" && (
                <MemosList memos={memos} showTitle={true} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollArrow containerRef={containerRef} />
      </div>
    </div>
  );
};

export default ProjectsSection;
