import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //Note that if you use this you must not use arrow functions on the onclick
    // This method is called event Binding in the constructor
    //this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Good bye",
  //     });
  //   }

  // Or you can remove the Bind in the construtor and use this
  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    // Note that the tis keyword is undefined in the render method.
    // Therefore there are ways to deals with it
    return (
      <div>
        <div>{this.state.message}</div>

        {/* <button onClick={this.clickHandler.bind(this)}>Click Event Bind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click Event Bind</button> */}
        <button onClick={this.clickHandler}>Click Event Bind</button>
      </div>
    );
  }
}

export default EventBind;

// Basically there are different methods
// 1.  Binding the render method
// 2.  Using arrow funstio n in the render method
// 3.  Binding in the construtor
// 4.  Defining a function using the arrow method inside the class
