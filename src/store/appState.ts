import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { InjectedFormProps } from 'redux-form';

export interface Task {
  id: number,
  text: string,
  isCompleted: boolean,
}

export interface RootState {
  tasks: Task[],
  filter: string,
  form: InjectedFormProps,
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;