import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button>
       */}
      <button onClick={() => props.greetHandler("child")}>
        Greet Parent with Paremeter
      </button>
    </div>
  );
}

export default ChildComponent;
