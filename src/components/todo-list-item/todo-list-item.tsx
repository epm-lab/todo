import React from 'react';

import "antd/dist/antd.css";
import { Checkbox } from "antd";
import './todo-list-item.css';

const TodoListItem = ({id = 0, text = '', isCompleted = false}:TodoListItemTypes) => (
  <li className="todo-list-item">
    <Checkbox onClick={() => console.log(`click ${id}`)} className="checkbox"/>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
  </li>
);

interface TodoListItemTypes {
    id: number,
    text: string,
    isCompleted: boolean,
}

export default TodoListItem;