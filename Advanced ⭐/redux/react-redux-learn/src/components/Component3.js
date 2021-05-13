import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export default function Component3() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter} <br />
      <button
        onClick={() => {
          dispatch(increment(4));
        }}
      >
        +4
      </button>
      <button
        onClick={() => {
          dispatch(decrement(4));
        }}
      >
        -4
      </button>
      {isLogged ? <p>Sensitive information</p> : <p>You aren't logged in</p>}
    </div>
  );
}
