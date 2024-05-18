import React, { Component } from "react";
//rce shortcut
class Classclick extends Component {
  clickHandler() {
    console.log("you press button which are in class click handler");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default Classclick;
