import React from "react";

export default function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      class="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        X
      </button>
      <button onClick={() => completeTask(index)}>Completed</button>
    </div>
  );
}
