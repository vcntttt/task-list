export function Task({ task, id, completed, onComplete }) {
  return (
    <div className="task">
      <input className="checkbox" type="checkbox" checked={completed}></input>
      <h3>{task}</h3>
    </div>
  );
}
