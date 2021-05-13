import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as yup from "yup";
import Error from "./Error";

function FormNewNew() {
  const onSubmit = (state, onSubmitProps) => {
    /**
     * * onSubmitProps has several functions to change everything of formik state.
     * * When submitting setSubmitting to true and once it's done set setSubmitting to false.
     */
    console.log("state ", state);
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
        validateOnMount
      >
        {(formik) => (
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
                    <p>
                      {meta.touched && meta.error ? <>{meta.error}</> : null}
                    </p>
                  </>
                );
              }}
            </Field>
            {/* FastField component is used instead of Field component to prevent unnecessary re renders of component while the state changes */}
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
            <Field
              name="phoneNumbers[0]"
              placeholder="Primary"
              id="phone1"
              validate={(value) => {
                if (!value) {
                  return "Required da";
                }
              }}
            />
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
                const { push, remove, form, fields } = props;
                const { values } = form;
                const { phNos } = values;
                return (
                  <>
                    {phNos.map((phNo, index) => {
                      return (
                        <div key={index}>
                          <label htmlFor={`phNos${index}`}>
                            Phone Number {index}
                          </label>
                          <br />
                          <Field
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
            <input type="submit" value="Submit" disabled={!formik.isValid} />
            <button onClick={() => formik.validateField("name")}>
              Validate Name
            </button>
            <button onClick={() => formik.validateForm()}>Validate Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormNewNew;

/**
 * * Validation runs when the following events occurs
 * * 1. OnChange
 * * 2. OnBlur
 * * 3. OnSubmit
 *
 * This can be managed by setting validateOnChange or validateOnBlur props
 */

/**
 * validateOnMount as props to Form component to validdate form on mount
 */

/**
 * formik.dirty to find whether any field value has changed
 * formik.isValid to know whether all the fields are valid or not
 * formik.isSubmitting is set to true when form is being submitted
 */
