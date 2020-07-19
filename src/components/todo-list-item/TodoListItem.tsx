import React from "react";
import { Checkbox, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { ModalWindow } from "../../containers/modal-window/ModalWindow";

import "antd/dist/antd.css";
import "./TodoListItem.css";

export const TodoListItem = ({
  id = 0,
  text = "",
  isCompleted,
  onRemove,
  onComplete,
}: TodoListItemTypes) => {
  return (
    <li className="todo-list-item">
      <span className="todo-list-item_span">
        <Checkbox
          id={`check-${id}`}
          onChange={() => onComplete(id)}
          checked={isCompleted ? true : false}
          className="checkbox"
        />
        <label className="label-check" htmlFor={`check-${id}`}>
          <span className={isCompleted ? "done-task" : "active-task"} lang="ru">
            {text}
          </span>
        </label>
        <ModalWindow id={id} />
      </span>
      <Tooltip title="Remove!" placement="left">
        <Button className="button-delete" onClick={() => onRemove(id)} >
          <DeleteOutlined />
        </Button>
      </Tooltip>
    </li>
  );
};

interface TodoListItemTypes {
  id: number;
  text: string;
  isCompleted: boolean;
  onRemove: (id: number) => {};
  onComplete: (id: number) => {};
}
