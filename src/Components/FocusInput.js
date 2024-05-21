import React, { Component } from "react";
import Input from "./Input";
class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
  handleEvent = () => {
    this.buttonRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.buttonRef} />
        <button onClick={this.handleEvent}>Focue Input</button>
      </div>
    );
  }
}

export default FocusInput;
