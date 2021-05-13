import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import "./Main.css";

/**
 * * enableReinitialize prop has to be set in Formik
 */

function SaveFormState() {
  const [formState, setFormState] = useState(null);

  const onSubmit = (state, submitProps) => {
    console.log("Submit props ", submitProps);
    console.log("Submitted State ", state);
    submitProps.resetForm();
  };

  const initialState = {
    name: "",
    usn: "",
    email: "",
  };

  const savedState = {
    name: "Saaketh",
    usn: "1JT18CS015",
    email: "saakethaj@gmail.com",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    usn: yup.string().required("Required!"),
    email: yup.string().required("Required!").email(),
  });

  return (
    <div>
      <Formik
        initialValues={formState || initialState}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              <div id="form-group">
                <div>
                  <label htmlFor="name">Name: </label>
                  <Field name="name" id="name" />
                </div>
                <ErrorMessage name="name" />
              </div>
              <div id="form-group">
                <div>
                  <label htmlFor="usn">USN: </label>
                  <Field name="usn" id="usn" />
                </div>
                <ErrorMessage name="usn" />
              </div>
              <div id="form-group">
                <div>
                  <label htmlFor="email">Email: </label>
                  <Field name="email" id="email" />
                </div>
                <ErrorMessage name="email" />
              </div>
              <div id="form-group">
                <input type="submit" value="Submit" />
              </div>
              <div id="form-group">
                <button
                  type="button"
                  onClick={() => {
                    setFormState(savedState);
                  }}
                >
                  Load Data
                </button>
              </div>
              <div id="form-group">
                <button
                  type="button"
                  onClick={() => {
                    setFormState(null);
                    formik.resetForm();
                  }}
                >
                  Reset Data
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SaveFormState;
