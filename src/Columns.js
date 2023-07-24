import React from "react";

function Columns() {
  const items = []; // A variable
  // Note that td does not allow to be inside a div tag
  //Therefore we can use a react fragment
  // You can use <> instead of react fragment
  return (
    <>
      <td>Name</td>
      <td>Sethaba</td>
    </>
  );
}

export default Columns;
