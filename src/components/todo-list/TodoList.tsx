import React from "react";
import { TodoListItem } from "../todo-list-item/TodoListItem";

import "./TodoList.css";

export const TodoList = ({ tasksList }: TodoTypes) => {
  console.log(tasksList);
  return (
    <ul className="todo-list">
      {tasksList.map(({ id, text, isCompleted }) => (
        <TodoListItem text={text} isCompleted={isCompleted} key={id} id={id} />
      ))}
    </ul>
    
  );
};

interface ItemTypes {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoTypes {
  tasksList: Array<ItemTypes>;
}
