import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTaskTextChange = event => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // You can add code here to handle adding a new task
    // using taskText and selectedCategory
    console.log("New task:", { text: taskText, category: selectedCategory });
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTaskTextChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
