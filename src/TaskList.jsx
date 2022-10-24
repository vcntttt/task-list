import { Task } from "./Task";
export function TaskList() {
  let taskList = [
    {
      id: 1,
      task: "Terminar el proyecto",
      completed: true,
    },
    {
      id: 2,
      task: "Subirlo a Github",
      completed: true,
    },
    {
      id: 3,
      task: "Estudiar para la evaluacion de mañana",
      completed: false,
    },
  ];
  return (
    <div>
       <div className="user">
        <a target={"_blank"} href="https://github.com/vcntttt" rel="noreferrer">
        Sesion actual: Vicente Rivera
        </a>
        <img
          className="foto-perfil"
          src="https://avatars.githubusercontent.com/u/108706337?v=4"
          alt="foto"
        />
      </div>
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
