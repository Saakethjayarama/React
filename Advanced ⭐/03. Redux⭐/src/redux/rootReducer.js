import { combineReducers, createStore } from "redux";
import IncrementDecrementReducer from "./reducers/IncrementDecrementReducer";

const reducers = {
  IncrementDecrementReducer,
};

const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
