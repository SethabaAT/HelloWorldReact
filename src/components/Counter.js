import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // Note that this increment function is a class function
  // Note that it changes the values of the state
  increment() {
    // The setState method accepts a function and/or a function
    // The reason the function is included here is just to make sure it runs at the same time
    //this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(`Callback ${this.state.count}`)
    //);

    // Pass a function instead of object in order to use the previous state
    this.setState((prevState) => ({
      count: prevState.count + 2,
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    // Inside the button there is an onClick function that is equated to a function
    // In this example the function is the one that is at line 17
    return (
      <div>
        <div>Subscribers - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Subscribe</button>
      </div>
    );
  }
}

export default Counter;
