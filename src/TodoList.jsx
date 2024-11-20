import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  { id: 1, title: "Finish homework" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Clean the house" }
];

function TodoList() {
  return (
    <ul>
      {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
