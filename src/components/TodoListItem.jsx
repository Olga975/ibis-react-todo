import React from "react";
import PropTypes from "prop-types";
import style from './TodoListItem.module.css';
import removeIcon from '../assets/removeIcon.png';

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className={style.ListItem}>
            {todo.title}
            <button type="button" onClick={() => onRemoveTodo(todo.id)}>
                <img 
                    src={removeIcon} 
                    alt="Remove"
                    width="10" 
                    height="10"
                />
            </button>
        </li>
    );
};

// Defined prop types for this component
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

export default TodoListItem;
