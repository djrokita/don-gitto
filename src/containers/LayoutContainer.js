import React, { Component } from "react";

import Layout from "../components/layout";

export default class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  submitHandler() {
    console.log("submit");
  }

  inputHandler({ target: { value } }) {
    this.setState(state => ({ input: value }));
  }

  render() {
    const { input } = this.state;
    console.log("TCL: render -> input", input);
    return (
      <Layout
        inputHandler={this.inputHandler}
        inputValue={input}
        submitHandler={this.submitHandler}
      >
        Lorem
      </Layout>
    );
  }
}
