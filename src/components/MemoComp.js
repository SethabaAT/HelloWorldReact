import React from "react";

function MemoComp(props) {
  console.log("Rendering memo component");
  return <div>MemoComp {props.name} </div>;
}

// This line is important
// It is the one that makes the Memo Component to act like a Pure Component
export default React.memo(MemoComp);
