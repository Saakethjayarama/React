import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    name: "",
    bio: "",
    branch: "",
  };

  const handleSubmit = (state, submitProps) => {
    console.log("State ", state);
    console.log("Submit props ", submitProps);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    bio: yup.string().required("Required!"),
    branch: yup.string().required("Required!"),
  });

  const branches = [
    {
      key: "",
      value: "--Select--",
    },
    {
      key: "CSE",
      value: "Computer Science and Engineering",
    },
    {
      key: "ISE",
      value: "Information Science and Engineering",
    },
    {
      key: "AI&ML",
      value: "Artificial Intelligence and Machine Learning",
    },
  ];

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
            <FormikControl
              control="select"
              name="branch"
              label="Branch"
              type="select"
              options={branches}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
