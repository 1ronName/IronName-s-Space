import React from "react";
import { Plan } from "@/types";
import PlanCard from "./PlanCard";

interface PlansListProps {
  plans: Plan[];
  showTitle?: boolean;
}

const PlansList: React.FC<PlansListProps> = ({
  plans,
  showTitle = true,
}) => {
  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-xl font-medium">计划</h2>}

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansList;
