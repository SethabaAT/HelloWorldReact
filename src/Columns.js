import React from "react";

function Columns() {
  // Note that td does not allow to be inside a div tag
  //Therefore we can use a react fragment
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Sethaba</td>
    </React.Fragment>
  );
}

export default Columns;
