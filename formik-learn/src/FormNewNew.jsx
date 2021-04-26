import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import Error from "./Error";

function FormNewNew() {
  const onSubmit = (state) => {
    console.log(state);
  };

  const initialValues = {
    name: "",
    usn: "",
    email: "",
    pincode: "",
    comment: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    usn: yup.string().required("Required!"),
    email: yup.string().required("Required!").email("Invalid Email!"),
    pincode: yup.number().required("Required!"),
    comment: yup.string().required("Required!"),
  });

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <br />
          <Field type="text" name="name" id="name" />
          <br />
          <p>
            <ErrorMessage name="name" />
          </p>
          <br />
          <label htmlFor="usn">USN:</label>
          <br />
          <Field type="text" name="usn" id="usn" /> <br />
          <p>
            <ErrorMessage name="usn" />
          </p>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <Field type="email" name="email" id="email" /> <br />
          <p>
            <ErrorMessage name="email" component={Error} />
          </p>
          <br />
          <Field name="pincode">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <>
                  <label htmlFor="pincode">Pincode</label>
                  <br />
                  <input type="text" {...field} id="pincode" />
                  <br />
                  <p>{meta.touched && meta.error ? <>{meta.error}</> : null}</p>
                </>
              );
            }}
          </Field>
          <br />
          <label htmlFor="comment">Comment</label>
          <br />
          <Field as="textarea" name="comment" id="comment" />
          <br />
          <ErrorMessage name="comment" />
          <br />
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
}

export default FormNewNew;
