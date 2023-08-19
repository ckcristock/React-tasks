import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  console.log("tasks", tasks);
  console.log("Tasklist C", tasks);

  return (
    <>
      <h1>TaskList</h1>
      <div>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </>
  );
}

export default TaskList;
