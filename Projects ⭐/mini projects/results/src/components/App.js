import React, { useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    usn: "",
    result: [],
  };
  const [state, setState] = useState(initialState);

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state.usn);
    fetch(`http://localhost:5050/result/${state.usn}`)
      .then((data) => data.json())
      .then((json) => {
        setState({
          ...state,
          result: json,
        });
      });
  };

  let total = 0;
  state.result.forEach((el, indx) => {
    const { internal, external } = el;
    total += internal + external;
  });

  return (
    <div className="App">
      <header>
        <input
          type="text"
          className="txtbox"
          name="usn"
          onChange={changeHandler}
          value={state.usn}
        />
        <button onClick={submitHandler}>Submit</button>
      </header>
      <div className="body">
        <div className="result">
          <div className="header">
            <div className="field">Code</div>
            <div className="field">Subject Name</div>
            <div className="field">Internal</div>
            <div className="field">External</div>
            <div className="field">Total</div>
          </div>
          <div className="result_body">
            {state.result.map((el, index) => {
              return addSubject(el, index);
            })}
          </div>
          <div className="total">
            <p>Total Marks: {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const addSubject = (sub, index) => {
  const { code, subject, internal, external } = sub;

  return (
    <div className="row" key={index}>
      <div className="field">{code}</div>
      <div className="field">{subject}</div>
      <div className="field">{internal}</div>
      <div className="field">{external}</div>
      <div className="field">{internal + external}</div>
    </div>
  );
};

export default App;
