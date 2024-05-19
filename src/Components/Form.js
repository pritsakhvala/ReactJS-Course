import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "React",
    };
  }
  HandleUsernameChange = (prit) => {
    this.setState({
      userName: prit.target.value,
    });
  };
  handleCommentChange = (prit) => {
    this.setState({
      comments: prit.target.value,
    });
  };
  handleTopicChange = (prit) => {
    this.setState({
      topic: prit.target.value,
    });
  };
  handleSubmit = (prit) => {
    alert(
      `Username: ${this.state.userName} Comments: ${this.state.comments} Topic: ${this.state.topic}`
    );
    prit.preventDefault();
  };
  render() {
    const { userName, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={this.HandleUsernameChange}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="value">Topic:</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Node">Node</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

//onChange: this is use to changel data in webpage and controll using reactjs.
