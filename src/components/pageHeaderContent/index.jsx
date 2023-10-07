
import React from "react";
import "./style.scss";

const PageHeaderContent = ({ headerText, icon }) => {
  return (
    <div className="page-header">
      <h1>{headerText}</h1>
      {icon}
    </div>
  );
};

export default PageHeaderContent;
