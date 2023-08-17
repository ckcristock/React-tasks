import React, { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };
  return (
    <>
      <h1>Task Form C</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add yoor task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default TaskForm;
