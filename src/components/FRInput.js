import React from "react";
import Input from "./Input";

// FR - Foward Ref
// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="password" ref={ref} />
    </div>
  );
});

export default FRInput;
