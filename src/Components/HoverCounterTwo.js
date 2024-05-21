import React, { Component } from "react";

class HoverCounterTwo extends Component {
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
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} times</button>
      </div>
    );
  }
}

export default HoverCounterTwo;
