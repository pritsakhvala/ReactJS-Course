import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  handleEvent = () => {
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.handleEvent}>submit</button>
      </div>
    );
  }
}

export default RefsDemo;
