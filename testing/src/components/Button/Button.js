import React from "react";
import "./Button.css";

function Button({ children }) {
  return (
    <div data-testid="test-button" className="button">
      {children}
    </div>
  );
}

export default Button;
