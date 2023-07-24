import React, { Component } from "react";

// Applying Refs to class components
class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  // Basically this function put a focus on the Input component
  // But note that it can also be used in a parent component
  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    );
  }
}

export default Input;
