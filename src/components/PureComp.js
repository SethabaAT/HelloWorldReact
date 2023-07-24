import React, { PureComponent } from "react";

// The Pure Compenent only re-renders when if there is a difference between the new and old state and props
// It uses Shallow comparison to check if there is a difference
// It is useful in big projects if you don't want a compenent to re-render even with the same props and state
export class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
