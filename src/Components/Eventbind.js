import React, { Component } from "react";

export class Eventbind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: "Good Bye! using binding",
  //   });
  //   console.log(this);
  // }
  clickHandler = () => {
    this.setState({
      message: "this is arrow function without binding.",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Eventbind</button>
      </div>
    );
  }
}

export default Eventbind;
