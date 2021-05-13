import store from "./store";
import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import { bugFixed } from "./actions";

// console.log(store);
// store has these methods :- dispatch, getState, replaceReducer(nextReducer), subscribe(listener), symbol(observable);

//subscribing to a store store.subscribe method returns a function to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
  unsubscribe();
});

//adding a bug
store.dispatch({
  type: BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});
console.log(store.getState());

//resolving a bug
store.dispatch(bugFixed(1));
console.log(store.getState());

//removing a bug
store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
