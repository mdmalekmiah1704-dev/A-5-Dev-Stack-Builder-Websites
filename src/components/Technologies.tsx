import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologiesProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function Technologies({
  technologies,
  stack,
  onAdd,
}: TechnologiesProps) {
  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="section-heading">
  <h2>
    Explore the <span className="text-purple">Technologies</span>
  </h2>
  <p>Pick one technology per category to build your ideal stack.</p>
</div>
      <div className="technology-grid">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={stack.some(
              (item) => item.id === technology.id
            )}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default Technologies;