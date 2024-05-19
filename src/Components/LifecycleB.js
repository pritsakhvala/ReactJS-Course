import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prit",
    };
    console.log("LifecycleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB derivedstate");
    return null;
  }
  componentDidMount() {
    console.log("mount lifecycleB");
  }

  render() {
    console.log("LifecycleB render");
    return <div></div>;
  }
}

export default LifecycleB;
