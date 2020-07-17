import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import * as actionTypes from "./actionTypes";
import { Task } from "./appState";
import { TaskListActionTypes, ChangeFilterType } from "./actions";
import { ALL } from "./filterConstants";

const BASE_FILTER: string = ALL;
const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    text: "Learn ReactJS",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Add Ant Design",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Learn Type Script",
    isCompleted: false,
  },
];

const tasks = (state = INITIAL_TASKS, action: TaskListActionTypes): Task[] => {
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
          return {...task, isCompleted: !task.isCompleted}
        }
        return task;
      });
    case actionTypes.CHANGE_TASK:
      return [...state].map((task) => {
        if (task.id === action.id) {
          return {...task, text: action.newText}
        }
        return task;
      });
    default:
      return state;
  }
};

const filter = (state = BASE_FILTER, action: ChangeFilterType): string => {
  const { type, activeFilter } = action;
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks,
  filter,
  form: reduxFormReducer,
});

export default rootReducer;
