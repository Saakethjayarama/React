import { useFormik } from "formik";
import React from "react";

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
    validate: (state) => {
      let errors = {};

      if (state.name === "") errors.name = "Required";
      if (state.usn === "") {
        errors.usn = "Required";
      } else if (state.usn.length !== 10) {
        errors.usn = "Invalid USN";
      }
      if (state.email === "") {
        errors.email = "Required";
      } else if (
        state.email.indexOf("@") === -1 ||
        state.email.indexOf(".") === -1
      ) {
        errors.email = "Ill formatted email.";
      }

      return errors;
    },
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
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.usn}
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
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
