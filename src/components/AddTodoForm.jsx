import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel id="todoTitle" value={todoTitle} onChange={handleTitleChange}>
        Title
      </InputWithLabel>
      <button>Add</button>
    </form>
  );
}

// defined prop types 
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired, // it should be a function and it's required
};

export default AddTodoForm;
