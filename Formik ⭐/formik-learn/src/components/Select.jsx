import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Select({ name, label, options, ...rest }) {
  console.log(options);

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field name={name} {...rest} as="select">
        {options.map((op, index) => {
          return (
            <option key={op.key} value={op.key}>
              {op.value}
            </option>
          );
        })}
      </Field>
      <br />
      <ErrorMessage name={name} component={Error} />
      <br />
    </div>
  );
}

export default Select;
