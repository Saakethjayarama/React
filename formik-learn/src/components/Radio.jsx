import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

function Radio({ label, name, options, rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field as="radio" name={name} {...rest}>
        {({ field }) => {
          console.log("Field  ", field);
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.key}
                checked={option.key == field.value}
              />
              <label htmlFor={option.value}>{option.value}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <br />
      <ErrorMessage name={name} component={Error} />
      <br />
    </div>
  );
}

export default Radio;
