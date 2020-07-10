import React from 'react';
import { useDispatch } from 'react-redux'
import { removeTask, completeTask } from '../../store/actions'
import "antd/dist/antd.css";
import { Checkbox, Button } from "antd";
import ModalWindow from '../modal-window/modal-window';

import './todo-list-item.css';

const TodoListItem = ({id = 0, text = '', isCompleted}:TodoListItemTypes) => {
  const dispatch = useDispatch();
  return (
    <li className="todo-list-item">
      <span>
        <Checkbox id={`check-${id}`} onChange={() => dispatch(completeTask(id))} checked={isCompleted ? true : false} className="checkbox"/>
        <label className="label-check" htmlFor={`check-${id}`}><span className={isCompleted ? 'done-task' : 'active-task'}>{text}</span></label>
        <ModalWindow text={text}/>
      </span> 
      <Button onClick={() => dispatch(removeTask(id))} danger>
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