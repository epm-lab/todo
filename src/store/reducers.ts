import * as actionTypes from "./constants/actionTypes";
import { Task } from "./../utils/interfaces";
import { TaskListActionTypes } from "./actions";
import { ChangeFilterType } from "./../utils/interfaces";
import { INITIAL_TASKS, BASE_FILTER } from "./constants/storeConstants";

export const tasks = (
  state = INITIAL_TASKS,
  action: TaskListActionTypes
): Task[] => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted,
        },
      ];
    case actionTypes.REMOVE_TASK:
      return [...state].filter((task) => task.id !== action.id);
    case actionTypes.COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === action.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    case actionTypes.CHANGE_TASK:
      return [...state].map((task) => {
        if (task.id === action.id) {
          return { ...task, text: action.newText };
        }
        return task;
      });
    default:
      return state;
  }
};

export const filter = (
  state = BASE_FILTER,
  action: ChangeFilterType
): string => {
  const { type, activeFilter } = action;
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};
