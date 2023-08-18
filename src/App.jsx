import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    console.log("task.length", task);
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
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
