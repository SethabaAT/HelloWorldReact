import React from "react";

// Note that in this file is used in the NameList file
function Person({ person }) {
  return (
    <h2>
      I am {person.name}, I am {person.age} years old and I am good at{" "}
      {person.skill}
    </h2>
  );
}

export default Person;
