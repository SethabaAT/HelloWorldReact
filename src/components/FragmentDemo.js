import React from "react";

function FragmentDemo() {
  //Note that instead of enclosing everything in the jsx with div We used Fragment
  //This makes sure that the elements in the html file (browser) looks neat
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the fragment demo element</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
