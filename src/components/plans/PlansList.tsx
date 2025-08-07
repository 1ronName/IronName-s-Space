import React from "react";
import { Plan } from "@/types";
import PlanCard from "./PlanCard";

interface PlansListProps {
  plans: Plan[];
  showTitle?: boolean;
  forceListMode?: boolean;
}

const PlansList: React.FC<PlansListProps> = ({
  plans,
  showTitle = true,
  //   forceListMode = false,
}) => {
  // 始终使用列表模式
  const viewMode = "list";

  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-xl font-medium">计划（大饼）</h2>}

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            layout={viewMode}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansList;
