import React, { useState } from "react";
import "./App.css";
import countries from "./countries";

function App() {
  let countriesList = [];
  countries.forEach((el, index) => {
    const { value, offset } = el;
    countriesList.push({ value, offset });
  });

  let [x] = countriesList.slice(0, 1);

  const initilaState = {
    countries: countriesList,
    selected: x.offset,
  };

  const [state, stateSetter] = useState(initilaState);

  const onChangeHandler = (event) => {
    const newState = {
      ...state,
      selected: event.target.value,
    };
    stateSetter(newState);
  };

  return (
    <div className="App">
      <div className="App-header">
        <select onChange={onChangeHandler}>
          {state.countries.map((val, index) => {
            return (
              <option value={val.offset} key={index}>
                {val.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="App-body">
        <h1>
          <Time offset={state.selected} />
        </h1>
      </div>
    </div>
  );
}

function getTime(offset) {
  if (offset === "") {
    offset = new Date().getTimezoneOffset();
  }

  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * offset);

  return {
    hour: String(nd.getHours()).padStart(2, "0"),
    min: String(nd.getMinutes()).padStart(2, "0"),
    sec: String(nd.getSeconds()).padStart(2, "0"),
  };
}

function Time(props) {
  console.log(props.offset);
  const [time, setTime] = useState(getTime(props.offset));

  setTimeout(() => {
    setTime(getTime(props.offset));
  }, 500);

  const { hour, min, sec } = time;

  return (
    <div>
      {hour}:{min}:{sec}
    </div>
  );
}

export default App;
