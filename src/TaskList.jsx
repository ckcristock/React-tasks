import React from "react";

function TaskList({ tasks }) {
  console.log("Tasklist C", tasks);
  return (
    <>
      <h1>TaskList</h1>
      <div>
        {tasks.map((task) => {
          return <div key={task.id}>{task.title}</div>;
        })}
      </div>
    </>
  );
}

export default TaskList;
