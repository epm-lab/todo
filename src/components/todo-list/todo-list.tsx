import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ tasksList }:TodoTypes) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoListItem text={text} isCompleted={isCompleted} key={id} />
    ))}
  </ul>
);

interface ItemTypes {
    id: number,
    text: string,
    isCompleted: boolean,
}

interface TodoTypes {
  tasksList: Array<ItemTypes>,
}

export default TodoList;