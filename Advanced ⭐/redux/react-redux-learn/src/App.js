import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, log } from "./actions";
import Component1 from "./components/Component1";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter} <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {isLogged ? <p>Sensitive information</p> : <p>You aren't logged in</p>}
      <Component1 />
      <button
        onClick={() => {
          dispatch(log());
        }}
      >
        login
      </button>
    </div>
  );
}

export default App;
