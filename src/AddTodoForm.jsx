import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange (event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);  
    }
    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()  
        };
        onAddTodo(newTodo); 
        setTodoTitle("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title"
                value={todoTitle} 
                onChange={handleTitleChange} 
            ></input>
            <button>Add</button>
        </form>
    )
}

export default AddTodoForm;
