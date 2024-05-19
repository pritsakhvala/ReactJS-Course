import React from "react";
import "./myStyles.css";
function StyleSheets(props) {
  let className = props.primary ? "primary" : ""; //note conditionally apply class base on props values.
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default StyleSheets;
