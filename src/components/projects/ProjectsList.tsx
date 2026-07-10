import React from "react";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
  showTitle?: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  showTitle = true,
}) => {
  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-xl font-medium">项目</h2>}

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
