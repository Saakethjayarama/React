import React from "react";
import Component3 from "./Component3";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export default function Component2() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter: {counter} <br />
      <button
        onClick={() => {
          dispatch(increment(3));
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          dispatch(decrement(3));
        }}
      >
        -3
      </button>
      {isLogged ? <p>Sensitive information</p> : <p>You aren't logged in</p>}
      <Component3 />
    </div>
  );
}
