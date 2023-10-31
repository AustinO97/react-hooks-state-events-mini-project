import React from "react";

function CategoryFilter({ categories, selectedCategory, onSetCategory }) {

  const newBtn = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null
    return <button key={category} className={className} onClick={() => onSetCategory(category)} >{category}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {newBtn}
    </div>
  );
}

export default CategoryFilter;
