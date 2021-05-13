import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Checkbox({ name, label, options, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                name={name}
                id={option.key}
                {...field}
                value={option.key}
                checked={field.value.includes(option.key)}
              />
              <label htmlFor={option.key}>{option.value}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <br />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
}

export default Checkbox;
