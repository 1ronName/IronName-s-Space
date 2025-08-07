import React from "react";
import { Plan } from "@/types";
// import { motion } from "framer-motion";
import Card from "@/components/common/Card";

interface PlanCardProps {
  plan: Plan;
  layout: "grid" | "list";
  delay: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  delay
}) => {
  const { title, description, progress } = plan;
  const levelDots = Array(20)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < progress/5 ? "bg-primary breathing-blue" : "bg-gray-300 dark:bg-gray-600"
        }`}
        style={{ animationDelay: `${i * 0.2}s` }} 
      />
    ));

  return (
    <Card
      className="flex overflow-hidden"
      delay={delay}
      // 减少不必要的动画
      animate={delay < 5} // 只有前5个项目有动画
    >

      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">{title}</h3>
        </div>

        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-stretch justify-between">{levelDots}</div>

      </div>
    </Card>
  );
};

export default PlanCard;
