import React, { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <h1>Task Form C</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add yoor task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          name=""
          id=""
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default TaskForm;
