import React from "react";
import { useState, useEffect } from "react";
import { tasks } from "./tasks";

function TaskList() {
  const [tasksH, setTasksH] = useState([]);

  useEffect(() => {
    setTasksH(tasks);
  }, []);

  console.log(tasks);
  return (
    <div>
      {tasksH.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
    </div>
  );
}

export default TaskList;
