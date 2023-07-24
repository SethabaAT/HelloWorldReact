import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Thabo",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  // This is normally used
  componentDidMount() {
    console.log("LifeCycleB did Mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  // This is normally used
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  // This almost always there
  render() {
    console.log("LifeCycleB render");
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
