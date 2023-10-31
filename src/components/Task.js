import React from "react";

function Task({ index, categories, tasks }) {

  return (
    <div className="task">
      <div className="label">CATEGORIES</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
