import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from "redux-form"
import * as actionTypes from './actionTypes'
import { Task } from './appState'
import { TaskListActionTypes, ChangeFilterType } from './actions'

const BASE_FILTER: string = 'all'
const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
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
         }
      ];
    case actionTypes.REMOVE_TASK:
      return [...state].filter(task => task.id !== action.id);
    case actionTypes.COMPLETE_TASK:
      return [...state].map(task => {
        if(task.id === action.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
}

const filter = (state = BASE_FILTER, action: ChangeFilterType): string => {
  const { type, activeFilter } = action
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tasks,
  filter,
  form: reduxFormReducer,
});

export default rootReducer;