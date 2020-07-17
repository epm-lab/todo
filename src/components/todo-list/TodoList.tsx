import React from "react";

import { TodoListItem } from "../todo-list-item/TodoListItem";

import "./TodoList.css";

export const TodoList = ({ tasksList, onComplete, onRemove }: TodoTypes) => {
  return (
    <ul className="todo-list">
      {tasksList.map(({ id, text, isCompleted }) => (
        <TodoListItem
          text={text}
          isCompleted={isCompleted}
          key={id}
          id={id}
          onRemove={onRemove}
          onComplete={onComplete}
        />
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
  onComplete: any;
  onRemove: any;
}
