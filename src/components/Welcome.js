import React, { Component } from "react";

// class Welcome extends Component {
//   render() {

//     return (
//       <h1>
//         Welcome {this.props.name} a.k.a {this.props.heroName}
//       </h1>
//     );
//   }

// This can be done by destrcuturing the props too
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state;
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
