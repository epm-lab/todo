import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ text = '', isCompleted = false}:TodoListItemTypes) => (
  <li className="todo-item">
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
  </li>
);

interface TodoListItemTypes {
    text: string,
    isCompleted: boolean,
}

export default TodoListItem;