import React from "react";
import Header from "./Header.js";

const Container = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);
export default Container;
