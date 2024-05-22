import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "prit",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "prit",
      });
    }, 2000);
  }

  render() {
    console.log("---parent render---");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
