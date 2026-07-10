import { Plan } from "@/types";
import Card from "@/components/common/Card";

interface PlanCardProps {
  plan: Plan;
  delay: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
}) => {
  const { title, description, progress } = plan;
  const levelDots = Array(20)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < progress/5 ? "bg-primary breathing-blue" : "bg-gray-300 dark:bg-gray-600 "
        }`}
        style={{ animationDelay: `${i * 0.1}s` }} 
      />
    ));

  return (
    <Card className="flex overflow-hidden">

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
