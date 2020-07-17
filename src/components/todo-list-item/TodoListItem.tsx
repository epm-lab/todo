import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, completeTask } from "../../store/actions";
import { ModalWindow } from "../../containers/modal-window/ModalWindow";
import { Checkbox, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

import "./TodoListItem.css";

export const TodoListItem = ({
  id = 0,
  text = "",
  isCompleted,
}: TodoListItemTypes) => {
  console.log(id);
  const dispatch = useDispatch();
  return (
    <li className="todo-list-item">
      <span className="todo-list-item_span">
        <Checkbox
          id={`check-${id}`}
          onChange={() => dispatch(completeTask(id))}
          checked={isCompleted ? true : false}
          className="checkbox"
        />
        <label className="label-check" htmlFor={`check-${id}`}>
          <span className={isCompleted ? "done-task" : "active-task"}>
            {text}
          </span>
        </label>
        <ModalWindow id={id} />
      </span>
      <Tooltip title="Remove this item!" placement="left">
        <Button className="button-delete" onClick={() => dispatch(removeTask(id))} >
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
}
