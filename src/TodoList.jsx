import React from 'react';

const todoList = [
  { id: 1, title: "Finish homework" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Clean the house" }
];

function TodoList() {
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
