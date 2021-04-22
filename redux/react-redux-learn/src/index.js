import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./reducers";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//STORE

//ACTION
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       if (state <= 0) return 0;
//       else return state - 1;
//     default:
//       return 0;
//   }
// };

// let store = createStore(counter);
// //display state
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //DISPATCH
// store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
