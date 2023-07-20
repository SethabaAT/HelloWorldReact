import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }
  // There are different ways to do selection in React
  // 1. If statement else statement
  // 2. Note that you can even make a tag a variable
  // 3. We can also use itenary operator
  // 4. Short Circuit operator
  render() {
    // Using the itenary operator
    return this.state.isLogin ? (
      <div>Hello Thabo</div>
    ) : (
      <div> Welcome guest</div>
    );

    // Using the message variable
    // let message;
    // if (this.state.isLogin) {
    //   message = <div>Hello Thabo</div>;
    // } else {
    //   message = <div> Welcome guest</div>;
    // }

    //
    //return <div>{message}</div>;
    // if (this.state.isLogin) {
    //   return <div>Hello Thabo</div>;
    // } else {
    //   return <div> Welcome guest</div>;
    // }
  }
}

export default UserGreeting;
