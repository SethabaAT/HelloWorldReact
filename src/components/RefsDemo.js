import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // THis property help get a reference to the component
    this.inputRef = React.createRef();

    // Another method of getting a reference.
    // Using callback refs
    this.cbRef = null;
    this.SetCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // Here whenever the component mounts the "InputRef" is used to get reference to the component
    // And the input gets focus due to this
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    // This is used by the CallBack Ref
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    console.log(`Here is the value ${this.inputRef.current.value}`);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.SetCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
