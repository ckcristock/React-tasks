import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  console.log("Tasklist C", tasks);
  return (
    <>
      <h1>TaskList</h1>
      <div>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
}

export default TaskList;
