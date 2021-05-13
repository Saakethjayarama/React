import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Date({ name, label }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field name={name}>
        {({ field }) => {
          return <input type="date" {...field} value={field.value} />;
        }}
      </Field>
      <br />
      <ErrorMessage name={name} component={Error} />
      <br />
    </div>
  );
}

export default Date;
