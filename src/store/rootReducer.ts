import { combineReducers } from "redux";
import {reducer as reduxFormReducer} from "redux-form";

import { tasks, filter } from "./reducers"

export const rootReducer = combineReducers({
  tasks,
  filter,
  form: reduxFormReducer,
});

