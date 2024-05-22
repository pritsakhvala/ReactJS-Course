import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementCount)}</div> //use children for the children component.
    );
  }
}

export default Count;
