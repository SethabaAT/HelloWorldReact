import React from "react";
import Person from "./Person";

function NameList() {
  // An array of names
  const names = ["Bruce", "Barry", "Arthur", "Diana"];

  // Transform names from strings to jsx
  // Note you need a unique key value. You can use an index
  let nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  // Return the list of objects
  return <div>{nameList}</div>;
}

// function NameList() {
//   // An array of names
//   const persons = [
//     { id: 1, name: "Bruce", age: 28, skill: "React" },
//     { id: 2, name: "Clark", age: 36, skill: "Angular" },
//     { id: 3, name: "Clark", age: 36, skill: "Vue" },
//   ];

//   // Transform names from strings to jsx
//   // Note that whenever you have a list. React needs you to add keys
//   let personList = persons.map((person) => (
//     <Person key={person.id} person={person} />
//   ));

//   // Return the list of objects
//   return <div>{personList}</div>;
// }

export default NameList;
