import React from "react";

function MemoComp({ name }) {
  console.log("Rendering memeo component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
