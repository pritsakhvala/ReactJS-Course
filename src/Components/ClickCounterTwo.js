import React, { Component } from "react";

class ClickCounterTwo extends Component {
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
        <h1 onMouseOver={this.incrementCount}>hover {count} times.</h1>
      </div>
    );
  }
}

export default ClickCounterTwo;
