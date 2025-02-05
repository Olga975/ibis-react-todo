import React from "react";
import style from './TodoListItem.module.css';
import removeIcon from './assets/removeIcon.png';


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

export default TodoListItem;