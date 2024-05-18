import React from "react";

const Greet = (props) => {
  const { name } = props;
  return (
    <div>
      <h1> Hello, {name} </h1>
      {name.children}
    </div>
  );
  /* //above is children for the parent element */
};
export default Greet;
