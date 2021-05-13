import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
