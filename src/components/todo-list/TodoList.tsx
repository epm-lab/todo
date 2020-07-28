import React from "react";

import { TodoListItem } from "../todo-list-item/TodoListItem";
import { TodoTypes } from "./../../utils/interfaces";

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
