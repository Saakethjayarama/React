import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Textarea({ name, label, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
}

export default Textarea;
