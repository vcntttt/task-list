import { Task } from "./Task";
export function TaskList() {
  return (
    <div className="task-container">
      <Task task=" Terminar el proyecto" completed ={true}   />
      <Task task=" Subirlo a Github" completed ={true}   />
      <Task task=" Estudiar para la evaluacion de mañana" completed ={false}   />
    </div>
  );
}
