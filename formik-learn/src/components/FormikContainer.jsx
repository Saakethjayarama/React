import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    name: "",
    bio: "",
  };

  const handleSubmit = (state, submitProps) => {
    console.log("State ", state);
    console.log("Submit props ", submitProps);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    bio: yup.string().required("Required!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              name="name"
              label="Name"
              type="text"
            />
            <FormikControl
              control="textarea"
              name="bio"
              label="Bio"
              type="text"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
