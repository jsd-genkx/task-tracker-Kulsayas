import React, { useState } from "react";

let taskId = 0;

export default function Task() {
  const [task, setTask] = useState([]);

  return (
    <>
      <h1>Task Tracker</h1>
    </>
  );
}

function AddTask() {
  setTask((prevTask) => [...prevTask, { id: taskId++, task: task }]);
}
