import React, { useState, useEffect } from "react";
import "./Student.css";
import util from "util";
import { Parser } from "xml2js";

const student = (name, usn, email, phone, index) => {
  return (
    <div className="students__student" key={index}>
      {/* name */}
      <div className="student__field">{name}</div>
      {/* usn */}
      <div className="student__field">{usn}</div>
      {/* email */}
      <div className="student__field">{email}</div>
      {/* phone */}
      <div className="student__field">{phone}</div>
    </div>
  );
};

const useFetchJson = (setStudents) => {
  useEffect(() => {
    fetch("http://localhost/student/students.php")
      .then((res) => res.json())
      .then((jsn) => {
        setStudents(jsn);
      });
  }, []);
};

const useFetchXml = (mount) => {
  useEffect(() => {
    fetch("http://localhost/student/studentxml.php")
      .then((res) => res.text())
      .then((str) => {
        const parser = new Parser();
        parser.parseString(str, (err, result) => {
          let data = result.students.student;
          let students = [];

          for (let i = 0; i < data.length; i++) {
            let stud = data[i];
            let { name, usn, email, phone } = stud;
            name = name[0];
            usn = usn[0];
            email = email[0];
            phone = phone[0];
            students.push({ name, usn, email, phone });
          }
          mount(students);
        });
      });
  });
};

export default function Student() {
  const initialState = [];

  const [students, setStudents] = useState(initialState);
  // useFetchJson(setStudents);
  useFetchXml(setStudents);

  return (
    <div className="student">
      <div className="student-banner">
        {/* name */}
        <div className="banner-item">Name</div>
        {/* usn */}
        <div className="banner-item">USN</div>
        {/* email */}
        <div className="banner-item">Email</div>
        {/* phone */}
        <div className="banner-item">Phone Number</div>
      </div>
      <div className="students">
        {students.map((stud, index) => {
          const { name, usn, email, phone } = stud;
          return student(name, usn, email, phone, index);
        })}
      </div>
    </div>
  );
}
