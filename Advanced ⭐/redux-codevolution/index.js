const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const logger = reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// (prevState, action) => newState;
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 10,
};

const reducerCake = (prevState = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...prevState,
        numOfCakes: prevState.numOfCakes - 1,
      };
    default:
      return prevState;
  }
};

const reducerIceCream = (prevState = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...prevState,
        numOfIceCreams: prevState.numOfIceCreams - 1,
      };
    default:
      return prevState;
  }
};
const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("updated state", store.getState());
// });

store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyCake());

console.log("unsubscribing");
// unsubscribe();
console.log("unsubscibed");

store.dispatch(buyCake());
console.log("changes werent notified");
