import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: taskTitle.length,
        title: taskTitle,
        description: "nueva tarea",
      },
    ]);
  }
  return (
    <>
      <h1>App C</h1>
      <hr />
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
      <hr />
    </>
  );
}

export default App;
