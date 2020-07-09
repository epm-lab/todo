import React from 'react';
import { useDispatch } from 'react-redux'
import { removeTask } from '../../store/actions'
import "antd/dist/antd.css";
import { Checkbox, Button } from "antd";
import './todo-list-item.css';

const TodoListItem = ({id = 0, text = '', isCompleted = false}:TodoListItemTypes) => {
  const dispatch = useDispatch();
  return (
    <li className="todo-list-item">
      <span>
        <Checkbox onClick={() => console.log(`click ${id}`)} className="checkbox"/>
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      </span> 
      <Button onClick={() => dispatch(removeTask(id))} danger size="small">
        Delete
      </Button>
    </li>
  );
}


interface TodoListItemTypes {
    id: number,
    text: string,
    isCompleted: boolean,
}

export default TodoListItem;