import React from "react";
import Person from "./Person";

// function NameList() {
//   // An array of names
//   const names = ["Bruce", "Barry", "Arthur", "Diana"];

//   // Transform names from strings to jsx
//   let nameList = names.map((n) => <h2>{n}</h2>);

//   // Return the list of objects
//   return <div>{nameList}</div>;
// }

function NameList() {
  // An array of names
  const persons = [
    { id: 1, name: "Bruce", age: 28, skill: "React" },
    { id: 2, name: "Clark", age: 36, skill: "Angular" },
    { id: 2, name: "Clark", age: 36, skill: "Vue" },
  ];

  // Transform names from strings to jsx
  let personList = persons.map((person) => <Person person={person} />);

  // Return the list of objects
  return <div>{personList}</div>;
}

export default NameList;
