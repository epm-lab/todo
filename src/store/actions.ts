import * as actionTypes from './actionTypes'
import { Task } from './appState'

export interface AddTaskType {
  type: typeof actionTypes.ADD_TASK;
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface RemoveTaskType {
  type: typeof actionTypes.REMOVE_TASK;
  id: number;
}

export interface CompleteTaskType {
  type: typeof actionTypes.COMPLETE_TASK;
  id: number;
}

export interface ChangeFilterType {
  type: typeof actionTypes.CHANGE_FILTER;
  activeFilter: string;
}

export type TaskListActionTypes = AddTaskType | RemoveTaskType | CompleteTaskType

export const addTask = (taskData: Task): AddTaskType => ({
  type: actionTypes.ADD_TASK,
  id: taskData.id,
  text: taskData.text,
  isCompleted: taskData.isCompleted
});

export const removeTask = (id: number): RemoveTaskType => ({
  type: actionTypes.REMOVE_TASK,
  id
});

export const completeTask = (id: number): CompleteTaskType => ({
  type: actionTypes.COMPLETE_TASK,
  id
});

export const changeFilter = (activeFilter: string): ChangeFilterType => ({
  type: actionTypes.CHANGE_FILTER,
  activeFilter
})