import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>click {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCount);
