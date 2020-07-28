import * as actionTypes from "./constants/actionTypes";

import { Task } from "./../utils/interfaces";
import {
  AddTaskType,
  RemoveTaskType,
  CompleteTaskType,
  ChangeTaskType,
  ChangeFilterType,
} from "./../utils/interfaces";

export type TaskListActionTypes =
  | AddTaskType
  | RemoveTaskType
  | CompleteTaskType
  | ChangeTaskType;

export const addTask = (taskData: Task): AddTaskType => ({
  type: actionTypes.ADD_TASK,
  id: taskData.id,
  text: taskData.text,
  isCompleted: taskData.isCompleted,
});

export const removeTask = (id: number): RemoveTaskType => ({
  type: actionTypes.REMOVE_TASK,
  id,
});

export const completeTask = (id: number): CompleteTaskType => ({
  type: actionTypes.COMPLETE_TASK,
  id,
});

export const changeTask = (id: number, newText: string): ChangeTaskType => ({
  type: actionTypes.CHANGE_TASK,
  id,
  newText,
});

export const changeFilter = (activeFilter: string): ChangeFilterType => ({
  type: actionTypes.CHANGE_FILTER,
  activeFilter,
});
