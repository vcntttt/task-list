
export function Task({task,completed}) {
    return (
      <div className="task">
        <input className="check" type='checkbox' checked = {completed} ></input>
        <h3>{task}</h3>
      </div>
    );
  }