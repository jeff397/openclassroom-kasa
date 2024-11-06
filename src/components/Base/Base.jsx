import React from "react";
import Header from "../Header/Header";

const Base = ({ children }) => (
  <div className="base">
    <Header />
    {children}
  </div>
);

export default Base;
