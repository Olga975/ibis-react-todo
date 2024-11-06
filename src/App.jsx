import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  { id: 1, title: "Finish homework" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Clean the house" }
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}


export default App;