import Card from "@/components/common/Card";

interface GithubActivityProps {
  username: string;
}

const GithubActivity: React.FC<GithubActivityProps> = ({ username }) => {
  return (
    <Card className="flex flex-col items-center h-full">
      <div className="w-full overflow-hidden mb-3">
        <img
          src={`https://proxy.dogxi.me/${username}/${username}/snake/snake.svg?proxy-host=raw.githubusercontent.com`}
          alt="GitHub Contribution Snake"
          className="w-full"
        />
      </div>

      <div className="mt-2 text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-light transition-colors duration-200 text-sm font-medium"
        >
          GitHub Stats
        </a>
      </div>
    </Card>
  );
};

export default GithubActivity;
