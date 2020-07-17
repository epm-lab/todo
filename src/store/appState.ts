import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { InjectedFormProps } from 'redux-form';

import { rootReducer } from './rootReducer';

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

const AppState = createStore(rootReducer, composeWithDevTools());

export default AppState;