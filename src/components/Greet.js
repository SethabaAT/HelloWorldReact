import React from "react";

const Greet = (props) => {
  return (
    <h1>
      Hello {props.name} a.k.a {props.heroName}
    </h1>
  );
};

// Note that the props can be written in different ways to destructor props
// 1. in the parameter list
// const Greet = ({ name, heroName }) => {
//   return (
//     <h1>
//       Hello {name} a.k.a {heroName}{" "}
//     </h1>
//   );
// };

// 2. In the body
// const Greet = (props) => {
//   const { name, heroName } = props;
//   return (
//     <h1>
//       Hello {name} a.k.a {heroName}
//     </h1>
//   );
// };

export default Greet;
