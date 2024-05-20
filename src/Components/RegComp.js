import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("9999reg render9999");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;
