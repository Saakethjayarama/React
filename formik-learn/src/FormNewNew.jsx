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
    urls: {
      fb: "",
      insta: "",
    },
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    usn: yup.string().required("Required!"),
    email: yup.string().required("Required!").email("Invalid Email!"),
    pincode: yup.number().required("Required!"),
    comment: yup.string().required("Required!"),
    urls: yup.object().shape({
      fb: yup.string().required("Required!"),
      insta: yup.string().required("Required!"),
    }),
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
          <>
            <ErrorMessage name="email" component={Error} />{" "}
            {/** Error message will be wrapped inside Error Component */}
          </>
          <br />
          <Field name="pincode">
            {/* For custom components */}
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
          <ErrorMessage name="comment">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
          <br />
          <label htmlFor="fb">Facebook</label>
          <br />
          <Field name="urls.fb" placeholder="FB" id="fb" />
          <br />
          <ErrorMessage name="urls.fb" />
          <br />
          <br />
          <label htmlFor="insta">Instagram</label>
          <br />
          <Field name="urls.insta" placeholder="Insta" id="insta" />
          <br />
          <ErrorMessage name="urls.insta" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
}

export default FormNewNew;
