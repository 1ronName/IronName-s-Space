interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  stronger?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  stronger = false,
}) => {
  return (
    <div
      className={`${
        stronger ? "glass-card-stronger" : "glass-card"
      } p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
