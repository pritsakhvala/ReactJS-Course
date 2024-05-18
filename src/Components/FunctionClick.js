import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("you press button");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
