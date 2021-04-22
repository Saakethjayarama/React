import React from "react";
import Component2 from "./Component2";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export default function Component1() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter} <br />
      <button
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          dispatch(decrement(2));
        }}
      >
        -2
      </button>
      {isLogged ? <p>Sensitive information</p> : <p>You aren't logged in</p>}
      <Component2 />
    </div>
  );
}
