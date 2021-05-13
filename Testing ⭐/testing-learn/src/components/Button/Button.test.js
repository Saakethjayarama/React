import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";

import Button from "./Button";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button children="Saaketh" />, div);
  ReactDom.unmountComponentAtNode(div);
});

it("Renders correctly", () => {
  const { getByTestId } = render(<Button>Saaketh</Button>);
  expect(getByTestId("test-button")).toHaveTextContent("Saaketh");
});
