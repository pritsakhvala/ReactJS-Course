import React from "react";
const Hello = () => {
  //   return (
  //     // <div>
  //     //   <h1>this is Jsx</h1>
  //       // </div>
  //       //   note remove jsx
  //     );
  return React.createElement(
    "div",
    { id: "Hello", className: "hellothis" },
    React.createElement("h1", null, "hello, this is without jsx")
  );
};
export default Hello;
