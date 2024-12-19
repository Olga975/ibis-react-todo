import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';


function useSemiPersistentState() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('savedTodoList');
    return savedState ? JSON.parse(savedState) : [];
  });
  

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
