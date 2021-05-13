import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    name: "",
    bio: "",
    branch: "",
    gender: "",
  };

  const handleSubmit = (state, submitProps) => {
    console.log("State ", state);
    console.log("Submit props ", submitProps);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    bio: yup.string().required("Required!"),
    branch: yup.string().required("Required!"),
    gender: yup.string().required("Required!"),
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

  const genders = [
    {
      key: "M",
      value: "Male",
    },
    {
      key: "F",
      value: "Female",
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
            <FormikControl control="textarea" name="bio" label="Bio" />
            <FormikControl
              control="select"
              name="branch"
              label="Branch"
              options={branches}
            />
            <FormikControl
              control="radio"
              name="gender"
              label="Gender"
              options={genders}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
