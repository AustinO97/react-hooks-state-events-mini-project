import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('ALL')

  const handleDelete = (text) => {
    const filterDelete = tasks.filter((task) => task.text !== text)
    setTasks(filterDelete)
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSetCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={visibleTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
