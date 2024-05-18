import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    //note first approach
    // if (this.state.isLoggedin) {
    //   return <div>Hello, Prit Sakhvala</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    //     }
    //note second approach using element of js
    // let Message;
    // if (this.state.isLoggedin) {
    //   Message = <div>hello prit</div>;
    // } else {
    //   Message = <div>hello guest</div>;
    // }
    // return <div>{Message}</div>;
    //note third approach using Ternary Operator
    return this.state.isLoggedin ? (
      <div>Welcom prit</div>
    ) : (
      <div>Welcome Guest</div>
    );
    //note fourth using shortcircuit
    // return this.state.isLoggedin && <div>welcome prit</div>;
  }
}
export default ConditionalRender;
