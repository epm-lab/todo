import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";

const AppState = createStore(rootReducer, composeWithDevTools());

export default AppState;
