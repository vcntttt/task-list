import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";
import { data } from "./data";

export default function App() {
  const [taskList, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);
  const onComplete = (id) => {
    console.log("task ", id);
    setTask(
      taskList.map((tarea) => {
        return tarea.id === Number(id)
          ? { ...tarea, completed: true }
          : { ...tarea };
      })
    );
  };
  return (
    <div>
      <Header />
      <TaskList taskList={taskList} onComplete={onComplete} />
    </div>
  );
}
