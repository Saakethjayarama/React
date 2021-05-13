import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Textarea({ name, label, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field name={name} id={name} {...rest} as="textarea" />
      <br />
      <ErrorMessage name={name} component={Error} />
      <br />
    </div>
  );
}

export default Textarea;
