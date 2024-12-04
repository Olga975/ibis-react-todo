import React from "react";

function AddTodoForm({ onAddTodo }) {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        onAddTodo(todoTitle);
        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>

    )
}

export default AddTodoForm;
