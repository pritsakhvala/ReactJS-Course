import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prit",
    };
    console.log("Lifecycle Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle derivedstate");
    return null;
  }
  componentDidMount() {
    console.log("mount lifecycle");
  }
  shouldlComponentUpdate() {
    console.log("LifecycleA  shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
