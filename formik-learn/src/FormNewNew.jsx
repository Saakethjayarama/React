import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
    phoneNumbers: ["", ""],
    phNos: [""],
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
    phoneNumbers: yup.array(),
    "phoneNumber[0]": yup
      .string()
      .matches(phoneRegExp, "Phone Number is invalid")
      .required("Required!"),
    "phoneNumber[1]": yup
      .string()
      .matches(phoneRegExp, "Phone Number is invalid")
      .required("Required!"),
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
          {/* Phone Number */}
          <label htmlFor="phone1">Primary PhoneNumber</label>
          <br />
          <Field name="phoneNumbers[0]" placeholder="Primary" id="phone1" />
          <br />
          <ErrorMessage name="phoneNumbers[0]" />
          <br />
          <br />
          {/* Phone Number end */}
          {/* Phone Number */}
          <label htmlFor="phone2">Secondary PhoneNumber</label>
          <br />
          <Field name="phoneNumbers[1]" placeholder="Secondary" id="phone2" />
          <br />
          <ErrorMessage name="phoneNumbers[1]" />
          <br />
          <br />
          {/* Phone Number end */}
          <FieldArray name="phNos">
            {(props) => {
              console.log("Field array props", props);
              const { push, remove, form } = props;
              const { values } = form;
              const { phNos } = values;
              console.log(phNos);
              return (
                <>
                  {phNos.map((phNo, index) => {
                    return (
                      <div key={index}>
                        <label htmlFor={`phNos${index}`}>
                          Phone Number {index}
                        </label>
                        <br />
                        <input
                          type="text"
                          id={`phNos${index}`}
                          name={`phNos[${index}]`}
                        />
                        {index > 0 && (
                          <button onClick={() => remove(index)}>-</button>
                        )}
                        <button onClick={() => push("")}>+</button>
                      </div>
                    );
                  })}
                </>
              );
            }}
          </FieldArray>
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
}

export default FormNewNew;
