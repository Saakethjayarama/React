import React from "react";
import getPosts from "./useFetch";

export default () => {
  const post = getPosts();

  const pst = (post, index) => {
    return (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  };

  return (
    <div>
      {post.map((el, index) => {
        return pst(el, index);
      })}
    </div>
  );
};
