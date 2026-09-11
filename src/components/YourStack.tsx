import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-heading">
        <div>
          <p>YOUR SELECTION</p>

          <h2>Your Stack</h2>

          <span>{stack.length} Technology Selected</span>
        </div>

        <button
          className="remove-all-button"
          onClick={onRemoveAll}
        >
          Remove All
        </button>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div>📦</div>

          <h3>Your stack is empty</h3>

          <p>
            Add some technologies from above to build
            your development stack.
          </p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div
              className="stack-item"
              key={technology.id}
            >
              <div className="stack-item-icon">
                {technology.icon}
              </div>

              <div className="stack-item-info">
                <h3>{technology.name}</h3>

                <p>{technology.category}</p>
              </div>

              <button
                className="remove-button"
                onClick={() =>
                  onRemove(technology.id)
                }
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;