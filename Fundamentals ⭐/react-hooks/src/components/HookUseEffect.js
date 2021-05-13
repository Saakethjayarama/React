import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const todoo = (todo, index) => {
    return <div key={index}>{todo.title}</div>;
  };
  console.log(data);
  return (
    <div>
      {data.map((el, index) => {
        return todoo(el, index);
      })}
    </div>
  );
}
