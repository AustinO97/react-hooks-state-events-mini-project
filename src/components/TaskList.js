import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, index }) {

  const newCategory = tasks.map((task, index) => {
    return <Task key={index} task={task} />
  })
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {newCategory}
    </div>
  );
}

export default TaskList;
