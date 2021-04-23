import React from "react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
};

export const Dark = () => {
  return (
    <>
      <Footer theme={"dark"}>
        <p>All rights reserved to Saaketh &copy;</p>
      </Footer>
    </>
  );
};

export const Light = () => {
  return (
    <>
      <Footer theme={"light"}>
        <p>All rights reserved to Saaketh &copy;</p>
      </Footer>
    </>
  );
};
