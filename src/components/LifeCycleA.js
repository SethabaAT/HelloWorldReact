import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Thabo",
    };
    console.log("Life Cycle A Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle A did Mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Nthabiseng",
    });
  };

  render() {
    console.log("Life Cycle A render");
    return (
      <div>
        <div>Life CycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
