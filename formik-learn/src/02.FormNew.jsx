import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      usn: "",
      email: "",
    },
    onSubmit: (state) => {
      console.log(state);
    },
    validationSchema: yup.object({
      name: yup.string().required("Required!"),
      usn: yup.string().required("Required!"),
      email: yup.string().required("Required!").email("Invalid Email!"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          {...formik.getFieldProps("name")}
        />
        <br />
        <p>{formik.touched.name && formik.errors.name}</p>
        <br />
        <label htmlFor="usn">USN:</label>
        <br />
        <input
          type="text"
          name="usn"
          id="usn"
          {...formik.getFieldProps("usn")}
        />{" "}
        <br />
        <p>{formik.touched.usn && formik.errors.usn}</p>
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          {...formik.getFieldProps("email")}
        />{" "}
        <br />
        <p>{formik.touched.email && formik.errors.email}</p>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
