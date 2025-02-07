import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

// Define the propTypes for the component
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodoList;

