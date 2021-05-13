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
    languages: [],
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
    languages: yup.array().min(1, "Required!"),
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

  const languages = [
    {
      key: "KAN",
      value: "Kannada",
    },
    {
      key: "TEL",
      value: "Telegu",
    },
    {
      key: "HIN",
      value: "Hindi",
    },
  ];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          console.log("Formik ", formik);
          return (
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
              <FormikControl
                control="checkbox"
                name="languages"
                label="Language"
                options={languages}
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikContainer;
