import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  updateCount() {
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
    //note above mthod is not use to chang content in set to change content in state use setState method.
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.updateCount();
    this.updateCount();
    this.updateCount();
    this.updateCount();
    this.updateCount();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
