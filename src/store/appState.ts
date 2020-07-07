import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export interface Task {
  id: number,
  text: string,
  isCompleted: boolean,
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;