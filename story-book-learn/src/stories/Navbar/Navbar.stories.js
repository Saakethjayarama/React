import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Dark = () => (
  <Navbar
    theme={"dark"}
    name={"Sudo"}
    options={["About", "Contact", "Address"]}
  />
);

export const Light = () => (
  <Navbar
    theme={"light"}
    name={"Sudo"}
    options={["About", "Contact", "Address"]}
  />
);
