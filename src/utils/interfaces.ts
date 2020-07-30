import * as actionTypes from "./../store/constants/actionTypes";
import { InjectedFormProps } from "redux-form";

export interface AppHeaderTypes {
  amountOfTasks: number;
  activeBtn: string;
  onClick: (filterValue: string) => {};
}

export interface TodoListItemTypes {
  id: number;
  text: string;
  isCompleted: boolean;
  onRemove: (id: number) => {};
  onComplete: (id: number) => {};
}

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}
export interface TodoTypes {
  tasksList: Array<Task>;
  onComplete: () => {};
  onRemove: () => {};
}

export interface RootState {
  tasks: Task[];
  filter: string;
  form: InjectedFormProps;
}

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

export interface ChangeTaskType {
  type: typeof actionTypes.CHANGE_TASK;
  id: number;
  newText: string;
}

export interface ChangeFilterType {
  type: typeof actionTypes.CHANGE_FILTER;
  activeFilter: string;
}

export interface BaseModalProps {
  [name: string]: any;
}

export interface DestroyForm {
  destroy: (formName: string) => void;
}
