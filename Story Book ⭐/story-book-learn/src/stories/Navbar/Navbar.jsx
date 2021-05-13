import React from "react";
import "./Navbar.css";

function Navbar(props) {
  const { company, options, theme } = props;

  if (!Array.isArray(options)) {
    throw new Error("Options prop should be array");
  }

  return (
    <div className={`navbar ${theme}`}>
      {/* Company Name */}
      <div id="name">Saaketh</div>
      {/* Options */}
      <div id="options">
        {options.map((value, index) => (
          <div className="option" key={index}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
