import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
      <div className="technology-card-top">
        <div className="technology-icon">
          {technology.icon}
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <div className="technology-info">
        <h3>{technology.name}</h3>

        <p>{technology.description}</p>

        <div className="technology-meta">
          <span className="category">
            {technology.category}
          </span>

          <span className="difficulty">
            {technology.difficulty}
          </span>
        </div>

        <div className="technology-bottom">
          <span className="rating">
            ⭐ {technology.rating}
          </span>

          <button
            className={`add-button ${
              isAdded ? "added-button" : ""
            }`}
            disabled={isAdded}
            onClick={() => onAdd(technology)}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;