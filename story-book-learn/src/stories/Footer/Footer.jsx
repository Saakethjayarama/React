import React, { Children } from "react";
import "./Footer.css";

function Footer(props) {
  const { theme, children } = props;
  return <div className={`Footer ${theme}`}>{children}</div>;
}

export default Footer;
