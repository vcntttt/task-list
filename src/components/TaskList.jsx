import { Task } from "./Task";
import User from "./User";
export function TaskList({ taskList }) {
  return (
    <div>
      <User />
      <div className="task-container">
        {taskList.map((tarea) => (
          <Task
            key={tarea.id}
            id={tarea.id}
            task={tarea.task}
            completed={tarea.completed}
          />
        ))}
      </div>
    </div>
  );
}
