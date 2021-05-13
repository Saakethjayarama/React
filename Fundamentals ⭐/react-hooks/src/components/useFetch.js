import { useState, useEffect } from "react";
import Axios from "axios";

export default function () {
  const [data, setPost] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return data;
}
