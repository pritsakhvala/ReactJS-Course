import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
    console.log(this.myRef);
  }
  handleEvent = () => {
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.handleEvent}>submit</button>
      </div>
    );
  }
}

export default RefsDemo;
