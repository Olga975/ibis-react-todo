import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedState = localStorage.getItem('savedTodoList');
    return savedState ? JSON.parse(savedState) : [];
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: []
          }
        });
      }, 2000);
    })
      .then((result) => {
        if (todoList.length === 0) {
          setTodoList(result.data.todoList);
        }
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading && todoList.length > 0) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
      
    </>
  );
}

export default App;
