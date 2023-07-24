import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    // This is a reference to this class component
    this.componentRef = React.createRef();
  }

  // Note that whenever this function is invoked the it points to the Input Component
  // This means means you have access to almost everything inside the Input Tag
  // Then that means we can use the focus Input method
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
