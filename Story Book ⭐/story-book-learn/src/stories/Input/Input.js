import React from "react";
import "./Input.css";

function Input({ size = "medium", ...rest }) {
  return (
    <div>
      <input className={`input ${size}`} {...rest} />
    </div>
  );
}

export default Input;
