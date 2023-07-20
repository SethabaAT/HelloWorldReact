import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }

  render() {
    if (this.state.isLogin) {
      return <div>Hello Thabo</div>;
    } else {
      return <div> Welcome guest</div>;
    }
  }
}

export default UserGreeting;
