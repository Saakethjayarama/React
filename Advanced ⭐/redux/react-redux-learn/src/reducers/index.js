import counterReducer from "./counter";
import loggedReducer from "./isLoggedReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counters: counterReducer,
  isLoggeds: loggedReducer,
});

export default allReducers;
